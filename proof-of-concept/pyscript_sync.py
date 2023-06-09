import js
from js import xworker

def monkey_patch():
    import socket
    socket.create_connection = ws_create_connection


# monkey-patch socket.create_connection to use a websocket instead
def ws_create_connection(address, timeout=None):
    host, port = address
    url = f'ws://{host}:{port}'
    print('[ws_create_connection] connecting to', url)
    sock = SyncWebSocket(url)
    return sock

class SyncWebSocket:

    def __init__(self, url):
        #print('[SyncWebSocket] calling websocket_open', url)
        self.n = xworker.sync.websocket_open(url)

    def close(self):
        #print('[SyncWebSocket] calling websocket_close')
        xworker.sync.websocket_close(self.n)

    def send(self, data):
        if type(data) is not bytes:
            raise TypeError('expected bytes')
        #print('[SyncWebSocket] calling websocket_send')
        data_str = data.decode('latin-1')
        xworker.sync.websocket_send(self.n, data_str)

    def recv(self, bufsize=-1):
        #print('[SyncWebSocket] calling websocket_recv')
        data_str = xworker.sync.websocket_recv(self.n, bufsize)
        data_bytes = data_str.encode('latin-1')
        return data_bytes

    def setsockopt(self, *args):
        js.console.warn('[SyncWebSocket] WARNING: setsockopt ignored')
