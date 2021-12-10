input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (loaded == 1) {
        mouse += 1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (loaded == 1) {
        mouse += -1
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    if (started == 0) {
        started = 1
        music.playMelody("C E G C5 - - - - ", 120)
        basic.showString("MicroOS")
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
                        . . . . .
                        # . # . #
                        . . . . .
                        # # # # #
        `)
        loaded = 1
    }
    
})
let loaded = 0
let started = 0
started = 0
loaded = 0
let mouse = 0
let music_program_loaded = 0
basic.forever(function on_forever() {
    
    if (loaded == 1) {
        if (mouse == 0) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                # . # . #
                                . . . . .
                                # # # # #
            `)
        }
        
        if (mouse == -1) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                # . . # #
                                . . . . .
                                # # # # #
            `)
        }
        
        if (mouse == -2) {
            basic.showLeds(`
                . . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # # # # #
            `)
        }
        
        if (mouse == 1) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                # # . . #
                                . . . . .
                                # # # # #
            `)
        }
        
        if (mouse == 2) {
            basic.showLeds(`
                # . . . .
                                . . . . .
                                # . . . #
                                . . . . .
                                # # # # #
            `)
        }
        
        if (mouse == 2 && input.logoIsPressed()) {
            basic.showString("Goodbye!")
            music.playMelody("C5 G D C - - - - ", 120)
            mouse = 0
            started = 0
        }
        
        if (mouse == -2 && input.logoIsPressed()) {
            basic.showIcon(IconNames.EigthNote)
            for (let index = 0; index < 2; index++) {
                music.playMelody("C G C C5 E A C E ", 120)
            }
            basic.clearScreen()
            basic.showString("A=Replay,B=Exit.")
            if (input.buttonIsPressed(Button.A)) {
                basic.showIcon(IconNames.EigthNote)
                for (let index2 = 0; index2 < 4; index2++) {
                    music.playMelody("C G C C5 E A C E ", 120)
                }
                basic.clearScreen()
                basic.showString("Press A to replay, Press B to exit.")
            }
            
            if (input.buttonIsPressed(Button.B)) {
                mouse = -2
                music_program_loaded = 0
                basic.showLeds(`
                    . . . . #
                                        . . . . .
                                        # . . . #
                                        . . . . .
                                        # # # # #
                `)
            }
            
        }
        
        if (mouse == -3) {
            mouse = -2
        }
        
        if (mouse == 3) {
            mouse = 2
        }
        
    }
    
})
