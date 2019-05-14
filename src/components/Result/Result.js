import React from 'react';
import { Header } from 'semantic-ui-react';
import UserInputContext from '../../context/userInput-context';

const male = [
  'The',
  'Sgt.',
  'El',
  'Mr.',
  'Doctor',
  'Professor',
  'Agent',
  'Boy',
  'Man',
  'Professor',
  'Captain',
  'Lord',
];

const female = [
  'Girl',
  'Woman',
  'Gal',
  'Queen',
  'Maid',
  'Princess',
  'Miss',
  'Doctor',
  'Professor',
  'Captain',
  'Agent',
  'The',
  'General',
  'Queen',
];

const adjective = [
  'Imperial',
  'Amazing',
  'Spectular',
  'Dino',
  'Massive',
  'Fantastic',
  'Wonder',
  'Techno',
  'Electro',
  'Hydro',
  'Giant',
  'Super',
  'Incredi',
  'Daring',
  'Mega',
  'Tiny',
  'Red',
  'Dark',
  'Orange',
  'Screaming',
  'Green',
  'Teal',
  'Blue',
  'Golden',
  'Fearless',
  'Great',
  'Iron',
  'Pyro',
  'Robo',
  'American',
  'Cyber',
  'Frozen',
];

const noun = [
  'Spider',
  'Laser',
  'Microbe',
  'Spectre',
  'Scan',
  'Badger',
  'Lighting',
  'Thunder',
  'Eagle',
  'Hurricane',
  'Storm',
  'Typhoon',
  'Fire',
  'Flame',
  'Flash',
  'Night',
  'Whirlwind',
  'Wind',
  'Dawn',
  'Light',
  'Dragon',
  'Wolf',
  'Vemon',
  'Cobra',
  'Viper',
  'Condor',
  'Stalker',
  'Panther',
  'Puma',
  'Shadow',
  'Freeze',
  'Night',
  'Hammer',
  'Mist',
  'Tulip',
  'Octopus',
  'Inferno',
  'Magma',
  'Patriot',
  'Stag',
  'Rhino',
  'Mole',
  'Sloth',
];

export default () => (
  <UserInputContext.Consumer>
    {(context) => {
      const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
      const randomNoun = noun[Math.floor(Math.random() * noun.length)];
      let randomGender;
      let output;
      if (context.gender) {
        if (context.gender.toLowerCase().trim() === 'female') {
          const randomNumber = Math.random() * female.length;
          randomGender = female[Math.floor(randomNumber)];
          if (female.indexOf(randomGender) <= 6) {
            output = `${randomGender} ${randomAdjective} ${randomNoun}`;
          } else {
            output = `${randomAdjective} ${randomNoun} ${randomGender} `;
          }
        } else {
          const randomNumber = Math.random() * male.length;
          randomGender = male[Math.floor(randomNumber)];
          if (randomNumber <= 6) {
            output = `${randomGender} ${randomAdjective} ${randomNoun}`;
          } else {
            output = `${randomAdjective} ${randomNoun} ${randomGender} `;
          }
        }
        return (
          <>
            <h4>
              <i>Your new identity is:</i>
            </h4>
            <Header
              size="huge"
              style={{ color: '#0892d0', fontWeight: 'bold' }}
            >
              {output}
            </Header>
            <h5>Gender: {context.gender}</h5>
            <h5>Colour: {context.colour}</h5>
            <h5>Activity: {context.activity}</h5>
            <h5>Animal: {context.animal}</h5>
          </>
        );
      }
      return (
        <h3>
          Please make your choices and press submit to reveal your new superhero
          identity!
        </h3>
      );
    }}
  </UserInputContext.Consumer>
);
