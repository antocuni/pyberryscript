import os
import pyscript_sync
pyscript_sync.monkey_patch()

def setup(address, port):
    os.environ['GPIOZERO_PIN_FACTORY'] = 'pigpio'
    os.environ['PIGPIO_ADDR'] = '192.168.178.148'
    os.environ['PIGPIO_PORT'] = '1234'
