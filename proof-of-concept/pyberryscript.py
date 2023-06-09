import os
import pyscript_sync
pyscript_sync.monkey_patch()

def setup(address, port):
    os.environ['GPIOZERO_PIN_FACTORY'] = 'pigpio'
    os.environ['PIGPIO_ADDR'] = address
    os.environ['PIGPIO_PORT'] = port
