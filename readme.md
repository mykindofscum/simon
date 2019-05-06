SIMON (memory game) pseudocode

-initialize board : Buttons
-Four buttons, four different colors: red, blue, green, yellow
-A different sound/beep for each color
-on/off, Start, Strict, Sound(on/off) and a counter display
-Sound: Four tones in the key of e, c#, a, e(one step down) for buttons

Start mode (Initialize)
-Game starts with easy pattern: one button lights up with a tone, waits 
-Timing (Asynchronous function, setInterval method, setTimeout) for player to press button
-As game progress, each round increases previous pattern by one button

-Render?
-player pushes on/off switch
-choose Start or Strict or Sound
-counter display current level: 1


-if player chose the right pattern, 
-counter displays 2,
	-a pleasant beep sound

Otherwise
	-else alert/error beep
	-repeats pattern for player to try again (5 times? 10? Infinity?)
	-each round increases by one button as well as the speed

Memory
	-store memory of players pattern to match game pattern
    -randomize patterns


Strict mode
	-player cannot make any mistakes
	-game starts over if player guesses wrong
	-speed of game gets faster?

-total rounds: 20? 25? 30?

End Game
    -Player guesses all patterns correct
    -Display "You Win", 8-bit music plays

Bonus features if possible: backdrop changes colors/different lol cat pic after each round
