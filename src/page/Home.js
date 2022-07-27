import React from 'react';
import './home.scss';

function Home() {
  return (
    <>
      <div class="container">
        <div className="main d-flex border border-dark">
          <div className="person col-4  border-end border-dark ">
            <div class="left h-75">
              <div className="pic h-75 overflow-hidden  border-bottom border-dark">
        
                <img src='/GlitchCam_20210221_143155159_2.jpg' className='img-fluid' alt='me' />
              </div>
              <div className="self h-25  border-bottpm border-dark">
                <div className='border-bottom border-dark text-center p-1'><h4>FRONT END DEVELOPER</h4></div>
                <div className='border-bottom border-dark text-center p-1'><h4>UIUX DEIGNER</h4></div>
              </div>
            </div>
          </div>
          <div className="discrib col-8 ">
            <div className='border-bottom border-dark px-3 py-1'><h2>WHAT I DO</h2></div>
            <div className='border-bottom border-dark px-3 py-1'>
              <p>HTML CSS JAVASCRIP技術</p>
              <p>RWD切版</p>
              <p>API串接</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
