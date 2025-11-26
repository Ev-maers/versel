import React, { useState } from 'react';
import styles from './Cadastro.module.css';

export function Cadastro() {
  const [mostrarComprador, setMostrarComprador] = useState(false);
  const [mostrarArtesao, setMostrarArtesao] = useState(false);

  const toggleComprador = () => {
    setMostrarComprador(!mostrarComprador);
    setMostrarArtesao(false);
  };

  const toggleArtesao = () => {
    setMostrarArtesao(!mostrarArtesao);
    setMostrarComprador(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode coletar os dados dos inputs via estado ou refs
    alert("Cadastro enviado com sucesso!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.plus}>+</span> Cadastre-se
      </h2>

      <div className={styles.sections}>
        {/* Seção Comprador */}
        <div className={`${styles.card} ${mostrarComprador ? styles.ativo : ''}`}>
          <button className={styles.toggleButton} onClick={toggleComprador}>
            <span role="img" aria-label="user">👤</span> Comprador
          </button>

          {mostrarComprador && (
            <form onSubmit={handleSubmit} className={styles.form}>
              <p>Informações pessoais</p>
              <input placeholder="Nome completo" required />
              <input placeholder="CPF (000.000.000-00)" required />
              <input placeholder="E-mail" type="email" required />
              <p>Endereço</p>
              <input placeholder="País/Estado (Ex.: Brasil-PE)" required />
              <input placeholder="CEP" required />
              <p>Criar senha</p>
              <input placeholder="No mínimo 8 caracteres" type="password" required />
              <button type="submit" className={styles.submitButton}>Finalizar cadastro</button>
            </form>
          )}
        </div>

        {/* Seção Artesão */}
        <div className={`${styles.card} ${mostrarArtesao ? styles.ativo : ''}`}>
          <button className={styles.toggleButton} onClick={toggleArtesao}>
            <span role="img" aria-label="user">👤</span> Artesão
          </button>

          {mostrarArtesao && (
            <form onSubmit={handleSubmit} className={styles.form}>
              <p>Informações pessoais</p>
              <input placeholder="Nome completo" required />
              <input placeholder="CPF (000.000.000-00)" required />
              <input placeholder="E-mail" type="email" required />
              <p>Endereço</p>
              <input placeholder="País/Estado (Ex.: Brasil-PE)" required />
              <input placeholder="CEP" required />
              <p>Criar senha</p>
              <input placeholder="No mínimo 8 caracteres" type="password" required />
              <button type="submit" className={styles.submitButton}>Finalizar cadastro</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
