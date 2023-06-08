from js import xworker

## import socket
## # monkey-patch socket.create_connnection to use a websocket instead
## def ws_create_connection(address):
##     host, port = address
##     url = f'ws://{host}:{port}'
##     sock = SyncWebSocket(url)
##     return sock

## socket.create_connnection = ws_create_connection

class SyncWebSocket:

    def __init__(self, url):
        print('[worker] calling websocket_open', url)
        self.n = xworker.sync.websocket_open(url)

    def close(self):
        print('[worker] calling websocket_close')
        xworker.sync.websocket_close(self.n)

    def send(self, data):
        if type(data) is not bytes:
            raise TypeError('expected bytes')
        print('[worker] calling websocket_send')
        data_str = data.decode('latin-1')
        xworker.sync.websocket_send(self.n, data_str)

    def recv(self, bufsize=-1):
        print('[worker] calling websocket_recv')
        data_str = xworker.sync.websocket_recv(self.n, bufsize)
        data_bytes = data_str.encode('latin-1')
        return data_bytes
