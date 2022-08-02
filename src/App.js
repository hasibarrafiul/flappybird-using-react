import './App.css';
import React, { useEffect, useState } from "react";

function App() {

const [xoffset, setXoffset] = useState(100);
const [yoffset, setYoffset] = useState(10);
const [delta, setDelta] = useState(1);
const [jumping, setJumping] = useState(false);
const [jumplength, setJumplength] = useState(0);

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
},[yoffset, jumping])



  const moveBirdToDown = () => {
    setYoffset(yoffset+delta);
  }
  const moveBirdToRight = () => {
    setXoffset(xoffset+delta);
  }
  const moveBirdToLeft = () => {
    setXoffset(xoffset-delta);
  }
  const jump = () => {
    setJumping(true);
    setYoffset(yoffset-delta);
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
	</div>
	);
}


export default App;

