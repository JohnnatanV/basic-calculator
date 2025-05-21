const screen = document.getElementById("screen")
const equal = document.getElementById("equal")
const keys = document.querySelectorAll(".key")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")

let screenText = [],
  numBuffer = [],
  firstNum = null,
  secondNum = null,
  operatorSym = "",
  justEvaluated = false,
  result = 0

const getBufferValue = () => parseFloat(numBuffer.join(""))

const writeToScreen = (arr) => {
  screen.innerText = arr.join("")
}

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => b !== 0 ? a / b : "Error",
}

const calculate = (newValue, operator) => {
  if (firstNum === null) {
    firstNum = newValue
    operatorSym = operator
  } else {
    secondNum = newValue
    result = operations[operatorSym](firstNum, secondNum)
    if (result === "Error") {
      firstNum = null
      operatorSym = ""
      return
    }

    firstNum = result
    secondNum = null
    operatorSym = operator !== "=" ? operator : ""
  }
}

const erase = () => {
  screenText = []
  numBuffer = []
  firstNum = null
  secondNum = null
  operatorSym = ""
  result = 0
  screen.innerText = ""
  writeToScreen(screenText)
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const value = number.innerText

    if (justEvaluated) {
      erase()
      justEvaluated = false
    }

    if (numBuffer.length === 1 && numBuffer[0] === "0") {
      if (value === "0") return
      screenText.pop()
      numBuffer[0] = value
    } else {
      numBuffer.push(value)
    }

    screenText.push(value)
    writeToScreen(screenText)
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (numBuffer.length === 0 && firstNum === null) return

    const op = operator.innerText

    if (numBuffer.length === 0 && operatorSym) {
      screenText.pop()
      screenText.push(` ${op} `)
      writeToScreen((screenText))
      return
    }

    const value = getBufferValue() || firstNum
    calculate(value, op)
    numBuffer = []
    screenText.push(` ${op} `)
    writeToScreen(screenText)
    justEvaluated = false
  })
})

equal.addEventListener("click", () => {
  if (numBuffer.length === 0) return

  const value = getBufferValue()
  calculate(value, "=")

  const finalResult = result

  erase()
  screenText.push(finalResult)
  firstNum = finalResult
  writeToScreen(screenText)
  justEvaluated = true
})

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.innerText === "C") erase()
  })
})
