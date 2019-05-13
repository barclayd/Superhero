import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/SuperheroInput/Input';

function App() {
  return (
      <div className="wrapper">
          <div className="header">
            <Header />
          </div>
          <div className="box sidebar">
              <Input />
          </div>
          <div className="box sidebar2">Sidebar 2</div>
      </div>
  );
}

export default App;
