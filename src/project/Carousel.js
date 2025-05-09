import React, { useEffect } from 'react'
import { useState } from 'react'

function Carousel() {
    const [image,setImage] = useState([ "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" ,"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"])
    const [count,setCount] =  useState(0)
  
    function handleIncrese(){
      setCount(count+1)
    }

    function handleDecrese(){
        setCount(count-1)
      }
      
    useEffect(() => {
        if(count === 3){
            setCount(0)
        }

        if(0>count){
            setCount(2)
        }
    }, [count])



  return (
    <div>
      <img src={image[count]} alt="" style={{height: '700px',width:'100%'}}/>
      <button onClick={handleDecrese}>back</button>
      <button onClick={handleIncrese} >next</button>
    </div>
  )
}

export default Carousel
