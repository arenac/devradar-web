import React, { useState, useEffect } from 'react';

import { Title, Form, InputContianer, InputGroup, Button } from './styles';

export default function SubscribeDev() {
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

  return (
    <>
      <Title>Subscribe</Title>
      <Form>
        <InputContianer>
          <label htmlFor="github_username">Github username</label>
          <input name="github_username" id="github_username"/>
        </InputContianer>
        
        <InputContianer>
          <label htmlFor="techs">Technologies</label>
          <input name="techs" id="techs"/>
        </InputContianer>
        
        <InputGroup>
          <InputContianer>
            <label htmlFor="latitude">Latitude</label>
            <input type="number" name="latitude" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
          </InputContianer>
          <InputContianer>
            <label htmlFor="longitude">Longitude</label>
            <input type="number" name="longitude" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}/>
          </InputContianer>
        </InputGroup>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}
