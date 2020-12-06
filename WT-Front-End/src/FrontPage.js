
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import "./FrontPage.css";
import Button from './Components/Button/Buttons.js'
import video from './Video/video-1.mp4'
function FrontPage() {
  
  return (
    <div class="grid-container">

      <div class='image1'></div>
      <div class='image2'> </div>
      <div class='image3'> </div> 
      
      <div className='container'>

        <video src={video} autoPlay loop muted></video>
        <p>ADVENTURE AWAITS</p>
        <p>What are you waiting for?</p>
        
        <div className='container-btns'>

          <Button className='btns' buttonStyle='button--outline' buttonSize='btn--large'>
              GET STARTED
          </Button>
          <Button className='btns' buttonSize='btn--large' buttonStyle='button--outline'>
            WATCH TRAILER<i className='far fa-play-circle' />
          </Button>

        </div>

      </div> 

    </div>
  
  
  );
}

export default FrontPage;
