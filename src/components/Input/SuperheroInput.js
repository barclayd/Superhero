import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

class SuperheroInput extends Component {
  state = {
    gender: '',
    colour: '',
    activity: '',
    animal: '',
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClick = event => {
    const { name, innerHTML } = event.target;
    this.setState({
      [name]: innerHTML,
    });
  };

  render() {
    const { gender, colour, activity, animal } = this.state;
    const { onChange, onClick } = this;

    console.log(gender, colour, activity, animal);

    return (
      <>
        <Form>
          <Form.Field>
            <label style={{ color: '#fff', textAlign: 'center' }}>
              Select a Gender
            </label>
            <Button.Group onClick={onClick}>
              <Button name="gender" color="blue">
                Male
              </Button>
              <Button.Or />
              <Button name="gender" color="pink">
                Female
              </Button>
            </Button.Group>
          </Form.Field>
          <Form.Field>
            <label style={{ color: '#fff', textAlign: 'center' }}>
              Favourite Color
            </label>
            <Button.Group onClick={onClick}>
              <Button name="colour" color="red">
                Red
              </Button>
              <Button name="colour" color="orange">
                Orange
              </Button>
              <Button name="colour" color="yellow">
                Yellow
              </Button>
              <Button name="colour" color="green">
                Green
              </Button>
            </Button.Group>
          </Form.Field>
          <Form.Field>
            <label style={{ color: '#fff', textAlign: 'center' }}>
              Select your favourite activity
            </label>
            <Input
              name="activity"
              list="activities"
              placeholder="Choose an activity..."
              value={activity}
              onChange={onChange}
            />
            <datalist id="activities">
              <option value="Skiing" />
              <option value="Football" />
              <option value="Reading" />
              <option value="Cycling" />
            </datalist>
          </Form.Field>
          <Form.Field>
            <label style={{ color: '#fff', textAlign: 'center' }}>
              Select your favourite animal
            </label>

            <Input
              name="animal"
              list="animals"
              placeholder="Choose an animal..."
              value={animal}
              onChange={onChange}
            />
            <datalist id="animals">
              <option value="Pig" />
              <option value="Horse" />
              <option value="Dog" />
              <option value="Cat" />
            </datalist>
          </Form.Field>
          <Form.Button float="right">Submit</Form.Button>
        </Form>
      </>
    );
  }
}

export default SuperheroInput;
