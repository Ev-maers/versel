import { useState } from 'react';
import { List, ClipboardList } from 'lucide-react';
import styles from './gerenciamento.module.css';
import pedidoIcon from './assets/pedidos.svg';
import { Link } from 'react-router-dom';

const pedidos = [
  {
    id: 1,
    nome: 'Lucas Rodolfo',
    pedido: 'CHAPÉU DE LAMPIÃO',
    data: '30/04/2025',
    endereco: 'AV. CAIS DO APOLO, RECIFE, RECIFE-PE',
    pagamento: 'CARTÃO DE CRÉDITO',
    status: 'CONFIRMADO'
  },
  {
    id: 2,
    nome: 'Janderson Ferreira',
    pedido: 'BOLSA ARTESANAL',
    data: '29/04/2025',
    endereco: 'RUA DAS ARTES, OLINDA-PE',
    pagamento: 'PIX',
    status: 'PENDENTE'
  },
  {
    id: 3,
    nome: 'Pedro Rennil',
    pedido: 'ESCULTURA EM BARRO',
    data: '28/04/2025',
    endereco: 'RUA DA ESCULTURA, CARUARU-PE',
    pagamento: 'BOLETO',
    status: 'CONFIRMADO'
  },
  {
    id: 4,
    nome: 'Rhaldney Robert',
    pedido: 'REDE DE DESCANSO',
    data: '27/04/2025',
    endereco: 'RUA DO SOSSEGO, GARANHUNS-PE',
    pagamento: 'CARTÃO DE CRÉDITO',
    status: 'CONFIRMADO'
  },
  {
    id: 5,
    nome: 'Ana Cristina',
    pedido: 'SANDÁLIA DE COURO',
    data: '26/04/2025',
    endereco: 'AV. PRINCIPAL, PETROLINA-PE',
    pagamento: 'PIX',
    status: 'CONFIRMADO'
  }
];

export function Gerenciamento(props) {
  const [selecionado, setSelecionado] = useState(pedidos[0]);

  return (
    <div className={styles.container}>

      <div className={styles.topButtons}>
                <Link to="/perfil" className={styles.usuarioLogado}>Olá, Usuário!</Link>
      </div>


      <div className={styles.header}>
        <img src={pedidoIcon} alt="Ícone pedido" className={styles.iconPedido} />
        <h1 className={styles.titulo}>Gerenciamento de pedidos</h1>
      </div>
      <div className={styles.areaPrincipal}>
        <div className={styles.encomendas}>
          <div className={styles.tituloSecao}>
            <List className={styles.icone} size={20} />
            <h2>Suas encomendas</h2>
          </div>
          {pedidos.map(pedido => (
            <button
              key={pedido.id}
              className={styles.botaoPedido}
              onClick={() => setSelecionado(pedido)}
            >
              <span className={styles.numero}>#{pedido.id}</span> {pedido.nome}
            </button>
          ))}
        </div>
        <div className={styles.detalhes}>
          <div className={styles.tituloSecao}>
            <ClipboardList className={styles.icone} size={20} />
            <h2>Detalhes do pedido</h2>
          </div>
          <div className={styles.cartaoDetalhes}>
            <p><strong>PEDIDO:</strong> {selecionado.pedido}</p>
            <p><strong>DATA DO PEDIDO:</strong> {selecionado.data}</p>
            <p><strong>ENDEREÇO:</strong> {selecionado.endereco}</p>
            <p><strong>MÉTODO DE PAGAMENTO:</strong> {selecionado.pagamento}</p>
            <p><strong>SITUAÇÃO DO PAGAMENTO:</strong> {selecionado.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
