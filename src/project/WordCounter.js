import React, { useEffect, useState, useRef } from "react";

function WordCounter() {
    const [input, setInput] = useState("");
    const [character,setCharacter] = useState(0)
    const [word,setWord] = useState(0)
    const [clear,setClear] = useState(false);
    const textRef = useRef()

    useEffect(() => {
        setCharacter(input.length)
        if(input.trim() === ''){
          setWord(0);
        }else{
          setWord(input.trim().split(' ').length)
        }

        if(input !== ""){
          setClear(true)
        }
        else{
          setClear(false)
        }
    }, [input])

    console.log(input)

function handleClear(e){
  setInput("")
  textRef.current.value = "";
}

  return (
    <div>
      <h1>Word Counter</h1>
      <textarea
        name="message"
        id="message"
        placeholder="your message..."
        className="message"
        onChange={(e) => setInput(e.target.value)}
        ref={textRef}
      ></textarea>
      <div>
        { clear ? <button onClick={handleClear} className="clear">Clear</button> : <button className="clear" disabled>Clear</button>}
      </div>
      <div className="count">
        <span className="counter">Character: {character}</span>
        <span className="counter">Words: {word}</span>
      </div>
    </div>
  );
}

export default WordCounter;
