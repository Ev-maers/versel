import styles from './estoque.module.css';
import { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Estoque() {
  const [materiais, setMateriais] = useState([
    { id: 1, nome: 'Linha de Crochê Azul', quantidade: 20 },
    { id: 2, nome: 'Tecido Chita Floral', quantidade: 12 },
    { id: 3, nome: 'Elástico para Biquíni', quantidade: 35 },
    { id: 4, nome: 'Fita de Cetim Rosa', quantidade: 50 },
    { id: 5, nome: 'Agulha de Costura', quantidade: 100 },
  ]);

  const [novoMaterial, setNovoMaterial] = useState({ nome: '', quantidade: '' });

  const adicionarMaterial = () => {
    if (novoMaterial.nome && novoMaterial.quantidade > 0) {
      const id = Date.now();
      setMateriais([
        ...materiais,
        { ...novoMaterial, id, quantidade: Number(novoMaterial.quantidade) },
      ]);
      setNovoMaterial({ nome: '', quantidade: '' });
    }
  };

  const removerMaterial = (id) => {
    setMateriais(materiais.filter(item => item.id !== id));
  };

  const atualizarQuantidade = (id, novaQtd) => {
    setMateriais(materiais.map(item =>
      item.id === id ? { ...item, quantidade: Number(novaQtd) } : item
    ));
  };

  return (
    <section className={styles.container}>

      <div className={styles.topButtons}>
                <Link to="/perfil" className={styles.usuarioLogado}>Olá, Usuário!</Link>
      </div>

      <h2 className={styles.titulo}>Controle de Estoque</h2>

      <div className={styles.adicionar}>
        <input
          type="text"
          placeholder="Nome do material"
          value={novoMaterial.nome}
          onChange={(e) => setNovoMaterial({ ...novoMaterial, nome: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={novoMaterial.quantidade}
          onChange={(e) => setNovoMaterial({ ...novoMaterial, quantidade: e.target.value })}
        />
        <button onClick={adicionarMaterial}>
          <PlusCircle size={24} />
        </button>
      </div>

      <div className={styles.lista}>
        {materiais.map(item => (
          <div key={item.id} className={styles.material}>
            <div className={styles.info}>
              <p className={styles.nome}>{item.nome}</p>
              <label>
                Qtd:
                <input
                  type="number"
                  min="0"
                  value={item.quantidade}
                  onChange={(e) => atualizarQuantidade(item.id, e.target.value)}
                  className={styles.inputQuantidade}
                />
              </label>
            </div>
            <button
              className={styles.remover}
              onClick={() => removerMaterial(item.id)}
              title="Remover material"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
