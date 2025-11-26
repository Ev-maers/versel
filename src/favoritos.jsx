import styles from "./favoritos.module.css";
import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  const getUser = () => localStorage.getItem("user");

  useEffect(() => {
    const user = getUser();
    if (user) {
      try {
        const raw = localStorage.getItem(`favorites:${user}`) || "[]";
        setFavoritos(JSON.parse(raw));
      } catch (e) {
        setFavoritos([]);
      }
    }
  }, []);

  const removerFavorito = (nome) => {
    const user = getUser();
    if (!user) return;
    const key = `favorites:${user}`;
    const next = favoritos.filter((item) => item.nome !== nome);
    localStorage.setItem(key, JSON.stringify(next));
    setFavoritos(next);
  };

  return (
    <section className={styles.container}>
      <div className={styles.topButtons}>
        <Link to="/perfil" className={styles.usuarioLogado}>
          Olá, Usuário!
        </Link>
      </div>

      <h2 className={styles.titulo}>Seus Favoritos</h2>

      {favoritos.length === 0 ? (
        <p className={styles.vazio}>Nenhum item nos favoritos.</p>
      ) : (
        <div className={styles.grid}>
          {favoritos.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <img
                src={item.imagem}
                alt={item.nome}
                className={styles.imagem}
              />
              <div className={styles.info}>
                <h3 className={styles.nome}>{item.nome}</h3>
                <p className={styles.preco}> {item.preco}</p>
                <button
                  className={styles.remover}
                  onClick={() => removerFavorito(item.nome)}
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
