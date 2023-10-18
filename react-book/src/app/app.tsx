import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import List from '../components/list/List';
import Container from '../components/container/Container';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const elements = ['titi', 'tata'];
  return (
    <div>
      <Header title='hello' person='Jérémy' />
      <Container>
        <List elements={elements} />
      </Container>
      <Footer title='login'/>
    </div>
  );
}

export default App;
