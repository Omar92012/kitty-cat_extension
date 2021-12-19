let setting = 0
let health = 0
let hunger = 0
function wag_tail_if_Pat_head () {
    if (setting == 1) {
        servos.P0.setAngle(45)
        basic.pause(100)
        servos.P0.setAngle(135)
        basic.pause(100)
    }
}
function pat_on_head () {
    if (input.logoIsPressed()) {
        setting = 1
    }
}
function health_but_also_not_purrrrrrr () {
    if (setting == 0) {
        if (health == 100) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . # . #
                . # . # .
                `)
        }
        if (health == 50) {
            basic.showNumber(health)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                `)
        }
        if (health == 30) {
            basic.showNumber(health)
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # . # .
                # . # . #
                `)
        }
        if (health == 15) {
            basic.showNumber(health)
            basic.showLeds(`
                # . # . #
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                `)
        }
        if (health == 0) {
            basic.showNumber(health)
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                . # # # .
                . # # # .
                `)
            soundExpression.sad.play()
        }
    }
}
function sleeping_things () {
    if (setting == 2) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
        health += 5
    }
}
function recognize_that_there_isnt_any_food () {
    hunger += 1
    basic.pause(10000)
}
function set_up () {
    hunger = 0
    music.setBuiltInSpeakerEnabled(true)
    soundExpression.hello.play()
    health = 100
    basic.showNumber(health)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
}
function sleep () {
    setting = 2
    basic.pause(randint(0, 5000))
    setting = 0
}
function diying_from_hunger () {
    if (hunger == 10) {
        health += -1
        basic.pause(1000)
    }
}
function recognize_that_theres_food () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        hunger += -1
        basic.pause(500)
    }
}
function no_pat_on_head () {
    if (!(input.logoIsPressed())) {
        setting = 0
    }
}
function Purrrrrrr () {
    if (setting == 1) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
        health += 1
    }
}
basic.forever(function () {
    pat_on_head()
})
