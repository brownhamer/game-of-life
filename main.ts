radio.onReceivedNumber(function (receivedNumber) {
    receivedNumber = receivedNumber
})
let myNumber = randint(0, 9)
let receivedNumber = -1
radio.setGroup(1)
loops.everyInterval(1000, function () {
    control.waitMicros(randint(1, 123))
    if (receivedNumber == myNumber) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
        myNumber = randint(0, 9)
    }
    basic.showNumber(myNumber)
    radio.sendNumber(myNumber)
})
