import { useRef, useState } from "react"

function Test(){

    const intervalRef = useRef(null)
    const [timer, setTimer] = useState(60)
    const [isRunning, setIsRunning] = useState(false)  
    
    function updateTime(){
        let min = Math.floor(timer / 60)
        let sec = timer % 60
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    }

    function startTmer(){
        if (!isRunning){
            setIsRunning(true)
            intervalRef.current = setInterval(()=>{
                setIsRunning(true)
                setTimer((time)=>{
                    if (time <= 0){
                        setIsRunning(false)
                        clearInterval(intervalRef.current)
                        return 0
                    } 
                    if (time <= 10) {
                        const displayElement = document.getElementById("display");
                        if (displayElement) {
                            displayElement.style.color = "red";
                        }
                    }
                    return time - 1
                })
            }, 1000)
        }
    }

    function pauseTimer(){
        if (isRunning){
            setIsRunning(false)
            clearInterval(intervalRef.current)
        }
    }

    function resetTimer(){
        clearInterval(intervalRef.current)
        setIsRunning(false)
        setTimer(60)
    }
    return (
        <>
        <div>
            <h2>Testimony</h2>
            <p id="display">{updateTime(timer)}</p>
            <button onClick={startTmer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
        </>
    )
}

export default Test