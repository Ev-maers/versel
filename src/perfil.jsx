import React, { useState } from 'react';
import styles from './perfil.module.css';
import { Link } from 'react-router-dom';

export function Perfil() {
  const [formData, setFormData] = useState({
    nome: 'Maria das Artes',
    cpf: '123.456.789-00',
    email: 'maria@email.com',
    endereco: 'Brasil-PE',
    cep: '50000-000',
    senha: '********'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className={styles.container}>

      <div className={styles.topButtons}>
              <Link to="/perfil" className={styles.usuarioLogado}>Olá, Usuário!</Link>
      </div>

      <h2 className={styles.title}>Editar Perfil</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>Informações pessoais</p>
        <input
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome completo"
          required
        />
        <input
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="CPF (000.000.000-00)"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />

        <p>Endereço</p>
        <input
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="País/Estado (Ex.: Brasil-PE)"
          required
        />
        <input
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          placeholder="CEP"
          required
        />

        <p>Senha</p>
        <input
          name="senha"
          type="password"
          value={formData.senha}
          onChange={handleChange}
          placeholder="No mínimo 8 caracteres"
          required
        />

        <button type="submit" className={styles.submitButton}>Salvar Alterações</button>
      </form>
    </div>
  );
}
