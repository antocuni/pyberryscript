#print("hello from toggle_led_worker")
#print("Answer: " + xworker.sync.input("What is 2 + 3?"))

from js import xworker

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


URL = 'ws://192.168.178.148:1234'

RED_ON  = b'\x04\x00\x00\x00\x12\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00'
RED_OFF = b'\x04\x00\x00\x00\x12\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'


_SOCK = None
def get_socket():
    global _SOCK
    if _SOCK is None:
        _SOCK = SyncWebSocket(URL)
    return _SOCK

def turn_on():
    sock = get_socket()
    sock.send(RED_ON)
    sock.recv()

def turn_off():
    sock = get_socket()
    sock.send(RED_OFF)
    sock.recv()

def on_message(event):
    print('[worker] got', event.data)
    if event.data == 'turn_on':
        turn_on()
    elif event.data == 'turn_off':
        turn_off()
    else:
        print('[worker] UNKNOWN MESSAGE', event.data)
    #xworker.postMessage("bye")

xworker.onmessage = on_message

print('[worker ready]')
