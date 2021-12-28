const { readFileSync } = require('fs')

const random = () => {
    const viewports = readFileSync('./viewports.json')
    const viewportsArray = JSON.parse(viewports)
    const randomIndex = Math.floor(Math.random() * viewportsArray.length)
    return viewportsArray[randomIndex]
}

module.exports = { random }