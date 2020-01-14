import React from 'react';
import logo from './logo.svg';
import './App.css';
import androidDownload from './images/cta-android.png';
import klRahul from './images/img-fan-1.png';
function App() {
  const state = {
    username : 'USERNAME1234',
    refPrice : '20',
    refCode : 'ABCD12'
  }
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>{state.username}</h1>
          <h2>invited you to play Mobile Premier League!</h2>
        </div>
        <div className="banner">
          <p>Get FREE Cash</p>
          <h1>Rs. {state.refPrice}</h1>
          <p>Use Referral Code</p>
          <h2>{state.refCode}</h2>
          <div className="footer">
            <div className="f-banner">Install the MPL App & Get 20 MPL Tokens Free!</div>
            <div>
              <img className="" src={androidDownload} />
            </div>
          </div>
        </div>
        <img className="kl-rahul" src={klRahul} />
      </div>
    </div>
  );
}

export default App;
