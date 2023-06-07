# https://abyz.me.uk/rpi/pigpio/python.html

import time
import pigpio

RED = 18
#GREEN = 23

print('connect')
pi = pigpio.pi('192.168.178.148')

print('LED ON')
pi.write(RED, 1)

time.sleep(0.5)

print('LED OFF')
pi.write(RED, 0)

print('bye')
