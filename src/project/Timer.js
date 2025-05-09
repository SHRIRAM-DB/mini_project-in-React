import React, { useEffect, useState } from "react";

function Timer() {
  const [sec, setSec] = useState(0);
  const [min,setMin] = useState(0);
  const [hrs,setHrs] = useState(0);
  // const [start,setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSec(sec + 1);
    }, "1000");
  }, [sec])

  if (sec === 60) {
    setSec(0);
    setMin(min+1);
  }

  if(min === 60){
    setMin(0);
    setHrs(hrs+1);
  }

  if(hrs === 24 && min === 59 && sec === 59){
    setHrs(0);
    setMin(0);
    setHrs(0);
  }

  return (
    <div>
      <h1>stop watch</h1>
      <div>
        {String(hrs).padStart(2, "0")}:{String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
      </div>
      <button>Start</button>
      <button>Pause</button>
      <button>Stop</button>
    </div>
  );
}

export default Timer;
