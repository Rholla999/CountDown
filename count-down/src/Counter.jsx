import { useRef, useState } from "react"

function Counter(){
  const intervalRef = useRef(null)
  const [timer, setTimer] = useState(240)
  const [isRunning, setIsRunning] = useState(false)
  const [input] = useState()

  function updateTimer(timer){
    let min = Math.floor(timer / 60)
    let sec = timer % 60
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }


  function startTimer(){
    if (!isRunning){
      setIsRunning(true)
       intervalRef.current = setInterval(()=>{
        setIsRunning(true)
        setTimer((time) => {
          if (time <= 0) {
            setIsRunning(false)
            clearInterval(intervalRef.current)
            return 0;
          } 
          if (time <= 10) {
            let dangerDisplay = document.querySelector('.display')
            if (dangerDisplay){
              dangerDisplay.classList.add('red')
            }
          }
          return time - 1
        })
      }, 1000)
    }
  }

  function pauseTimer() {
    if (isRunning){
    setIsRunning(false)
    clearInterval(intervalRef.current)
  }
}

function resetTimer(){
  clearInterval(intervalRef.current)
  setIsRunning(false)
  setTimer(240)
  let dangerDisplay = document.querySelector('.display')
            if (dangerDisplay){
              dangerDisplay.classList.remove('red')
            }
}

function handleInputChange(e) {
  const value = e.target.value;
  setTimer(value); 
}

// function setCustomTimer() {
//   const minutes = parseInt(input, 10);
//   if (!isNaN(minutes) && minutes >= 0) {
//     setTimer(minutes * 60); 
//   }
// }

  return (
    <>
    <div className="container">
      <div className="timer-con">
        <h2>Count-Down</h2>
        <p className="display">{updateTimer(timer)}</p>
        <input 
         type="number"
         value={input}
         onChange={handleInputChange}
         placeholder="Enter Seconds"
        />
        <div>
        {/* <button  onClick={setCustomTimer} className="setBtn">
            Set Timer
          </button> */}
        <button onClick={startTimer}  disabled={isRunning} className="startBtn">Start</button>
        <button  onClick={pauseTimer} disabled={!isRunning} className="pauseBtn">Pause</button>
        <button onClick={resetTimer} className="resetBtn">Reset</button>
      </div>
      </div>
    </div>
    </>
  )
}


export default Counter