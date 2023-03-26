'use strict';

console.log('funguju!');

let time = 0

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    time = Number(document.querySelector(".time-input").value)
    let display = document.querySelector(".alarm__seconds")
    display.textContent = String(time).padStart(2, "0")
    let intervalID = setInterval(() => {
        time -= 1
        if (time === 0) {
            document.querySelector("audio").play()
            clearInterval(intervalID)
        }
        display.textContent = String(time).padStart(2, "0")

    }, 1000)
})