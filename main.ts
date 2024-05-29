radio.onReceivedNumber(function (receivedNumber) {
    theirNumber = receivedNumber
})
let theirNumber = 0
let halfSecond = 500000
let myNumber = randint(0, 9)
theirNumber = -1
radio.setGroup(1)
loops.everyInterval(1000, function () {
    control.waitMicros(randint(0, halfSecond))
    if (theirNumber == myNumber) {
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
