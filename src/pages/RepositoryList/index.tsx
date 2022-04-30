import { useState, useEffect } from 'react';
import { Data, RepositoryItem } from '../../components/RepositoryItem';
import styles from './styles.module.scss';

//https://api.github.com/users/emffor/repos

interface Repository extends Data {
  id: string;
}
export function RepositoryList(){
  //const [] = useState([]); //sempre começar com aquilo que vai armazenar.
  const [ repositories, setRepositories ] = useState<Repository[]>([]);

  /* 
    2 PARÂMETROS: 
  {} => qual função eu quero executar, [] => quando eu quero executar.
  [repositories] => vai mudar sempre que repositories mudar.
  [] => vazio, vai executar uma vez só quando o componente exibido em tela. 
  */
 
  useEffect(() => {
    fetch('https://api.github.com/users/emffor/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));      
  }, []);

  console.log(repositories);
  
  return (
    <section className={styles.container}>
        <h1>Lista de Repositórios</h1>
        <ul>
          {
            repositories.map((repository) => {
              return <RepositoryItem 
                key={repository.id}
                data={repository}     
              />       
            })}
        </ul>
    </section>
  );
}