import os
from gpiozero import LED
from time import sleep

os.environ['PIGPIO_ADDR'] = '192.168.178.148'

red = LED(18)
green = LED(23)

try:
    while True:
        red.on()
        green.off()
        sleep(0.5)
        red.off()
        green.on()
        sleep(0.5)
except KeyboardInterrupt:
    red.off()
    green.off()
