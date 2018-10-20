function add(start, value) {
  return start + value
}

function sub(start, value) {
  return start - value
}

function mul(start, value) {
  return start * value
}

function div(start, value) {
  return start / value
}

function mirror(value) {
  let mirrorValue = value.toString().split('')
  for (let i = mirrorValue.length; i > 0; i--) {
    mirrorValue.push(mirrorValue[i - 1])
  }
  return mirrorValue.join('')
}

function trimBack(value) {
  var a = value.toString().split('')
  a.pop()
  return a.join('')
}

function trimFront(value) {
  var a = value.toString().split('')
  a.shift()
  return a.join('')
}

function addBack(start, value) {
  let add = ''
  if (start) {
    add = start.toString()
  }
  return `${add}${value.toString()}`

}

function transform(start, operator) {
  var char = start.toString()
  var oldVal = operator.oldVal
  var newVal = operator.newVal
  if (!char) return false
  var reg = new RegExp(oldVal, 'g')
  var done = char.replace(reg, newVal)
  return done
}

function pow(start, value) {
  return Math.pow(start, value)
}

function flip(start) {
  if (start < 0) return Math.abs(start)
  return -Math.abs(start)
}

function reverse(start) {
  let arr = []
  let transform = Math.abs(start)
  let old = transform.toString().split('')
  for (let i = old.length - 1; i >= 0; i--) {
    arr.push(old[i])
  }
  if (start < 0) arr.unshift('-')
  return arr.join('')
}

function sum(start) {
  let newValue = 0
  let clear = Math.abs(start)
  clear.toString().split('').forEach(e => {
    newValue += parseInt(e)
  })
  return newValue
}

function shift(start) {
  let arr = []
  let transform = Math.abs(start)
  let old = transform.toString().split('')
  for (let i = 0; i < old.length; i++) {
    let pick = i - 1
    if (i === 0) pick = old.length - 1
    arr[pick] = old[i]
  }
  if (start < 0) arr.unshift('-')
  return arr.join('') 
}

function mirror(start) {
  const normalize = Math.abs(start)
  const value = normalize.toString().split('')
  const newValue = start.toString().split('')
  for (let i = value.length - 1; i >= 0; i--) {
    newValue.push(value[i])
  }
  return newValue.join('')
}

function changeTheWorld(operator, allOperators) {
  // console.log(allOperators)
}


module.exports = {
  add: add,
  sub: sub,
  mul: mul,
  div: div,
  mirror: mirror,
  trimBack: trimBack,
  trimFront: trimFront,
  addBack: addBack,
  transform: transform,
  pow: pow,
  flip: flip,
  reverse: reverse,
  sum: sum,
  mirror: mirror,
  shift: shift,
  changeTheWorld
}