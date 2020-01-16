import React from 'react';

import { Title, Form, InputContianer, InputGroup, Button } from './styles';

export default function SubscribeDev() {
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
            <input name="latitude" id="latitude"/>
          </InputContianer>
          <InputContianer>
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude"/>
          </InputContianer>
        </InputGroup>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}
