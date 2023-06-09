import os
from gpiozero import LED, PWMLED
import time

os.environ['PIGPIO_ADDR'] = '192.168.178.148'

def blink():
    red = LED(18)
    green = LED(23)

    try:
        while True:
            red.on()
            green.off()
            time.sleep(0.5)
            red.off()
            green.on()
            time.sleep(0.5)
    except KeyboardInterrupt:
        red.off()
        green.off()


def pulse():
    red = PWMLED(18)
    red.value = 0.5
    step = 0.1
    while True:
        new_value = red.value + step
        if new_value <= 0.0:
            new_value = 0.0
            step = -step
        if new_value >= 1.0:
            new_value = 1.0
            step = -step
        red.value = new_value
        time.sleep(0.01)


if __name__ == '__main__':
    #blink()
    pulse()
