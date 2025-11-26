import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Sidebar } from './sidebar.jsx';
import { Cadastro } from './cadastro.jsx';
import { Gerenciamento } from './gerenciamento.jsx';
import { Analise } from './analise.jsx';
import { Inicio } from './inicio.jsx';
import { Contato } from './components/contact.jsx';
import { About } from './components/about.jsx';
import { SAC } from './sac.jsx';
import { Explorar } from './explorar.jsx';
import { Carrinho } from './carrinho.jsx';
import { Avaliacoes } from './avaliacoes.jsx';
import { Favoritos } from './favoritos.jsx';
import { Estoque } from './estoque.jsx';
import { Entrar } from './entrar.jsx';
import { Perfil } from './perfil.jsx';
import ScrollToTop from './scrollToTop.jsx';
//import { Mapa } from './mapa.jsx';

import styles from './app.module.css';
import './global.css';

function App() {
  return (
   <Router>
     <ScrollToTop />
      <div className={styles.wrapper}>
        
      <Sidebar />
        <main>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pedidos" element={<Gerenciamento />} />
            <Route path="/analise" element={<Analise />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/about" element={<About />} />
            <Route path="/sac" element={<SAC />} />
            <Route path="/explorar" element={<Explorar />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/avaliacoes" element={<Avaliacoes />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/entrar" element={<Entrar />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
        

        </main>
      </div>
      </Router>
  
  );
}

export default App;
