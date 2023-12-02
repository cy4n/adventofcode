const fs = require("fs");

const filetext = fs.readFileSync('2.txt').toString('utf-8');
const games = filetext.split('\n');

// const game = {
//     "id": id,
//     "set": {}
// }

function stringToGame(gameString) {
    const gameId = gameString.replace(/Game (\d+):.*/, "$1")
    const diceString = gameString.replace(/Game \d+: (.*)/, "$1")

    const blueCount = diceString.match(/\d+ blue/g)
    const redCount = diceString.match(/\d+ red/g)
    const greenCount = diceString.match(/\d+ green/g)

    const blueMax = blueCount.map((string) => {
        return parseInt(string.replace(/(\d+) blue/, "$1"))
    }).sort(function (a, b) {
        return b - a;
    })[0]

    redCount.map((string) => {
        string.replace(/(\d) red/, "$1")
    })
    const redMax = redCount.map((string) => {
        return parseInt(string.replace(/(\d+) red/, "$1"))
    }).sort((a, b) => b - a)[0]

    greenCount.map((string) => {
        string.replace(/(\d) green/, "$1")
    })

    const greenMax = greenCount.map((string) => {
        return parseInt(string.replace(/(\d+) green/, "$1"))
    }).sort((a, b) => b - a)[0]

    // console.log({gameId: gameId, blueMax, redMax, greenMax})
    return {gameId: gameId, blueMax, redMax, greenMax}
}

const blueDice = 14
const redDice = 12
const greenDice = 13

const possibleGameIdSum = games.map(
    (gameString) => {
        const game = stringToGame(gameString)

        const possible = game.blueMax <= blueDice && game.redMax <= redDice && game.greenMax <= greenDice
        // console.log({gameId: game.gameId, possible})

        if (possible) {
            return parseInt(game.gameId)
        }
        return 0

    }
).reduce((a, b) => a + b, 0)

const cubeSetPowerSum = games.map(
    (gameString) => {
        const game = stringToGame(gameString)

        const possible = game.blueMax <= blueDice && game.redMax <= redDice && game.greenMax <= greenDice
        const powerOfCurrentSet = game.blueMax*game.redMax*game.greenMax

        return powerOfCurrentSet

    }
).reduce((a, b) => a + b, 0)

console.log({possibleGameIdSumFirstHalf: possibleGameIdSum})
console.log({sumOfAllCubeSetPower: cubeSetPowerSum})