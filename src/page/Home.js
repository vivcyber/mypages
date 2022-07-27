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
            <div class="position">
              <div className='border-bottom border-dark bg-dark text-white px-3 py-1'><h6>Front End</h6></div>
              <div className='border-bottom border-dark px-3 py-2'>
                <p>HTML規劃 CSS樣式製作 JavaScript功能撰寫</p>
                <p>RWD切版 動態效果製作</p>
                <p>API串接 React JS前端框架使用</p>
              </div>
              <div className='border-bottom border-dark p-3'>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>HTML</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>CSS</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>JavaScript</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>ReactJs</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>Node.JS</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>PHP</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>Boostrap</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>JQuary</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>MUI</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>MYSQL</h6>
              
              </div>
            </div>

            <div class="position">
              <div className='border-bottom border-dark bg-dark text-white px-3 py-1'><h6>UIUX Designer</h6></div>
              <div className='border-bottom border-dark px-3 py-2'>
                <p>使用者流程規劃Wareframe</p>
                <p>WEB APP GUI介面設計</p>
                <p>圖像設計 動畫效果製作</p>
              </div>
              <div className='border-bottom border-dark p-3'>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>SKETCH</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>Figma</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>Photoshop</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>Illustrator</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>Axur</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>After Effect</h6>
              <h6 className='badge py-2 px-3 rounded-5 border border-dark text-dark m-1'>Lottie</h6>
             
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
