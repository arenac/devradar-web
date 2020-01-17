import React, { useState, useEffect} from 'react';

import api from '../../services/api';

import { List, Dev, Header, Info } from './styles';

export default function DevList() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  return (
    <>
      <List>
        {devs.map(dev => (
          <Dev key={dev._id}>
            <Header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <Info>
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
                <p>{dev.bio}</p>
                <a href={`https://github.com/${dev.github_username}`}>Github</a>
              </Info>
            </Header>
          </Dev>
        ))}
      </List>
    </>
  );
}
