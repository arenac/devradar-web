import React from 'react';

import SubscribeDev from '../../components/SubscribeDev';
import DevList from '../../components/DevList';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <aside>
        <SubscribeDev />
      </aside>
      <main>
        <DevList />
      </main>
    </Container>
  );
}
