let quiz = [
  // quiz 1
  {
    id: 1,
    start: 0,
    goal: 2,
    moves: 2,
    operators: [
      {
        operating: 'add',
        value: 1
      },
    ]
  },
  // quiz 2
  {
    id: 2,
    start: 2,
    goal: 2,
    moves: 2,
    operators: [
      {
        operating: 'add',
        value: 1
      },
    ]
  },
  // quiz 129
  {
    id: 129,
    start: 140,
    goal: 18,
    moves: 6,
    operators: [
      {
        operating: 'sub',
        value: 3
      },
      {
        operating: 'add',
        value: 9
      },
      {
        operating: 'div',
        value: 12
      },
      {
        operating: 'mirror',
        value: null
      },
      {
        operating: 'trimBack',
        value: null
      },
    ]
  },
  // quiz 130
  {
    id: 130,
    start: 17,
    goal: 33,
    moves: 4,
    operators: [
      {
        operating: 'mul',
        value: 2
      },
      {
        operating: 'sub',
        value: 4
      },
      {
        operating: 'mirror',
        value: null
      },
      {
        operating: 'shift',
        value: null
      },
    ]
  },
  {
    id: 131,
    start: 125,
    goal: 20,
    moves: 8,
    operators: [
      {
        operating: 'mirror',
        value: null
      },
      {
        operating: 'sum',
        value: null
      }
    ]
  },
  {
    id: 132,
    start: 10,
    goal: 15,
    moves: 3,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 1
      },
      {
        operating: 'add',
        value: 2
      }
    ]
  },
  {
    id: 133,
    start: 0,
    goal: 14,
    moves: 4,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 1
      },
      {
        operating: 'add',
        value: 2
      },
      {
        operating: 'addBack',
        value: 1
      }
    ]
  },
  {
    id: 134,
    start: 0,
    goal: 34,
    moves: 3,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 1
      },
      {
        operating: 'addBack',
        value: 2
      },
      {
        operating: 'addBack',
        value: 3
      }
    ]
  },
  {
    id: 135,
    start: 0,
    goal: 101,
    moves: 5,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 2
      },
      {
        operating: 'add',
        value: 5
      },
      {
        operating: 'addBack',
        value: 2
      }
    ]
  },
  {
    id: 136,
    start: 0,
    goal: 28,
    moves: 5,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 3
      },
      {
        operating: 'add',
        value: 2
      },
      {
        operating: 'addBack',
        value: 1
      }
    ]
  },
  {
    id: 137,
    start: 0,
    goal: 42,
    moves: 5,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 1
      },
      {
        operating: 'sub',
        value: 2
      },
      {
        operating: 'add',
        value: 5
      },
      {
        operating: 'mul',
        value: 2
      }
    ]
  },
  {
    id: 138,
    start: 0,
    goal: 25,
    moves: 5,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 2
      },
      {
        operating: 'add',
        value: 2
      },
      {
        operating: 'mul',
        value: 3
      },
      {
        operating: 'sub',
        value: 3
      }
    ]
  },
  {
    id: 139,
    start: 5,
    goal: 41,
    moves: 4,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 2
      },
      {
        operating: 'add',
        value: 4
      },
      {
        operating: 'add',
        value: 8
      },
      {
        operating: 'mul',
        value: 3
      }
    ]
  },
  {
    id: 140,
    start: 33,
    goal: 31,
    moves: 5,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 1
      },
      {
        operating: 'sum',
        value: null
      },
      {
        operating: 'mul',
        value: 4
      },
      {
        operating: 'add',
        value: 2
      },
      {
        operating: 'add',
        value: 3
      }
    ]
  },
  {
    id: 141,
    start: 25,
    goal: 268,
    moves: 5,
    operators: [
      {
        operating: 'changeTheWorld',
        overide: true,
        other: 'add',
        value: 1
      },
      {
        operating: 'add',
        value: 8
      },
      {
        operating: 'mul',
        value: 2
      },
      {
        operating: 'mul',
        value: 5
      }
    ]
  },
  {
    id: 142,
    start: 1,
    goal: 1111,
    moves: 2,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
    ]
  },
  {
    id: 143,
    start: 0,
    goal: 121,
    moves: 4,
    operators: [
      {
        operating: 'add',
        value: 1
      },
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
    ]
  },
  {
    id: 144,
    start: 12,
    goal: 122,
    moves: 4,
    operators: [
      {
        operating: 'reverse',
        value: null
      },
      {
        operating: 'trimBack',
        value: null
      },
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
    ]
  },
  {
    id: 145,
    start: 10,
    goal: 17,
    moves: 5,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'reverse',
        value: null
      },
      {
        operating: 'add',
        value: 2
      },
      {
        operating: 'div',
        value: 3
      },
    ]
  },
  {
    id: 146,
    start: 23,
    goal: 1234,
    moves: 4,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'shift',
        value: null
      },
      {
        operating: 'mul',
        value: 2
      },
      {
        operating: 'sub',
        value: 5
      },
    ]
  },
  {
    id: 147,
    start: 125,
    goal: 1025,
    moves: 6,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'trimBack',
        value: null
      },
      {
        operating: 'mul',
        value: 2
      },
    ]
  },
  {
    id: 148,
    start: 23,
    goal: 115,
    moves: 5,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'flip',
        value: null
      },
      {
        operating: 'sub',
        value: 8
      },
    ]
  },
  {
    id: 149,
    start: 15,
    goal: 16,
    moves: 4,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'transform',
        oldValue: 11,
        newValue: 33
      },
      {
        operating: 'reverse',
        value: null
      },
      {
        operating: 'sum',
        value: null
      },
    ]
  },
  {
    id: 150,
    start: 0,
    goal: 61,
    moves: 7,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'sum',
        value: null
      },
      {
        operating: 'addBack',
        value: 5
      },
      {
        operating: 'trimBack',
        value: null
      },
    ]
  },
  {
    id: 151,
    start: 0,
    goal: 101,
    moves: 5,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'transform',
        oldValue: 3,
        newValue: 1
      },
      {
        operating: 'shift',
        value: null
      },
      {
        operating: 'addBack',
        value: 5
      },
      {
        operating: 'mul',
        value: 6
      },
    ]
  },
  {
    id: 152,
    start: 125,
    goal: 12525,
    moves: 5,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'reverse',
        value: null
      },
      {
        operating: 'addBack',
        value: 1
      },
      {
        operating: 'div',
        value: 5
      },
    ]
  },
  {
    id: 153,
    start: 70,
    goal: 17,
    moves: 6,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'transform',
        oldValue: 8,
        newValue: 1
      },
      {
        operating: 'sum',
        value: null
      },
      {
        operating: 'div',
        value: 2
      },
      {
        operating: 'addBack',
        value: 0
      },
    ]
  },
  {
    id: 154,
    start: 12,
    goal: 101,
    moves: 4,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'transform',
        oldValue: 21,
        newValue: 0
      },
      {
        operating: 'transform',
        oldValue: 12,
        newValue: 1
      },
      {
        operating: 'mirror',
        value: null
      }
    ]
  },
  {
    id: 155,
    start: 9,
    goal: 3001,
    moves: 7,
    operators: [
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'transform',
        oldValue: 31,
        newValue: '00'
      },
      {
        operating: 'transform',
        oldValue: 39,
        newValue: 93
      },
      {
        operating: 'div',
        value: 3
      }
    ]
  },
  {
    id: 157,
    start: 1,
    goal: 2,
    moves: 3,
    operators: [
      {
        operating: 'sub',
        value: 1
      },
      {
        operating: 'inv',
        value: 10
      }
    ]
  },
  {
    id: 158,
    start: 14,
    goal: 15,
    moves: 3,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'add',
        value: 5
      },
      {
        operating: 'mul',
        value: 5
      }
    ]
  },
  {
    id: 159,
    start: 21,
    goal: 12,
    moves: 3,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'sub',
        value: 7
      },
      {
        operating: 'mul',
        value: 5
      }
    ]
  },
  {
    id: 160,
    start: 67,
    goal: 13,
    moves: 4,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'reverse',
        value: null
      },
      {
        operating: 'add',
        value: 3
      }
    ]
  },
  {
    id: 161,
    start: 23,
    goal: 88,
    moves: 5,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'reverse',
        value: null
      },
      {
        operating: 'sub',
        value: 4
      },
      {
        operating: 'sub',
        value: 2
      }
    ]
  },
  {
    id: 162,
    start: 5,
    goal: 105,
    moves: 4,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'store',
        value: null
      },
      {
        operating: 'addBackStore',
        value: null
      },
      {
        operating: 'mul',
        value: 3
      },
      {
        operating: 'div',
        value: 9
      }
    ]
  },
  {
    id: 163,
    start: 24,
    goal: 23,
    moves: 4,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'reverse',
        value: null
      },
      {
        operating: 'mul',
        value: 3
      },
      {
        operating: 'add',
        value: 6
      },
    ]
  },
  {
    id: 164,
    start: 7,
    goal: 17,
    moves: 4,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'add',
        value: 3
      },
      {
        operating: 'mul',
        value: 3
      },
      {
        operating: 'mul',
        value: 4
      },
    ]
  },
  {
    id: 165,
    start: 35,
    goal: 21,
    moves: 5,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'transform',
        oldValue: 13,
        newValue: 10
      },
      {
        operating: 'mul',
        value: 9
      },
      {
        operating: 'div',
        value: 5
      },
    ]
  },
  {
    id: 166,
    start: 9,
    goal: 18,
    moves: 5,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'sum',
        value: null
      },
      {
        operating: 'mul',
        value: 3
      },
    ]
  },
  {
    id: 166,
    start: 9,
    goal: 18,
    moves: 5,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'sum',
        value: null
      },
      {
        operating: 'mul',
        value: 3
      },
    ]
  },
  {
    id: 167,
    start: 12,
    goal: 101,
    moves: 5,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'sum',
        value: null
      },
      {
        operating: 'add',
        value: 4
      },
    ]
  },
  {
    id: 168,
    start: 26,
    goal: 99,
    moves: 6,
    operators: [
      {
        operating: 'inv',
        value: 10
      },
      {
        operating: 'sum',
        value: null
      },
      {
        operating: 'addBack',
        value: 2
      },
    ]
  },
  
]

module.exports = quiz