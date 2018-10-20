const logger = require('node-color-log')
const error = { font: 'black', bg: 'red' }
const divider = { font: 'black', bg: 'magenta' }
const title = { font: 'black', bg: 'blue' }

function printKey(quiz) {
  logger.colorLog(title, `==== Quiz No: ${quiz.id} ====`)
  logger.colorLog(error, `==== Not Found ====`)
  logger.colorLog(divider, '===============')
}

module.exports = printKey