import bowlingGame from './bowlingGame'

describe('bowling game', () => {
    test('score should be equal to number of pins knocked down for 5 pins', () => {
        const game = bowlingGame()
        game.roll(5)
        expect(game.score()).toBe(5)
    })

    test('score should be equal to number of pins knocked down for 3 pins', () => {
        const game = bowlingGame()
        game.roll(3)
        expect(game.score()).toBe(3)
    })

    test('score should accumulate for every roll', () => {
        const game = bowlingGame()
        game.roll(2)
        game.roll(6)
        expect(game.score()).toBe(8)
    })

    test('when all 10 pins are knocked down in a roll then score should not apply right away', () => {
        const game = bowlingGame()
        game.roll(10)
        expect(game.score()).toBe(0)
    })

    test('when all 10 pins are knocked down in a roll then score should equal next two rolls', () => {
        const game = bowlingGame()
        game.roll(10)
        game.roll(9)
        game.roll(1)
        expect(game.score()).toBe(20)
    })
})
