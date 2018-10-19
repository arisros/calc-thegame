function printKey(step, operator) {
  var stepMatch = []
  step.forEach(e => {
    var keyFounded = operator.filter(d => d.id === e)
    if (keyFounded.length) stepMatch.push(keyFounded[0])
  })

  console.log(stepMatch)
}

module.exports = printKey