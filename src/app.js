const screen = document.getElementById("screen")
const keys = document.querySelectorAll(".key")
const operators = document.querySelectorAll(".operator")

let screenText = []

const writeToScreen = (arr) => {
  screen.innerText = arr.join("")
}

const addition = (a, b) => a + b
const subtraction = (a, b) => a - b
const multiplication = (a, b) => a * b
const division = (a, b) => a / b
const erase = () => {
  screenText = []
  writeToScreen(screenText)
}


keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault()
    let keyPress = e.target.innerText
    screenText.push(keyPress)

    if (keyPress === "=") {
      const secondOperand = parseFloat(screenText.join(""))

      let result = 0

      switch (currentOperator) {
        case "+":
          result = addition(firstOperand, secondOperand)
          break
        case "-":
          result = subtraction(firstOperand, secondOperand)
          break
        case "*":
          result = multiplication(firstOperand, secondOperand)
          break
        case "/":
          result = division(firstOperand, secondOperand)
          break
        default:
          result = "Error"
      }
      screenText = [result]
      writeToScreen(screenText)
    }

    if (keyPress === "C") {
      erase()
      currentOperator = null
      firstOperand = null
    }
    writeToScreen(screenText)
  })
})

let currentOperator = null
let firstOperand = null

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    e.preventDefault()
    currentOperator = e.target.innerText
    firstOperand = parseFloat(screenText.join(""))
    screenText = []
  })
})
