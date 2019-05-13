import React, { Component } from 'react';
import './App.css';
import UserInputContext from './context/userInput-context';
import Header from './components/Header/Header';
import SuperheroInput from './components/Input/SuperheroInput';
import SuperheroResult from './components/Result/Result';

class App extends Component {
  state = {
    gender: 'Male',
    colour: '',
    activity: '',
    animal: '',
  };

  updateUserChoice = choice => console.log('updateChoice', choice);

  render() {
    const { gender, colour, activity, animal } = this.state;

    return (
      <UserInputContext.Provider
        value={{
          gender,
          colour,
          activity,
          animal,
          updateUserChoice: this.updateUserChoice,
        }}
      >
        <div className="wrapper">
          <div className="header">
            <Header />
          </div>
          <div className="box sidebar">
            <SuperheroInput />
          </div>
          <div className="box sidebar2">
            <SuperheroResult />
          </div>
        </div>
      </UserInputContext.Provider>
    );
  }
}

export default App;
