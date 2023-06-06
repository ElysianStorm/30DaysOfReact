import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Mainframe from './components/Mainframe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <div className='main-content'> 
        <SideNav className='sidenav'/>
        <Mainframe className='mainframe'/>
      </div>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
