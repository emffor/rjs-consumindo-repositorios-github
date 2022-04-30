import styles from './styles.module.scss';

interface Data {
  name: string;
  description: string;
  link: string;
}

interface Props {
  data: Data;
}



export function RepositoryItem({ data } : Props){
  return (
    <section className={styles.container}>

            <li>
              <strong>{data.name}</strong>
              <p>{data.description}</p>

              <a href={data.link}> 
                  Entrar
              </a>
            </li>

    </section>
  );
}