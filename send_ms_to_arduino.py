import socket
import serial
import struct
import time

values = 12
string = b''
# string += struct.pack('!B',168)

arduino = serial.Serial(port='COM5', baudrate=115200)
hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname).split(".")
# IPAddr.remove('192')
# IPAddr.remove('168')
ip = list(map(int,IPAddr))
print(ip)

# string += struct.pack('!B',ip)
for _ in range(6):
	for i in ip:
		string += struct.pack('!B',i)
		arduino.write(string)
		time.sleep(2)

string += struct.pack('!B',88)
arduino.write(string)
# print("Your Computer Name is:" + hostname)
# print("Your Computer IP Address is:" + IPAddr)