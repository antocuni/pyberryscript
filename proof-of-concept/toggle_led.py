# https://abyz.me.uk/rpi/pigpio/python.html

import time
import pigpio

RED = 18
#GREEN = 23
BUILTIN = 47  # this is the builtin led of the pi zero

print('connect')
pi = pigpio.pi('192.168.178.148')

try:
    while True:
        pi.write(RED, 1)
        time.sleep(0.5)
        pi.write(RED, 0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print()
    pass
