import pyotp
import time
totp=pyotp.TOTP('paste here auth key')
totp.now()

while(True):
    print(totp.now())
    time.sleep(5)