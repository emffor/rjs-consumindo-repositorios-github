import styles from './styles.module.scss';

export function Transactions(){
  return (
    <main className={styles.container}>
        <table>

            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                   <td>Desenvolvimento de website</td>
                   <td className={styles.deposit}>R$12.000,00</td>
                   <td>Desenvolvimento</td>
                   <td>05/01/2021</td>
                </tr>

                <tr>
                   <td>Aluguel</td>
                   <td className={styles.withdraw}>- R$2.000,00</td>
                   <td>Apto</td>
                   <td>16/01/2021</td>
                </tr>

            </tbody>
        </table>
    </main>
  );
}