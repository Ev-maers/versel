import styles from './sac.module.css';
import { Mail } from 'lucide-react';  // Ícone de envelope
import { Link } from 'react-router-dom';

export function SAC({ assunto, onAssuntoChange, mensagem, onMensagemChange, onSubmit }) {
  return (
    <section className={styles.container}>

      <div className={styles.topButtons}>
              <Link to="/perfil" className={styles.usuarioLogado}>Olá, Usuário!</Link>
      </div>


      <div className={styles.iconArea}>
        <Mail size={48} className={styles.icon} />
        <h2 className={styles.titulo}>SAC</h2>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <select 
          value={assunto} 
          onChange={onAssuntoChange}
          className={styles.input}
        >
          <option value="">Qual o assunto?</option>
          <option value="duvida">Dúvida</option>
          <option value="elogio">Elogio</option>
          <option value="reclamacao">Reclamação</option>
        </select>

        <textarea 
          className={styles.textarea}
          placeholder="Envie uma mensagem"
          value={mensagem}
          onChange={onMensagemChange}
        />

        <button type="submit" className={styles.botao}>Enviar</button>
      </form>
    </section>
  );
}
