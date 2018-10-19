const quiz = require('./quiz')
const maping = require('./tools/maping')
const executor = require('./executor')
const permutations = require('./tools/permutations')
const printKey = require('./tools/printKey')

/**
 * 
 * @param {object} quiz object of quiz
 * @param {array} operators 
 */
function startSolving(quiz, operators) {
  const id = maping(operators).id
  const allPosibilities = permutations(id, quiz.moves)
  const operatorsWithId = maping(operators).operatorsWithId

  // solving all posibilities
  solving(allPosibilities, quiz, operatorsWithId)
}

/**
 * 
 * @param {array} allPosibilities with permutation with repeatation
 * @param {object} quiz id, goal, start, moves, operators
 * @param {array} operatorsWithId with id in it
 */
function solving(allPosibilities, quiz, operatorsWithId) {
  allPosibilities.forEach(e => {
    let start = quiz.start
    e.forEach(g => {
      let operator = operatorsWithId.filter(k => k.id === g)
      start = executor(parseFloat(start), operator[0])
      if (parseFloat(start) === quiz.goal) {
        printKey(e, operatorsWithId)
      }
    })
  })
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

execute(quiz)
