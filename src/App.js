import './App.css';
import React, { useEffect, useState } from "react";
import flappylogo from './flappy.png';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload()
    
  };


const [xoffset, setXoffset] = useState(200);
const [yoffset, setYoffset] = useState(10);
const [delta, setDelta] = useState(1);
const [jumping, setJumping] = useState(false);
const [jumplength, setJumplength] = useState(0);
const [gameover, setGameover] = useState(false);

const [piller1xoffset, setpiller1xoffset] = useState(1500)
const [piller2xoffset, setpiller2xoffset] = useState(2500)
const [piller3xoffset, setpiller3xoffset] = useState(1000)
const [piller4xoffset, setpiller4xoffset] = useState(2000)

const background={
  backgroundImage: "url('https://wallpaperaccess.com/full/4622688.png')",
  height:'100vh',
  marginTop:'0px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

useEffect(()=>{
  if(gameover===false){
    if(jumping===false){
      setTimeout(()=>{
        if(yoffset<=750 && yoffset>=-50){
          moveBirdToDown();
        }
        else{
          setGameover(true);
          handleClickOpen();
        }
       }, 0.2)
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

    if(xoffset===(piller1xoffset-60)){
      if(yoffset>=380){
        setGameover(true);
      }
    }

    if(xoffset===(piller2xoffset-60)){
      if(yoffset>=480){
        setGameover(true);
      }
    }

    if(xoffset===(piller3xoffset-60)){
      if(yoffset<=170){
        setGameover(true);
      }
    }
    
    if(xoffset===(piller4xoffset-60)){
      if(yoffset<=270){
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
	<div style={background}>
		<h2
		style={{
			position: "absolute",
			left: `${xoffset}px`,
			top: `${yoffset}px`,
		}}
		>
		<img src={flappylogo} height="100" width="100"/>
		</h2>

    <h2
		style={{
			position: "absolute",
			left: `0px`,
			top: `87%`,
      width: '100%',
		}}
		>
		----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		</h2>
    <button style={{
			position: "absolute",
			left: `0px`,
			top: `92%`,
      width: `100%`,
      height: `80px`,
		}} onClick={(e)=>jump()}>Jump</button>

      <button style={{
        position: "absolute",
        left: `${piller1xoffset}px`,
        top: `48%`,
        width: `10px`,
        height: `400px`
      }}></button>

      <button style={{
        position: "absolute",
        left: `${piller2xoffset}px`,
        top: `59%`,
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

<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><p>{"Game Over"}</p></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          
          <Button onClick={handleClose}>New Game</Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>

	</div>
	);
}


export default App;

