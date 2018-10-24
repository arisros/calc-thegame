const express = require('express')
const app = express()
const quiz = require('./quiz')
const startSolving = require('./index')
const port = 3000

app.get('/solve/:id', (req, res) => {
  let q = quiz.filter(e => e.id === parseInt(req.params.id))
  if (q.length) {
    let result = startSolving(q[0], q[0].operators)
    if (result.length) res.send(result)
    else res.send(`quiz ${req.params.id}, dosn't have the answer`)
  } else {
    res.send(`quiz ${req.params.id}, not found`)
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))