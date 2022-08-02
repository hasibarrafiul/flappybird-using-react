import './App.css';
import React, { useEffect, useState } from "react";

function App() {

const [xoffset, setXoffset] = useState(0);
const [yoffset, setYoffset] = useState(0);
const [delta, setDelta] = useState(0.1);

useEffect(()=>{
  if(yoffset<=700){
    moveBirdToDown()
  }
  else{
    console.log("Game over")
  }
},[yoffset])

console.log(yoffset)

  const moveBirdToDown = () => {
    setYoffset(yoffset+delta);
  }
  const moveBirdToRight = () => {
    setXoffset(xoffset+delta);
  }
  const moveBirdToLeft = () => {
    setXoffset(xoffset-delta);
  }
  const moveBirdToUp = () => {
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
			left: `${0}px`,
			top: `${700}px`,
		}}
		>
		--------------------------------------------------------------------------------------------------------------------------------------------------------------------
		</h2>
	</div>
	);
}


export default App;

