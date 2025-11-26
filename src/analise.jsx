import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './analise.module.css';

// Imagens dos produtos
import imagem1 from './assets/imagem1.png';
import imagem2 from './assets/imagem2.png';
import imagem3 from './assets/imagem3.png';
import imagem4 from './assets/imagem4.png';
import imagem5 from './assets/imagem5.png';

// Ícone de análise (SVG)
import iconeAnalise from './assets/analise.svg';

const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5];
const titulos = [
  'CHAPÉU LAMPIÃO',
  'JARRO ROSA DO SERTÃO',
  'CUSCUZEIRA BARRO',
  'DOCE PERNAMBUCANO',
  'BOLO DE ROLO'
];

export function Analise(props) {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className={styles.container}>

      <div className={styles.topButtons}>
                <Link to="/perfil" className={styles.usuarioLogado}>Olá, Usuário!</Link>
      </div>

      <div className={styles.tituloContainer}>
        <img src={iconeAnalise} alt="Ícone de Análise" className={styles.iconeAnalise} />
        <h2 className={styles.titulo}>Análise de Vendas</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.top5Container}>
          <h3 className={styles.subtitulo}>Seu TOP 5</h3>
          <ul className={styles.lista}>
            {titulos.map((item, index) => (
              <li
                key={index}
                className={`${styles.item} ${selecionado === index ? styles.selecionado : ''}`}
                onClick={() => setSelecionado(index)}
              >
                <span className={styles.numero}>#{index + 1}</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {selecionado !== null && (
          <div className={styles.imagemContainer}>
            <img src={imagens[selecionado]} alt={`Imagem ${selecionado + 1}`} />
          </div>
        )}
      </div>
    </div>
  );
}
