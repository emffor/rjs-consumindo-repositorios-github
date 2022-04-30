import { RepositoryItem } from '../../components/RepositoryItem';
import styles from './styles.module.scss';

const repository = {
    name: 'nome do repositório',
    description: 'Descrição do repositório',
    link: 'https://github.com/emffor',
}

export function RepositoryList(){
  return (
    <section className={styles.container}>
        <h1>Lista de Repositórios</h1>

        <ul className={styles.list}>

            <RepositoryItem data={repository}/>
            <RepositoryItem data={repository}/>
            <RepositoryItem data={repository}/>
            <RepositoryItem data={repository}/>
            
        </ul>
    </section>
  );
}