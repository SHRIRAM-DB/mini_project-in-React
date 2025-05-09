import React, { useEffect, useState } from 'react'

function Joke_Api() {
    const [show,setShow] = useState("")

    useEffect(() => {
        const fetchjoke = async () => {
            const response = await fetch("https://api.chucknorris.io/jokes/random")
            const data = await response.json();
            setShow(data.value)
        }
        fetchjoke();
    }, [])
    console.log(show)
  return (
    <div>
        <h1>Random Jokes</h1>
      {show}
    </div>
  )
}

export default Joke_Api
