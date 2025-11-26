import styles from "./explorar.module.css";
import { useState, useEffect } from "react";
import { Map, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import vestidoImg from "./assets/vestido.jpg";
import croppedBucketImg from "./assets/cropped-bucket.jpg";
import saidaPraiaImg from "./assets/saida-praia.jpg";
import croppedImg from "./assets/cropped.jpg";
import biquiniImg from "./assets/biquini.jpg";
import conjuntoImg from "./assets/conjunto.jpg";

const produtos = [
  {
    nome: "Vestido Chita Florido",
    preco: "R$ 150,00",
    categoria: "VESTIMENTAS",
    estado: "RN",
    imagem: vestidoImg,
  },
  {
    nome: "Cropped + Bucket",
    preco: "R$ 200,00",
    categoria: "VESTIMENTAS",
    estado: "PE",
    imagem: croppedBucketImg,
  },
  {
    nome: "Saída de Praia",
    preco: "R$ 120,00",
    categoria: "VESTIMENTAS",
    estado: "AL",
    imagem: saidaPraiaImg,
  },
  {
    nome: "Cropped Crochê",
    preco: "R$ 80,00",
    categoria: "VESTIMENTAS",
    estado: "SE",
    imagem: croppedImg,
  },
  {
    nome: "Biquíni Crochê",
    preco: "R$ 100,00",
    categoria: "VESTIMENTAS",
    estado: "MA",
    imagem: biquiniImg,
  },
  {
    nome: "Conjunto Florido",
    preco: "R$ 350,00",
    categoria: "VESTIMENTAS",
    estado: "PB",
    imagem: conjuntoImg,
  },
];

const categorias = [
  "VESTIMENTAS",
  "DECORAÇÃO",
  "ACESSÓRIOS",
  "CALÇADOS",
  "CAMA, MESA & BANHO",
  "ALIMENTOS",
];
const estados = ["RN", "PE", "AL", "SE", "MA", "PB"];

export function Explorar() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

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
    } else {
      setFavoritos([]);
    }
  }, []);

  const produtosFiltrados = produtos.filter((produto) => {
    return (
      (categoriaSelecionada === "" ||
        produto.categoria === categoriaSelecionada) &&
      (estadoSelecionado === "" || produto.estado === estadoSelecionado)
    );
  });

  return (
    <section className={styles.container}>
      <div className={styles.topButtons}>
        <Link to="/entrar" className={styles.entrar}>
          ENTRAR
        </Link>
        <Link to="/cadastro" className={styles.cadastrar}>
          CADASTRAR
        </Link>
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
        {produtosFiltrados.map((produto, idx) => {
          const isFavorito = favoritos.some((f) => f.nome === produto.nome);
          const handleToggle = () => {
            const user = getUser();
            if (!user) {
              navigate("/entrar");
              return;
            }
            const key = `favorites:${user}`;
            let current = [];
            try {
              current = JSON.parse(localStorage.getItem(key) || "[]");
            } catch (e) {
              current = [];
            }
            const exists = current.find((i) => i.nome === produto.nome);
            if (exists) {
              const next = current.filter((i) => i.nome !== produto.nome);
              localStorage.setItem(key, JSON.stringify(next));
              setFavoritos(next);
            } else {
              const toAdd = {
                nome: produto.nome,
                preco: produto.preco,
                estado: produto.estado,
                imagem: produto.imagem,
              };
              const next = [...current, toAdd];
              localStorage.setItem(key, JSON.stringify(next));
              setFavoritos(next);
            }
          };

          return (
            <div key={idx} className={styles.card}>
              <button
                className={`${styles.favButton} ${
                  isFavorito ? styles.favActive : ""
                }`}
                onClick={handleToggle}
                aria-label={
                  isFavorito
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
                title={
                  isFavorito
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                <Heart size={20} />
              </button>
              <img
                src={produto.imagem}
                alt={produto.nome}
                className={styles.imagem}
              />
              <p className={styles.nome}>
                {produto.nome} - {produto.estado}
              </p>
              <p className={styles.preco}>{produto.preco}</p>
              <div className={styles.tamanhos}>
                <span>P</span>
                <span>M</span>
                <span>G</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
