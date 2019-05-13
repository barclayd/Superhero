import React from 'react';
import UserInputContext from '../../context/userInput-context';

export default () => (
  <UserInputContext.Consumer>
    {context => (
      <>
        <h2>Your Superhero Name: Daniel</h2>
        <h4>Your Selection:</h4>

        <h5>Gender: {context.gender}</h5>
        <h5>Colour: {context.colour}</h5>
        <h5>Activity: {context.activity}</h5>
        <h5>Animal: {context.animal}</h5>
      </>
    )}
  </UserInputContext.Consumer>
);
