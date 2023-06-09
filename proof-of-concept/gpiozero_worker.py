print('[worker] gpiozero demo')
import pyscript_sync
pyscript_sync.monkey_patch()


import time
import os
from gpiozero import LED

os.environ['GPIOZERO_PIN_FACTORY'] = 'pigpio'
os.environ['PIGPIO_ADDR'] = '192.168.178.148'
os.environ['PIGPIO_PORT'] = '1234'

red = LED(18)
green = LED(23)


def turn_on():
    red.on()

def turn_off():
    red.off()

def flash():
    for i in range(5):
        red.on()
        green.off()
        sleep(0.5)
        red.off()
        green.on()
        sleep(0.5)

def on_message(event):
    m = event.data
    if m == 'turn_on':
        turn_on()
    elif m == 'turn_off':
        turn_off()
    elif m == 'flash':
        flash()
    else:
        print('[worker] UNKNOWN MESSAGE', m)
    #xworker.postMessage("bye")

xworker.onmessage = on_message
print('[worker ready]')
