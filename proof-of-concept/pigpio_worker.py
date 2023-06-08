from pigpio_pyscript import SyncWebSocket

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
    #sock.recv()

def turn_off():
    sock = get_socket()
    sock.send(RED_OFF)
    #sock.recv()

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
