import { useState } from "react"

function Counter(){
  let interval = null
  const [timer, setTimer] = useState(240)
  const [isRunning, setIsRunning] = useState(false)

  function updateTimer(timer){
    let min = Math.floor(timer / 60)
    let sec = timer % 60
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }
  

  function startTimer(){
    if (!isRunning){
      setIsRunning(true)
       interval = setInterval(()=>{
        setIsRunning(true)
        setTimer((time) => {
          if (time <= 0) {
            setIsRunning(false)
            clearInterval(interval)
            return 0;
          }
          return time - 1
        })
      }, 1000)
    }
  }



  function pauseBtn() {
    if (isRunning){
    setIsRunning(false)
    clearInterval(interval)
  }
}
  


  
  return (
    <>
    <div className="container">
      <div className="timer-con">
        <h2>Count-Down</h2>
        <p className="display">{updateTimer(timer)}</p>
        <button onClick={startTimer} className="startBtn">Start</button>
        <button  onClick={pauseBtn} className="pauseBtn">Pause</button>
        <button className="resetBtn">Reset</button>
      </div>
    </div>
    </>
  )
}


export default Counter