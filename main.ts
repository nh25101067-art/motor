makerbit.connectUltrasonicDistanceSensor(DigitalPin.P8, DigitalPin.P13)
let distance = 0
basic.forever(function () {
    basic.showNumber(makerbit.getUltrasonicDistance(DistanceUnit.CM))
    distance = makerbit.getUltrasonicDistance(DistanceUnit.CM)
    if (distance <= 10) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    } else {
        if (distance >= 25) {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 60)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 60)
        }
        basic.pause(100)
    }
})
