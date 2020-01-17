import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Title, Form, InputContianer, InputGroup, Button } from './styles';

export default function SubscribeDev() {
  const [github_username, setGithubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {

      }, 
      {
        timeout: 30000,
      }
    );

  },[]);

  async function handleAddDev(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUserName('');
    setTechs('');
  }

  return (
    <>
      <Title>Subscribe</Title>
      <Form onSubmit={handleAddDev}>
        <InputContianer>
          <label htmlFor="github_username">Github username</label>
          <input 
            name="github_username" 
            id="github_username"
            value={github_username}
            onChange={(e) => setGithubUserName(e.target.value)}
          />
        </InputContianer>
        
        <InputContianer>
          <label htmlFor="techs">Technologies</label>
          <input 
            name="techs" 
            id="techs"
            value={techs}
            onChange={(e) => setTechs(e.target.value)}
          />
        </InputContianer>
        
        <InputGroup>
          <InputContianer>
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              value={latitude} 
              onChange={(e) => setLatitude(e.target.value)}
            />
          </InputContianer>
          <InputContianer>
            <label htmlFor="longitude">Longitude</label>
            <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              value={longitude} 
              onChange={(e) => setLongitude(e.target.value)}
            />
          </InputContianer>
        </InputGroup>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}
