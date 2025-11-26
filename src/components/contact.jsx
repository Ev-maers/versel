import styles from './contact.module.css';

import albeanImg from '../assets/albean.jpg';
import deyvisonImg from '../assets/deyvison.webp';
import evellinImg from '../assets/evellin.jpg';
import joyceImg from '../assets/joyce.jpg';

export function Contato() {
  const organizadores = [
    {
      nome: 'Albean',
      imagem: albeanImg,
      contato: 'ascb@cesar.school',
    },
    {
      nome: 'Deyvison Muniz',
      imagem: deyvisonImg,
      contato: 'dmc2@cesar.school',
    },
    {
      nome: 'Evellin Rodrigues',
      imagem: evellinImg,
      contato: 'maers@cesar.school',
    },
    {
      nome: 'Joyce Cristine',
      imagem: joyceImg,
      contato: 'jcs3@cesar.school',
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Organizadores do Projeto</h2>
      <div className={styles.galeria}>
        {organizadores.map((org, index) => (
          <div className={styles.card} key={index}>
            <img className={styles.foto} src={org.imagem} alt={org.nome} />
            <p className={styles.nome}>{org.nome}</p>
            <p className={styles.contato}>{org.contato}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
