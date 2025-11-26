import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./entrar.module.css";

export function Entrar() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simples autenticação local: armazenar usuário em localStorage
    // (em app real, trocar por chamada ao backend)
    localStorage.setItem("user", usuario || "user");
    // redireciona para a página inicial
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <label className={styles.label}>
          Usuário
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Senha
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
            required
          />
        </label>
        <button type="submit" className={styles.botao}>
          Entrar
        </button>
      </form>
    </div>
  );
}
