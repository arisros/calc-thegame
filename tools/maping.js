function generateStepId(operators) {
  let startedChar = 97 // start from 'a' character
  let operatorsWithId = operators.map((e, i) => {
    return {
      id: String.fromCharCode(startedChar + i),
      operating: e.operating,
      value: e.value,
      oldVal: e.oldValue,
      newVal: e.newValue,
      overide: e.overide,
      other: e.other,
      history: []
    }
  })
  let id = operatorsWithId.map(e => e.id)
  return {
    operatorsWithId,
    id
  }
}

module.exports = generateStepId