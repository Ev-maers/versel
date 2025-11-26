import styles from './about.module.css';
import { Link } from 'react-router-dom';


export function About() {
  return (
    <section className={styles.aboutContainer}>

      <h2 className={styles.aboutTitulo}>Sobre o Projeto</h2>
      <p className={styles.aboutTexto}>
        O projeto <strong>Origens</strong> nasceu com o propósito de valorizar o artesanato brasileiro e conectar artesãos locais a consumidores conscientes. A plataforma oferece uma vitrine digital acessível, onde produtos feitos à mão ganham visibilidade e respeito.
      </p>
      <p className={styles.aboutTexto}>
        Nossa missão é preservar a cultura regional, impulsionar a economia criativa e promover o comércio justo, aproximando produtores e compradores de forma ética e transparente.
      </p>
      <p className={styles.aboutTexto}>
        Com uma navegação intuitiva e recursos para personalização de gostos e filtragem por regiões, o projeto visa proporcionar uma experiência envolvente e significativa para todos os usuários.
      </p>
    </section>
  );
}
