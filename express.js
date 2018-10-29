const express = require('express')
const app = express()
const quiz = require('./quiz')
const startSolving = require('./index')
const operators = require('./operators')
const port = 3000
const jsonfile = require('jsonfile')
const bodyParser = require('body-parser')
const file = 'db/quiz.json'
const jsonParser = bodyParser.json()
const cors = require('cors')

app.use(cors())

function readAllQuiz() {
  return jsonfile.readFileSync(file)
}

function readSingleQuiz(id) {
  let quiz = readAllQuiz().filter(e => e.id === parseInt(id))
  return quiz
}

function editQuiz(id, data) {
  let quiz = readAllQuiz()
  let index = quiz.findIndex(e => e.id === parseInt(id))
  if (index < 0) return false
  quiz[index].start = data.start
  quiz[index].goal = data.goal
  quiz[index].moves = data.moves
    
  return quiz
}

function editOperators(id, data) {
  let quiz = readAllQuiz()
  let index = quiz.findIndex(e => e.id === parseInt(id))
  if (index < 0) {
    quiz[index].operators = []
    // return false
  } else {
    quiz[index].operators = data.operators
  }
  return quiz
}

function allOperators(id) {
  let quiz = readAllQuiz()
  let index = quiz.findIndex(e => e.id === parseInt(id))
  if (index < 0) return false
  return quiz[index].operators
}

function addQuiz(data) {
  let quiz = readAllQuiz()
  let index = quiz.findIndex(e => e.id === parseInt(data.id))
  if (index > -1) return false
  let newQuiz = {
    id: data.id,
    start: data.start,
    goal: data.goal,
    moves: data.moves,
    operators: []
  }
  quiz.push(newQuiz)
  return quiz
}

/**
 * add new quiz
 */
app.post('/quiz', jsonParser,(req, res) => {
  const add = addQuiz(req.body)
  if (!add) res.send('err')
  else {
    jsonfile.writeFile(file, add)
    res.send('success')
  }
})

/**
 * view quiz by :id
 */
app.get('/quiz/:id', (req, res) => {
  let quiz = readSingleQuiz(req.params.id)
  if (quiz.length) res.send(quiz[0])
  res.send('404')
})

/**
 * edit quiz by :id
 */
app.put('/quiz/:id', jsonParser, (req, res) => {
  let quiz = editQuiz(req.params.id, req.body)
  if (!quiz) res.send('404')
  else {
    jsonfile.writeFile(file, quiz)
    res.send(`Success ${req.params.id}`)
  }
})

/**
 * all quiz
 */
app.get('/quiz', (req, res) => {
  let quiz = readAllQuiz()
  res.send(quiz)
})

/**
 * add operator on quiz by :id
 */
app.post('/operators/:id', jsonParser, (req, res) => {
  let quiz = editOperators(req.params.id, req.body)
  if (!quiz) res.send('404')
  else {
    jsonfile.writeFile(file, quiz)
    res.send(`Success Operators ${req.params.id}`)
  }
})

/**
 * get all operator in quiz by :id
 */
app.get('/operators/:id', (req, res) => {
  let quiz = allOperators(req.params.id)
  if (!quiz) res.send(404)
  else res.send(quiz)
})

/**
 * all operators are available
 */
app.get('/operators', (req, res) => {
  let operator = []
  for (let o in operators) {
    operator.push(o)
  }
  operator.push('changeTheWorld')
  operator.push('store')
  
  res.send(operator)
})

// solve per quiz
app.get('/solve/:id', (req, res) => {
  let q = readSingleQuiz(req.params.id)
  if (q.length) {
    let result = startSolving(q[0], q[0].operators)
    if (result.length) res.send(result)
    else res.send(`quiz ${req.params.id}, dosn't have the answer`)
  } else {
    res.send(`quiz ${req.params.id}, not found`)
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))