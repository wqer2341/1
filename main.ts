input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S1, 90)
})
basic.forever(function () {
	
})
