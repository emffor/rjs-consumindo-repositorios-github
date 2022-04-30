import { useState, useEffect } from 'react';
import { RepositoryItem } from '../../components/RepositoryItem';
import styles from './styles.module.scss';

//https://api.github.com/users/emffor/repos

const repository = {
    name: 'nome do repositório',
    description: 'Descrição do repositório',
    link: 'https://github.com/emffor',
}

export function RepositoryList(){
  //const [] = useState([]); //sempre começar com aquilo que vai armazenar.
  const [ repositories, setRepositories ] = useState([]);

  /* 
    2 PARÂMETROS: 
  {} => qual função eu quero executar, [] => quando eu quero executar.
  [repositories] => vai mudar sempre que repositories mudar.
  [] => vazio, vai executar uma vez só quando o componente exibido em tela. 
  */
 
  useEffect(() => {
    fetch('https://api.github.com/users/emffor/repos')
    .then(response => response.json())
    .then(data => console.log(data));
       
  }, [repositories]);


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