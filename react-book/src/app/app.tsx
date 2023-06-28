import Header from '../components/header/Header';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <div>
      <Header title='hello' person='Jérémy' />
    </div>
  );
}

export default App;
