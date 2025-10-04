let sprite: game.LedSprite = null
let number = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # . . # #
        . . # # #
        . # # # .
        # # # . .
        `)
    sprite = game.createSprite(2, 2)
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
        basic.showNumber(game.score())
        control.reset()
    }
})
basic.forever(function () {
    number = randint(0, 10)
    if (number == 0) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (number == 1) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (number == 2) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (number == 3) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (number == 4) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (number == 5) {
    	
    } else if (number == 6) {
    	
    } else if (number == 0) {
    	
    } else if (number == 7) {
    	
    } else if (number == 8) {
    	
    } else if (number == 9) {
    	
    } else {
    	
    }
})
basic.forever(function () {
    sprite.ifOnEdgeBounce()
})
