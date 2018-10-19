var add = require('./operators').add
var sub = require('./operators').sub
var mul = require('./operators').mul
var div = require('./operators').div
var mirror = require('./operators').mirror
var trimBack = require('./operators').trimBack
var trimFront = require('./operators').trimFront
var addBack = require('./operators').addBack
var transform = require('./operators').transform
var pow = require('./operators').pow
var flip = require('./operators').flip
var mirror = require('./operators').mirror
var reverse = require('./operators').reverse
var sum = require('./operators').sum

function solvePerItem(value, operator) {
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

    case 'mirror':
      res = mirror(value)
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


    default:
      break;

  }
  return res
}

module.exports = solvePerItem