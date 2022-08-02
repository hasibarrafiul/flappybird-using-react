import './App.css';
import React, { useEffect, useState } from "react";

function App() {

const [xoffset, setXoffset] = useState(100);
const [yoffset, setYoffset] = useState(10);
const [delta, setDelta] = useState(1);
const [jumping, setJumping] = useState(false);
const [jumplength, setJumplength] = useState(0);

const [piller1xoffset, setpiller1xoffset] = useState(1500)

useEffect(()=>{
  if(jumping===false){
    setTimeout(()=>{
      if(yoffset<=600 && yoffset>=0){
        moveBirdToDown()
      }
      else{
        console.log("Game over")
      }
     }, 5)
  }
  else{
    setTimeout(()=>{
      if(jumplength<80){
        jump();
        setJumplength(jumplength+1);
      }
      else{
        setJumping(false);
        setJumplength(0);
      }
     }, 0.5)
  }

  setTimeout(()=>{
    movepiller1toleft()
  },1)
  
},[yoffset, jumping, piller1xoffset])



  const moveBirdToDown = () => {
    setYoffset(yoffset+delta);
  }

  const jump = () => {
    setJumping(true);
    setYoffset(yoffset-delta);
  }


  const movepiller1toleft = () => {
    if(piller1xoffset>0){
      setpiller1xoffset(piller1xoffset-0.5);
    }
    else{
      setpiller1xoffset(1500)
    }
    
  }

	return (
	<div>
		<h2
		style={{
			position: "absolute",
			left: `${xoffset}px`,
			top: `${yoffset}px`,
		}}
		>
		Bird
		</h2>

    <h2
		style={{
			position: "absolute",
			left: `0px`,
			top: `600px`,
		}}
		>
		--------------------------------------------------------------------------------------------------------------------------------------------------------------------
		</h2>
    <button style={{
			position: "absolute",
			left: `0px`,
			top: `700px`,
      width: `1500px`,
		}} onClick={(e)=>jump()}>Jump</button>

      <button style={{
        position: "absolute",
        left: `${piller1xoffset}px`,
        bottom: `120px`,
        width: `10px`,
        height: `400px`
      }}></button>

	</div>
	);
}


export default App;

