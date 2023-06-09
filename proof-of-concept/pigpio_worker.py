import pyscript_sync
pyscript_sync.monkey_patch()

import time
import pigpio          # https://abyz.me.uk/rpi/pigpio/python.html


RED = 18
#GREEN = 23

print('[worker] connect to pigpiod')
pi = pigpio.pi('192.168.178.148', 1234)

def turn_on():
    pi.write(RED, 1)

def turn_off():
    pi.write(RED, 0)

def blink():
    for i in range(5):
        turn_on()
        time.sleep(0.5)
        turn_off()
        time.sleep(0.5)

def on_message(event):
    m = event.data
    if m == 'turn_on':
        turn_on()
    elif m == 'turn_off':
        turn_off()
    elif m == 'blink':
        blink()
    else:
        print('[worker] UNKNOWN MESSAGE', m)
    #xworker.postMessage("bye")

xworker.onmessage = on_message
print('[worker ready]')
