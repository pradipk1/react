import {useState,useRef} from 'react'
import Styles from './Timer.module.css';

function Timer() {

    const [timer,setTimer] = useState(0);
    // let interval;
    const ref1 = useRef();
    console.log(ref1);

    const startTimer = () =>{
        ref1.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1);
        },1000);
    }

    const stopTimer = () =>{
      clearInterval(ref1.current);
    }
  return (
    <div className={Styles.timerContainer}>
      <h2>Timer is {timer}</h2>
      <button onClick={startTimer}>Start</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer
