import pyscript_sync
pyscript_sync.monkey_patch()

import pigpio          # https://abyz.me.uk/rpi/pigpio/python.html


RED = 18
#GREEN = 23

print('[worker] connect to pigpiod')
pi = pigpio.pi('192.168.178.148', 1234)

def turn_on():
    pi.write(RED, 1)

def turn_off():
    pi.write(RED, 0)

def on_message(event):
    if event.data == 'turn_on':
        turn_on()
    elif event.data == 'turn_off':
        turn_off()
    else:
        print('[worker] UNKNOWN MESSAGE', event.data)
    #xworker.postMessage("bye")

xworker.onmessage = on_message
print('[worker ready]')
