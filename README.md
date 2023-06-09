# pyberryscript - control the Raspberry from PyScript

Some code which shows how to control GPIO's over websocket.

## Setup (hw)

Connect two leds to pin 12 and 16, which corresponds to GPIO 18 and GPIO 23, with the usual
resistor, etc.

## Setup (raspberry side)

First of all, you need to install `pigpio` and start the `pigpiod` daemon:

For more info, see:
https://abyz.me.uk/rpi/pigpio/index.html
https://abyz.me.uk/rpi/pigpio/pigpiod.html
https://abyz.me.uk/rpi/pigpio/download.html

```
$ apt install pigpio
$ pigpiod
```

Then, you need to clone and compile the C version of `websockify`; you might
need to `apt` install gcc and `libffi-dev`:

```
$ git clone git@github.com:novnc/websockify-other.git
$ cd websockify-other/c
$ make

# this starts a websockets server on port 1234; all connections are re-routed
# to the TCP port 8888 (where pigpiod runs)
$ ./websockify 1234 localhost:8888
```

## Setup (pyscript)

To serve a pyscript app, you need a webserver. This assumes that you will run
the webserver on your laptop: at this moment, it is important that you access
the page at `localhost` or `127.0.0.1`, else the browser enable some
Same-Origin restrictions which prevents the demo to run..

Open `demo/gpiozero_worker.py`, you will find this line:

```
import pyberryscript
pyberryscript.setup(address='192.168.178.148', port='1234')
```

Change it to point to the address of your Raspberry on your LAN.

Then, you can start the webserver:

```
$ cd demo
$ ./http_server.py
```

Now, open http://localhost:8000/ and enjoy the demo!

**NOTE**: threads don't work yet on pyscript: because of this, I had to
disabled the `notify` functionality of `pigpio`, and things like `LED.pulse()`
also don't work.
