import styles from './styles.module.scss';
interface Data {
  id: string;
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
              <p>id: {data.id}</p>

              <a href={data.html_url}> 
                  Entrar
              </a>
            </li>

    </section>
  );
}