import { useRef, useState } from "react"

function Counter(){
  const intervalRef = useRef(null)
  const [timer, setTimer] = useState(10)
  const [isRunning, setIsRunning] = useState(false)

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

  return (
    <>
    <div className="container">
      <div className="timer-con">
        <h2>Count-Down</h2>
        <p className="display">{updateTimer(timer)}</p>
        <button onClick={startTimer} className="startBtn">Start</button>
        <button  onClick={pauseTimer} className="pauseBtn">Pause</button>
        <button onClick={resetTimer} className="resetBtn">Reset</button>
      </div>
    </div>
    </>
  )
}


export default Counter