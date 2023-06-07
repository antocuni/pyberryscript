# Proof of concept

Some code which shows how to control GPIO's over websocket.

## Setup (hw)

Connect a led to pin 12, which corresponds to GPIO 18, with the usual
resistor, etc.

**IMPORTANT**: it MUST be GPIO 18, because it is hardcoded in the binary
commands sent to pigpiod.

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

## Setup (laptop side)

Now you are ready to try to control GPIO remotely from your laptop.

Edit `toggle_led.py` and fix the IP address: it should point to the IP address
of the raspberry, which should be in your LAN.

Run the following, which should flash the led for half a second:

```
$ pip install pigpio
$ python toggle_led.py
```

This connects to the "normal" pigpiod server. It should just work.

## Setup (pyscript)

Open `toggle_led.html` and modify the IP address to point to your
raspberry. Note that this time it is connecting to the WebSocket server run by
websockify.

Start a local webserver on your laptop:
```
python3 -m http.server
```

Open `http://0.0.0.0:8000/toggle_led.html`: hopefully the two buttons should
work.
