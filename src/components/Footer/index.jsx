import React from "react";
import ig from "./instagram.svg";
import tt from "./twitter.svg";
import face from "./facebook.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__social}>
        <img src={face} alt="" />
        <img src={tt} alt="" />
        <img src={ig} alt="" />
      </div>
      <div className={styles.rodape__dev}>
        <p>Desenvolvido por Migliatti.</p>
      </div>
    </footer>
  );
}
