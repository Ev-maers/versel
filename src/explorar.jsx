import styles from './explorar.module.css';
import { useState } from 'react';
import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

import vestidoImg from './assets/vestido.jpg';
import croppedBucketImg from './assets/cropped-bucket.jpg';
import saidaPraiaImg from './assets/saida-praia.jpg';
import croppedImg from './assets/cropped.jpg';
import biquiniImg from './assets/biquini.jpg';
import conjuntoImg from './assets/conjunto.jpg';

const produtos = [
  { nome: 'Vestido Chita Florido', preco: 'R$ 150,00', categoria: 'VESTIMENTAS', estado: 'RN', imagem: vestidoImg },
  { nome: 'Cropped + Bucket', preco: 'R$ 200,00', categoria: 'VESTIMENTAS', estado: 'PE', imagem: croppedBucketImg },
  { nome: 'Saída de Praia', preco: 'R$ 120,00', categoria: 'VESTIMENTAS', estado: 'AL', imagem: saidaPraiaImg },
  { nome: 'Cropped Crochê', preco: 'R$ 80,00', categoria: 'VESTIMENTAS', estado: 'SE', imagem: croppedImg },
  { nome: 'Biquíni Crochê', preco: 'R$ 100,00', categoria: 'VESTIMENTAS', estado: 'MA', imagem: biquiniImg },
  { nome: 'Conjunto Florido', preco: 'R$ 350,00', categoria: 'VESTIMENTAS', estado: 'PB', imagem: conjuntoImg },
];

const categorias = ['VESTIMENTAS', 'DECORAÇÃO', 'ACESSÓRIOS', 'CALÇADOS', 'CAMA, MESA & BANHO', 'ALIMENTOS'];
const estados = ['RN', 'PE', 'AL', 'SE', 'MA', 'PB'];

export function Explorar() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  const produtosFiltrados = produtos.filter(produto => {
    return (
      (categoriaSelecionada === '' || produto.categoria === categoriaSelecionada) &&
      (estadoSelecionado === '' || produto.estado === estadoSelecionado)
    );
  });

  return (

    

    <section className={styles.container}>

       <div className={styles.topButtons}>
                <Link to="/entrar" className={styles.entrar}>ENTRAR</Link>
                <Link to="/cadastro" className={styles.cadastrar}>CADASTRAR</Link>
        </div>

      <div className={styles.header}>
        <Map size={48} />
        <h2 className={styles.titulo}>Explorar</h2>
      </div>

      <div className={styles.filtros}>
        <div className={styles.filtro}>
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
            className={styles.select}
          >
            <option value="">Todas</option>
            {categorias.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filtro}>
          <label htmlFor="estado">Estado:</label>
          <select
            id="estado"
            value={estadoSelecionado}
            onChange={(e) => setEstadoSelecionado(e.target.value)}
            className={styles.select}
          >
            <option value="">Todos</option>
            {estados.map((uf, idx) => (
              <option key={idx} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.produtos}>
        {produtosFiltrados.map((produto, idx) => (
          <div key={idx} className={styles.card}>
            <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
            <p className={styles.nome}>{produto.nome} - {produto.estado}</p>
            <p className={styles.preco}>{produto.preco}</p>
            <div className={styles.tamanhos}>
              <span>P</span>
              <span>M</span>
              <span>G</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
