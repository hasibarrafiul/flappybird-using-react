import './App.css';
import React, { useEffect, useState } from "react";

function App() {

const [xoffset, setXoffset] = useState(100);
const [yoffset, setYoffset] = useState(10);
const [delta, setDelta] = useState(1);
const [jumping, setJumping] = useState(false);
const [jumplength, setJumplength] = useState(0);
const [gameover, setGameover] = useState(false);

const [piller1xoffset, setpiller1xoffset] = useState(1500)
const [piller2xoffset, setpiller2xoffset] = useState(2500)
const [piller3xoffset, setpiller3xoffset] = useState(1000)
const [piller4xoffset, setpiller4xoffset] = useState(2000)

useEffect(()=>{
  if(gameover===false){
    if(jumping===false){
      setTimeout(()=>{
        if(yoffset<=600 && yoffset>=0){
          moveBirdToDown()
        }
        else{
          setGameover(true);
          console.log("Game over")
        }
       }, 3)
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
    setTimeout(()=>{
      movepiller2toleft()
    },1)
    setTimeout(()=>{
      movepiller3toleft()
    },1)
    setTimeout(()=>{
      movepiller4toleft()
    },1)

    if(xoffset===(piller1xoffset-40)){
      if(yoffset>=160){
        setGameover(true);
      }
    }

    if(xoffset===(piller2xoffset-40)){
      if(yoffset>=260){
        setGameover(true);
      }
    }

    if(xoffset===(piller3xoffset-40)){
      if(yoffset<=190){
        setGameover(true);
      }
    }

    if(xoffset===(piller4xoffset-40)){
      if(yoffset<=290){
        setGameover(true);
      }
    }

    

  }
},[yoffset, jumping, piller1xoffset, piller2xoffset, piller3xoffset, piller4xoffset])



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
      setpiller1xoffset(2000)
    }
    
  }

  const movepiller2toleft = () => {
    if(piller2xoffset>0){
      setpiller2xoffset(piller2xoffset-0.5);
    }
    else{
      setpiller2xoffset(2000);
    }
    
  }

  const movepiller3toleft = () => {
    if(piller3xoffset>0){
      setpiller3xoffset(piller3xoffset-0.5);
    }
    else{
      setpiller3xoffset(2000);
    }
    
  }

  const movepiller4toleft = () => {
    if(piller4xoffset>0){
      setpiller4xoffset(piller4xoffset-0.5);
    }
    else{
      setpiller4xoffset(2000);
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
		------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

      <button style={{
        position: "absolute",
        left: `${piller2xoffset}px`,
        bottom: `120px`,
        width: `10px`,
        height: `300px`
      }}></button>

      <button style={{
        position: "absolute",
        left: `${piller3xoffset}px`,
        top: `0px`,
        width: `10px`,
        height: `200px`
      }}></button>

      <button style={{
        position: "absolute",
        left: `${piller4xoffset}px`,
        top: `0px`,
        width: `10px`,
        height: `300px`
      }}></button>

	</div>
	);
}


export default App;

