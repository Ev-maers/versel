import styles from './avaliacoes.module.css';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Avaliacoes() {
  const avaliacoes = [
    {
      id: 1,
      nome: 'Maria das Graças',
      comentario: 'Simplesmente amei o vestido florido! Muito bem feito, entrega rápida e embalado com carinho.',
      nota: 5,
    },
    {
      id: 2,
      nome: 'João Batista',
      comentario: 'Comprei para minha esposa e ela adorou! Crochê muito bem trabalhado.',
      nota: 4,
    },
    {
      id: 3,
      nome: 'Fernanda Lima',
      comentario: 'Adorei a experiência! Atendimento ótimo e os produtos são lindos.',
      nota: 5,
    },
    {
      id: 4,
      nome: 'Carlos Henrique',
      comentario: 'Achei bonito, mas o tamanho poderia ser mais claro na descrição. Mesmo assim, recomendo!',
      nota: 3,
    },
    {
      id: 5,
      nome: 'Ana Paula',
      comentario: 'Perfeito do início ao fim. Já virei cliente fiel. Parabéns pelo trabalho!',
      nota: 5,
    },
  ];

  return (
    <section className={styles.container}>

      <div className={styles.topButtons}>
                <Link to="/entrar" className={styles.entrar}>ENTRAR</Link>
                <Link to="/cadastro" className={styles.cadastrar}>CADASTRAR</Link>
      </div>


      <h2 className={styles.titulo}>O que nossos clientes dizem</h2>
      <div className={styles.lista}>
        {avaliacoes.map(avaliacao => (
          <div key={avaliacao.id} className={styles.card}>
            <div className={styles.topo}>
              <h3 className={styles.nome}>{avaliacao.nome}</h3>
              <div className={styles.estrelas}>
                {Array.from({ length: avaliacao.nota }, (_, i) => (
                  <Star key={i} size={16} color="#f4a261" fill="#f4a261" />
                ))}
                {Array.from({ length: 5 - avaliacao.nota }, (_, i) => (
                  <Star key={i} size={16} color="#ccc" />
                ))}
              </div>
            </div>
            <p className={styles.comentario}>"{avaliacao.comentario}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
