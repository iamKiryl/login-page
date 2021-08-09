import React, { useState, useEffect } from 'react';


const Timer = () => {

    const [ time, setTime ] = useState(20);
    
    
    
    const formatTime = time => time < 10 ? `0${time}` : time;
    
    const timer = setTimeout(()=> setTime(time-1), 1000);

    // const updateMousePosition = () => {
    //     clearTimeout(timer);
    //     setTime(20);
    // }
    if(time == 0) {
        window.location.reload();
        clearTimeout(timer);
    }



    return (
        <>
            <div>
                {formatTime(time)}
            </div>
        </>
    )
}

export default Timer
