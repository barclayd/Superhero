import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

export default () => (
    <>
    <Form>
    <Form.Field>
        <label style={{color: '#fff', textAlign: 'center'}}>Select a Gender</label>
        <Button.Group>
            <Button color='blue'>Male</Button>
            <Button.Or />
            <Button color='pink'>Female</Button>
        </Button.Group>
    </Form.Field>
    <Form.Field>
        <label style={{color: '#fff', textAlign: 'center'}}>Favourite Color</label>
        <Button.Group>
            <Button color='red'>Red</Button>
            <Button color='orange'>Orange</Button>
            <Button color='yellow'>Yellow</Button>
            <Button color='green'>Green</Button>
        </Button.Group>
        <Button.Group>
            <Button color='blue'>Blue</Button>
            <Button color='violet'>Violet</Button>
            <Button color='brown'>Brown</Button>
            <Button color='white'>White</Button>
        </Button.Group>
    </Form.Field>
        <Form.Field>
            <label style={{color: '#fff', textAlign: 'center'}}>Select your favourite activity</label>
            <Input list='activities' placeholder='Choose an activity...' />
            <datalist id='activities'>
                <option value='Skiing' />
                <option value='Football' />
                <option value='Reading' />
                <option value='Cycling' />
            </datalist>
        </Form.Field>
        <Form.Field>
            <label style={{color: '#fff', textAlign: 'center'}}>Select your favourite animal</label>
            <Input list='animals' placeholder='Choose an animal...' />
            <datalist id='animals'>
                <option value='Pig' />
                <option value='Horse' />
                <option value='Dog' />
                <option value='Cat' />
            </datalist>
        </Form.Field>
        <Form.Button float='right'>Submit</Form.Button>
    </Form>
    </>
);
