import time
import socket

HOST = '192.168.178.148'
PORT = 8888

RED_ON  = b'\x04\x00\x00\x00\x12\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00'
RED_OFF = b'\x04\x00\x00\x00\x12\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'

def main():
    sock = socket.create_connection((HOST, PORT), None)
    sock.send(RED_ON)
    time.sleep(0.5)
    sock.send(RED_OFF)
    sock.close()

main()
