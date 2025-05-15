const screen = document.getElementById("screen")
const keys = document.querySelectorAll(".key")
const operators = document.querySelectorAll(".operator")

let screenText = []

const writeToScreen = (arr) => {
  screen.innerText = arr.join("")
  console.log(screen.innerText)
}

const addition = (a, b) => a + b
const subtraction = (a, b) => a - b
const multiplication = (a, b) => a * b
const division = (a, b) => a / b
const erase = () => screen.innerText = ""


keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault()
    let keyPress = e.target.innerText
    screenText.push(keyPress)
    writeToScreen(screenText)
  })
})


operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    e.preventDefault()
    let keyOperator = e.target.innerText
  })
})
