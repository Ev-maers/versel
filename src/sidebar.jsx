import { useState } from "react";
import {
  Menu, X, Home, Compass, ShoppingCart, Heart,
  User, BarChart2, Boxes, PackageCheck, Star,
  Info, Users, Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      {/*<div className={styles.sidebarToggle}>
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          {isOpen ? <X /> : <Menu />}
        </button>
        {!isOpen && <span className={styles.logoMini}>Origens</span>}
      </div>*/}

      {isOpen && (
        <aside className={styles.sidebar}>
          <h1 className={styles.logo}>ORIGENS</h1>
          <nav>
            <p className={styles.sectionTitle}>MENU</p>
            <ul>
              <li><Link to="/inicio" className={styles.button}><Home size={18} /> Início</Link></li>
              <li><Link to="/explorar" className={styles.button}><Compass size={18} /> Explorar</Link></li>
              <li><Link to="/carrinho" className={styles.button}><ShoppingCart size={18} /> Carrinho</Link></li>
              <li><Link to="/favoritos" className={styles.button}><Heart size={18} /> Favoritos</Link></li>
            </ul>

            <p className={styles.sectionTitle}>ÁREA DO ARTESÃO</p>
            <ul>
              <li><Link to="/perfil" className={styles.button}><User size={18} /> Perfil Vendedor</Link></li>
              <li><Link to="/analise" className={styles.button}><BarChart2 size={18} /> Análise de Vendas</Link></li>
              <li><Link to="/estoque" className={styles.button}><Boxes size={18} /> Estoque</Link></li>
              <li><Link to="/pedidos" className={styles.button}><PackageCheck size={18} /> Pedidos</Link></li>
              <li><Link to="/avaliacoes" className={styles.button}><Star size={18} /> Avaliações</Link></li>
            </ul>

            <p className={styles.sectionTitle}>INFORMAÇÕES</p>
            <ul>
              <li><Link to="/about" className={styles.button}><Info size={18} /> Sobre o projeto</Link></li>
              <li><Link to="/contato" className={styles.button}><Users size={18} /> Organizadores</Link></li>
              <li><Link to="/SAC" className={styles.button}><Mail size={18} /> SAC</Link></li>
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}
