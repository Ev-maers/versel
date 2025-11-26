import styles from './carrinho.module.css';
import { ShoppingCart, Trash2, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Carrinho() {
  const [itens, setItens] = useState([
    { id: 1, nome: 'Vestido Chita Florido', preco: 150, quantidade: 1 },
    { id: 2, nome: 'Cropped Crochê', preco: 80, quantidade: 2 },
  ]);

  const [mensagem, setMensagem] = useState('');
  const [novoItem, setNovoItem] = useState({ nome: '', preco: '', quantidade: 1 });

  const removerItem = (id) => {
    setItens(itens.filter(item => item.id !== id));
  };

  const adicionarItem = () => {
    if (novoItem.nome && novoItem.preco && novoItem.quantidade > 0) {
      const id = Date.now();
      setItens([...itens, { ...novoItem, id, preco: parseFloat(novoItem.preco) }]);
      setNovoItem({ nome: '', preco: '', quantidade: 1 });
    }
  };

  const atualizarQuantidade = (id, quantidade) => {
    setItens(itens.map(item =>
      item.id === id ? { ...item, quantidade: Number(quantidade) } : item
    ));
  };

  const finalizarCompra = () => {
    setMensagem('Compra finalizada! Um e-mail será enviado com as confirmações necessárias.');
    setItens([]);
  };

  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <section className={styles.container}>

      <div className={styles.topButtons}>
                <Link to="/perfil" className={styles.usuarioLogado}>Olá, Usuário!</Link>
      </div>

      <div className={styles.header}>
        <ShoppingCart size={48} />
        <h2 className={styles.titulo}>Carrinho de Compras</h2>
      </div>

      {mensagem && (
        <div className={styles.mensagemContainer}>
          <p className={styles.mensagem}>{mensagem}</p>
          <button className={styles.continuar} onClick={() => setMensagem('')}>
            Continuar Comprando
          </button>
        </div>
      )}

      <div className={styles.adicionar}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={novoItem.nome}
          onChange={(e) => setNovoItem({ ...novoItem, nome: e.target.value })}
        />
        <input
          type="number"
          placeholder="Preço"
          value={novoItem.preco}
          onChange={(e) => setNovoItem({ ...novoItem, preco: e.target.value })}
        />
        <input
          type="number"
          min="1"
          placeholder="Qtd"
          value={novoItem.quantidade}
          onChange={(e) => setNovoItem({ ...novoItem, quantidade: e.target.value })}
        />
        <button onClick={adicionarItem}>
          <PlusCircle size={24} />
        </button>
      </div>

      {itens.length === 0 ? (
        <p className={styles.vazio}>Seu carrinho está vazio.</p>
      ) : (
        <div className={styles.lista}>
          {itens.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.info}>
                <p className={styles.nome}>{item.nome}</p>
                <p className={styles.preco}>R$ {item.preco},00</p>
                <label>
                  Quantidade:
                  <input
                    type="number"
                    min="1"
                    value={item.quantidade}
                    onChange={(e) => atualizarQuantidade(item.id, e.target.value)}
                    className={styles.inputQuantidade}
                  />
                </label>
              </div>
              <button className={styles.remover} onClick={() => removerItem(item.id)}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className={styles.total}>
        <p>Total: <strong>R$ {total},00</strong></p>
        {itens.length > 0 && (
          <button className={styles.finalizar} onClick={finalizarCompra}>
            Finalizar Compra
          </button>
        )}
      </div>
    </section>
  );
}
