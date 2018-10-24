const add = require('./operators').add
const sub = require('./operators').sub
const mul = require('./operators').mul
const div = require('./operators').div
const trimBack = require('./operators').trimBack
const trimFront = require('./operators').trimFront
const addBack = require('./operators').addBack
const transform = require('./operators').transform
const pow = require('./operators').pow
const flip = require('./operators').flip
const mirror = require('./operators').mirror
const reverse = require('./operators').reverse
const sum = require('./operators').sum
const shift = require('./operators').shift
const addBackStore = require('./operators').addBackStore
const inv = require('./operators').inv

function solvePerItem(value, operator, temp) {
  let res = 0
  switch (operator.operating) {
    case 'add':
      res = add(value, operator.value)
      break;

    case 'sub':
      res = sub(value, operator.value)
      break;

    case 'mul':
      res = mul(value, operator.value)
      break;

    case 'div':
      res = div(value, operator.value)
      break;

    case 'trimBack':
      res = trimBack(value)
      break;

    case 'trimFront':
      res = trimFront(value)
      break;

    case 'addBack':
      res = addBack(value, operator.value)
      break;

    case 'transform':
      res = transform(value, operator)
      break;
    
    case 'pow':
      res = pow(value, operator.value)
      break;
    
    case 'flip':
      res = flip(value)
      break;

    case 'mirror':
      res = mirror(value)
      break;
    
    case 'reverse':
      res = reverse(value)
      break;
    
    case 'sum':
      res = sum(value)
      break;
    
    case 'shift':
      res = shift(value)
      break;
    
    case 'addBackStore':
      res = addBackStore(value, temp)
      break;
    
    case 'inv':
      res = inv(value, operator.value)
      break;

    default:
      break;

  }
  return res
}

module.exports = solvePerItem

