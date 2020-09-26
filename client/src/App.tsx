import React, { useEffect, useState}  from 'react';

import { ContextProvider } from "./store/store";

import { List } from './components/List';
import { Status } from './components/Status';
import { Title } from './components/Title';
import { Input } from './components/Input';
import { Container } from './appStyle';

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <ContextProvider>
      <Container>
        <Title />
        <Status setFilter={setFilter}/>
        <Input />
        <List filter={filter}/>
      </Container>
    </ContextProvider>
  );
}

export default App;
