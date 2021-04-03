let temp = 0
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    basic.pause(1000)
    basic.clearScreen()
})
