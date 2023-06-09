import asyncio
from wasmsockets.client import connect

def setup(xworker):
    xworker.sync.sleep = asyncio.sleep
    xworker.sync.websocket_open = websocket_open
    xworker.sync.websocket_close = websocket_close
    xworker.sync.websocket_send = websocket_send
    xworker.sync.websocket_recv = websocket_recv


WEB_SOCKETS = []
async def websocket_open(url):
    n = len(WEB_SOCKETS)
    sock = await connect(url)
    WEB_SOCKETS.append(sock)
    return n

async def websocket_close(n):
    sock = WEB_SOCKETS[n]
    await sock.close()
    WEB_SOCKETS[n] = None
    return 0

async def websocket_send(n, data_str):
    assert type(data_str) is str
    data_bytes = data_str.encode('latin-1')
    sock = WEB_SOCKETS[n]
    await sock.send(data_bytes)
    return 0

async def websocket_recv(n, bufsize):
    sock = WEB_SOCKETS[n]
    data_buf = await(sock.recv()) # ArrayBuffer
    data_bytes = data_buf.to_bytes()
    data_str = data_bytes.decode('latin-1')
    if bufsize != -1 and len(data_bytes) != bufsize:
        js.consoel.warn(f'WARNING: expected {bufsize} bytes, got {len(data_bytes)}')
    return data_str
