import React from "react";
import styles from "./inicio.module.css";
import mapa from "./assets/mapa.svg";
import { Link } from "react-router-dom";


export function Inicio(props) {
  return (
    <div className={styles.container}>

        <div className={styles.topButtons}>
                <Link to="/entrar" className={styles.entrar}>ENTRAR</Link>
                <Link to="/cadastro" className={styles.cadastrar}>CADASTRAR</Link>
        </div>

        
      <div className={styles.textArea}>
        <h1 className={styles.titulo}>BEM VINDO AO ORIGENS!</h1>
        <p className={styles.descricao}>
          Descubra a riqueza do Brasil através de produtos artesanais exclusivos
          de todas as regiões. Explore e conecte-se com os mestres artesãos que
          trazem para você peças únicas, feitas com tradição e paixão. Encontre
          o que é verdadeiramente feito à mão, de Norte a Sul do país.
        </p>
      </div>
      <div className={styles.mapaArea}>
        {/* Você pode substituir o src por props.mapa ou usar uma imagem local */}
        <img
          className={styles.mapa}
          src={mapa}
          alt="Mapa do Brasil"
        />
        <span className={styles.textoMapa}>Mover para explorar</span>
      </div>
    </div>
  );
}
