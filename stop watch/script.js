let timer;
let seconds = 0
let minutes = 0
let hours = 0

const updateDisplay = () => {
    document.getElementById("display").innerHTML = `${hours.toString().padStart(2, "0")} :
    ${minutes.toString().padStart(2, "0")} :
    ${seconds.toString().padStart(2, "0")}`
}

const startTimer = () => {
    timer = setInterval(() => {
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
        }
        if (minutes === 60) {
            minutes = 0
            hours++
        }
        updateDisplay()
    }, 1000)
}


const stopTimer = () => {
    clearInterval(timer)
    updateDisplay()
}


const resetTimer = () => {
    clearInterval(timer)
    seconds = 0
    minutes = 0
    hours = 0
    updateDisplay()
}

document.getElementById("startButton").addEventListener('click', startTimer)
document.getElementById("stopButton").addEventListener('click', stopTimer)
document.getElementById("resetButton").addEventListener('click', resetTimer)