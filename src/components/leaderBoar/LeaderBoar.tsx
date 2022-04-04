import { useEffect, useState } from 'react';
import React from 'react';
import { Div } from '../start/StartStyle';
import { Main, ListContainer, Form, Greeting } from './LeaderBoarStyle';
import { getPlayersFirestore, savePlayer } from '../backend/backend';
import List from './List';

interface propsInterface {
  show: boolean;
  sec: number;
  mins: number;
}

const LeaderBoar = ({ show, sec, mins }: propsInterface) => {
  const [name, setName] = useState<string>('');
  const [hide, setHide] = useState<boolean>(false);
  const [players, setPlayers] = useState<any>([]);

  useEffect(() => {
    getAllPlayer();
  }, []);

  const getAllPlayer = async () => {
    const data = await getPlayersFirestore();
    data.sort((a, b) => a.totalTime - b.totalTime);
    setPlayers([...data]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const submit = (e: any): void => {
    e.preventDefault();
    const totalTime = mins * 60 + sec;
    if (name) {
      savePlayer(name, mins, sec, totalTime);
      setHide(true);
    } else {
      alert('would you pls enter name');
      return;
    }
    getAllPlayer();
  };

  return (
    <Div show={show}>
      <Main>
        <h1>Leader Board</h1>
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
          {players.map((obj: any, i: number) => {
            return <List key={i} obj={obj} i={i} />;
          })}
        </ListContainer>
      </Main>
    </Div>
  );
};

export default LeaderBoar;
