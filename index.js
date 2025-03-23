const displayEl = document.querySelector('.display')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const reset = document.getElementById('resetBtn')


let timeLeft = 16;
let isRunning = false;
let interval;

function updateDisplay(){
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    displayEl.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}
 
function startTimer(){
    if (!isRunning){
        isRunning = true;
         interval = setInterval(()=>{
                updateDisplay()
                timeLeft--;

            if (timeLeft <= 15){
                // displayEl.style.color = 'red'
                displayEl.classList = 'red'
            }

            if(timeLeft <= 0){
                clearInterval(interval)
                isRunning = false
                displayEl.textContent = 'Time Up'
            }


        }, 1000)
    }
}

function pauseTimer() {
    if (isRunning) {
    clearInterval(interval)
    isRunning = false;
}}


function resetTimer() {
    clearInterval(interval)
    timeLeft = 2400;
    isRunning = false
    displayEl.classList.remove('red')
    displayEl.classList='display'
    updateDisplay()
}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)

updateDisplay()