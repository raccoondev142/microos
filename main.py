def on_button_pressed_a():
    global mouse
    if loaded == 1:
        mouse += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global mouse
    if loaded == 1:
        mouse += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global started, loaded
    if started == 0:
        started = 1
        music.play_melody("C E G C5 - - - - ", 120)
        basic.show_string("MicroOS")
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(500)
        basic.clear_screen()
        basic.pause(500)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . # . #
                        . . . . .
                        # # # # #
        """)
        loaded = 1
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

loaded = 0
started = 0
started = 0
loaded = 0
mouse = 0
music_program_loaded = 0

def on_forever():
    global mouse, started, music_program_loaded
    if loaded == 1:
        if mouse == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # . # . #
                                . . . . .
                                # # # # #
            """)
        if mouse == -1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # . . # #
                                . . . . .
                                # # # # #
            """)
        if mouse == -2:
            basic.show_leds("""
                . . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # # # # #
            """)
        if mouse == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # # . . #
                                . . . . .
                                # # # # #
            """)
        if mouse == 2:
            basic.show_leds("""
                # . . . .
                                . . . . .
                                # . . . #
                                . . . . .
                                # # # # #
            """)
        if mouse == 2 and input.logo_is_pressed():
            basic.show_string("Goodbye!")
            music.play_melody("C5 G D C - - - - ", 120)
            mouse = 0
            started = 0
        if mouse == -2 and input.logo_is_pressed():
            basic.show_icon(IconNames.EIGTH_NOTE)
            for index in range(2):
                music.play_melody("C G C C5 E A C E ", 120)
            basic.clear_screen()
            basic.show_string("A=Replay,B=Exit.")
            if input.button_is_pressed(Button.A):
                basic.show_icon(IconNames.EIGTH_NOTE)
                for index2 in range(4):
                    music.play_melody("C G C C5 E A C E ", 120)
                basic.clear_screen()
                basic.show_string("Press A to replay, Press B to exit.")
            if input.button_is_pressed(Button.B):
                mouse = -2
                music_program_loaded = 0
                basic.show_leds("""
                    . . . . #
                                        . . . . .
                                        # . . . #
                                        . . . . .
                                        # # # # #
                """)
        if mouse == -3:
            mouse = -2
        if mouse == 3:
            mouse = 2
basic.forever(on_forever)
