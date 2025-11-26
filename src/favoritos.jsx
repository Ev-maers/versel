import styles from './favoritos.module.css';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import vestidoImg from './assets/vestido.jpg';
import croppedBucketImg from './assets/cropped-bucket.jpg';
import saidaPraiaImg from './assets/saida-praia.jpg';
import croppedImg from './assets/cropped.jpg';
import biquiniImg from './assets/biquini.jpg';

export function Favoritos() {
  const [favoritos, setFavoritos] = useState([
    { id: 1, nome: 'Vestido Chita Florido', preco: 150, imagem: vestidoImg },
    { id: 2, nome: 'Cropped Bucket', preco: 90, imagem: croppedBucketImg },
    { id: 3, nome: 'Saída de Praia', preco: 110, imagem: saidaPraiaImg },
,
  ]);

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter(item => item.id !== id));
  };

  return (
    <section className={styles.container}>

      <div className={styles.topButtons}>
        <Link to="/perfil" className={styles.usuarioLogado}>Olá, Usuário!</Link>
      </div>

     <h2 className={styles.titulo}>Seus Favoritos</h2>

      {favoritos.length === 0 ? (
        <p className={styles.vazio}>Nenhum item nos favoritos.</p>
      ) : (
        <div className={styles.grid}>
          {favoritos.map(item => (
            <div key={item.id} className={styles.card}>
              <img src={item.imagem} alt={item.nome} className={styles.imagem} />
              <div className={styles.info}>
                <h3 className={styles.nome}>{item.nome}</h3>
                <p className={styles.preco}>R$ {item.preco},00</p>
                <button
                  className={styles.remover}
                  onClick={() => removerFavorito(item.id)}
                  title="Remover dos favoritos"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
