const bowlingGame = () => {
    let currentScore = 0

    const roll = (pins) => {
        if(pins === 10) {
            return
        } else {
            currentScore += pins
        }
    }

    const score = () => {
        return currentScore
    }

    return {
        roll,
        score
    }
}


module.exports = bowlingGame
