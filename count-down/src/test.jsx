import { useState } from "react"

function Counte(){
    const [timer, setTimer] = useState(240)
    const [isRunning, setIsRunning] = useState(false)
  
  function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  
  function startTimer(){
    if (!isRunning){
      setIsRunning(true)
      const interval = setInterval(()=>{
        setIsRunning(true)
        setTimer((time)=>{
          if (time <= 0){
            clearInterval(interval)
            setIsRunning(false)
            return 0;
          }
          // No need to call updateDisplay here as React will re-render
          return time - 1
        })
      }, 1000)
    }
  }
  
  // Removed updateDisplay call as React handles rendering
    return (
      <>
      <div className="container">
        <div className="timer-con">
          <h2>Count-Down</h2>
          <p className="display">{formatTime(timer)}</p>
          <button onClick={startTimer} className="startBtn">Start</button>
          <button className="pauseBtn">Pause</button>
          <button className="resetBtn">Reset</button>
        </div>
  
      </div>
      </>
    )
  }
  
  export default Counte