import { Transactions } from '../../components/Transactions';
import styles from './styles.module.scss';

export function Home(){
  return (
    <main className={styles.container}>
        <h1>PAGE HOME <span>MIRAGE JS</span></h1>

        <Transactions />
    </main>
  );
}