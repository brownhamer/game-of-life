def on_received_number(receivedNumber):
    receivedNumber = receivedNumber
radio.on_received_number(on_received_number)

halfSecond = 500000
myNumber = randint(0, 9)
receivedNumber2 = -1
radio.set_group(1)

def on_every_interval():
    global myNumber
    control.wait_micros(randint(0, halfSecond))
    if receivedNumber2 == myNumber:
        pins.analog_write_pin(AnalogPin.P13, 0)
        pins.analog_write_pin(AnalogPin.P14, 1023)
    else:
        pins.analog_write_pin(AnalogPin.P13, 1023)
        pins.analog_write_pin(AnalogPin.P14, 0)
        myNumber = randint(0, 9)
    basic.show_number(myNumber)
    radio.send_number(myNumber)
loops.every_interval(1000, on_every_interval)
