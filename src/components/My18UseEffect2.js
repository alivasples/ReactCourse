import React, {useEffect, useState} from "react";


function Clock(props){
    return <p> Time: {props.time} </p>
}


export default function My18UseEffect2() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [timeVisible, setTimeVisible] = useState(false)

    useEffect(() => {
        let tempo;
        // each second, update the current date
        if(timeVisible){
            tempo = setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            }, 1000)
        }
        else{
            clearInterval(tempo)
        }

        return () => {
            console.log("Fase de desmontaje.")
            clearInterval(tempo)
        }

    }, [timeVisible])

    return (
        <>
            <h2> Hook Use Effect Demo </h2>
            {timeVisible && <Clock time={time}/>}
            { timeVisible ?     
                <button onClick={() => {setTimeVisible(false)}}> Stop </button>
            :
                <button onClick={() => {setTimeVisible(true)}}> Start </button>
            }
        </>
    );
}