const quiz = require('./quiz')
const maping = require('./tools/maping')
const executor = require('./executor')
const permutations = require('./tools/permutations')
const printKey = require('./tools/printKey')
const printError = require('./tools/printError')
const overide = require('./tools/overide')
const filteringPosibilities = require('./tools/filteringPosibilities')

/**
 * 
 * @param {object} quiz object of quiz
 * @param {array} operators 
 */
function startSolving(quiz, operators) {
  const id = maping(operators).id
  const findStore = operators.filter(e => e.operating === 'store')
  const addStorePosiblities = findStore.length > 0 ? quiz.moves + 2 : quiz.moves
  
  const allPosibilities = permutations(id, addStorePosiblities)
  const operatorsWithId = maping(operators).operatorsWithId
  const storeId = operatorsWithId.filter(e => e.operating === 'store')
  const filterPosibilities = allPosibilities.filter(filteringPosibilities.bind(this, storeId))
  
  console.log(id, addStorePosiblities, '===', allPosibilities.length)
  console.log(filterPosibilities.length)
  // solving all posibilities
  return solving(filterPosibilities, quiz, operatorsWithId)
}

/**
 * 
 * @param {array} allPosibilities with permutation with repeatation
 * @param {object} quiz id, goal, start, moves, operators
 * @param {array} operatorsWithId with id in it
 */
function solving(allPosibilities, quiz, operatorsWithId) {
  let keyFounds = []
  allPosibilities.forEach((e) => {
    let start = quiz.start
    let operatorWithId = operatorsWithId

    let store = null
    let didntStore = 0

    e.forEach((g) => {
      let operator = operatorWithId.filter(k => k.id === g)[0]
      if (operator.operating === 'store') {
        store = start
      }
      else if (operator.overide) {
        didntStore++
        operatorWithId = overide(operatorWithId, operator)
      } else {
        didntStore++
        start = executor(parseFloat(start), operator, store)
      }
      if (parseFloat(start) === quiz.goal && didntStore === quiz.moves) {
        let found = { key: e, operator, operatorWithId, quiz }
        keyFounds.push(found)
        // printKey(e, operatorWithId, quiz)
      }
    })
  })
  return keyFounds
}

/**
 * 
 * @param {array} quiz array of quiz
 */
function execute(quiz) {
  quiz.forEach(e => {
    startSolving(e, e.operators)
  })
}

// execute(quiz)


module.exports = startSolving