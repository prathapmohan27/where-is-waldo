import { useState } from 'react';
import React from 'react';
import { Div } from '../start/StartStyle';
import { Main, ListContainer, Form, Greeting } from './LeaderBoarStyle';

interface propsInterface {
  show: boolean;
  sec: number;
  mins: number;
}

const LeaderBoar = ({ show, sec, mins }: propsInterface) => {
  const [name, setName] = useState<String>('');
  const [hide, setHide] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const submit = (e: any): void => {
    e.preventDefault();
    console.log(name);
    setHide(true);
  };

  return (
    <Div show={show}>
      <Main>
        <h1>LeaderBoard</h1>
        <h1>
          {String(mins).padStart(2, '0')}:{String(sec).padStart(2, '0')}
        </h1>
        <Form onSubmit={submit} hide={hide}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
          />
          <div>
            <button>SAVE</button>
          </div>
        </Form>
        <Greeting hide={hide}>
          <i>Thank You!</i>
        </Greeting>
        <h1>HIGH SCORES</h1>
        <ListContainer>
          <li>
            <span>1.</span>
            <span>sfdsrf</span>
            <span>11:33</span>
          </li>
          <li>
            <span>1.</span>
            <span>sfdsrf</span>
            <span>11:33</span>
          </li>
          <li>
            <span>1.</span>
            <span>sfdsrf</span>
            <span>11:33</span>
          </li>
          <li>
            <span>1.</span>
            <span>sfdsrf</span>
            <span>11:33</span>
          </li>
          <li>
            <span>1.</span>
            <span>sfdsrf</span>
            <span>11:33</span>
          </li>
          <li>
            <span>1.</span>
            <span>sfdsrf</span>
            <span>11:33</span>
          </li>
        </ListContainer>
      </Main>
    </Div>
  );
};

export default LeaderBoar;
