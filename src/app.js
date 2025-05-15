const screen = document.getElementById("screen")
const keys = document.querySelectorAll(".key")

console.log(keys)

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    let keyPress = e.target.innerText
    console.log(keyPress)
  })
})

const writeToScreen = (value) => {
  let currentValue = screen.innerText
}

