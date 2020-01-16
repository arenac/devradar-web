import React from 'react';

import SubscribeDev from '../SubscribeDev';
import DevList from '../DevList';

import { Container } from './styles';

export default function Page() {
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
