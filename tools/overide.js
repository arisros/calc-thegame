const changeTheWorld = require('../operators').changeTheWorld

function overide(operators, operator) {
  let newOperators = operators.map(e => {
    let value = e.value
    let obj = {
      id: e.id,
      operating: e.operating,
      value: value,
      oldVal: e.oldValue,
      newVal: e.newValue,
      overide: e.overide,
      history: [e.value]
    }
    if (e.operating !== 'changeTheWorld' || e.operating !== 'sum') {
      obj.value = e.value + operator.value
      obj.history.push(obj.value)
    }
    return obj
  })
  return newOperators
}

module.exports = overide