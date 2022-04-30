import styles from './styles.module.scss';
export interface Data {
  name: string;
  description: string;
  html_url: string;
  
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
              

              <a href={data.html_url}> 
                  Entrar
              </a>
            </li>

    </section>
  );
}