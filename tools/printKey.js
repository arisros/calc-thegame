const logger = require('node-color-log')
const success = { font: 'black', bg: 'green' }
const divider = { font: 'black', bg: 'magenta' }
const title = { font: 'black', bg: 'blue' }

function printKey(step, operator, quiz) {
  logger.colorLog(title, `==== Quiz No: ${quiz.id} ====`)
  const stepMatch = []
  step.forEach(e => {
    const keyFounded = operator.filter(d => d.id === e)
    if (keyFounded.length) stepMatch.push(keyFounded[0])
  })
  stepMatch.forEach((e, i) => {
    logger.colorLog(divider, `==== Step ${i + 1} ====`)
    logger.colorLog(success, `Operator: ${e.operating}`)
    if (e.value) logger.colorLog(success, `Value: ${e.value}`)
    if (e.oldVal) logger.colorLog(success, `Old Value: ${e.oldVal}`)
    if (e.newVal) logger.colorLog(success, `New Value: ${e.newVal}`)
    // if (e.history.length > 1) logger.colorLog(success, `Onooo: ${e.newVal}`)
    console.log(e.history)
    logger.colorLog(divider, '===============')
  })
  if(!stepMatch.length) {
    console.log('not found')
  }
  // logger.colorLog({font: 'white',bg: 'green'}, stepMatch)
  // console.log(stepMatch)
}

module.exports = printKey