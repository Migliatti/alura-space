import banner from "./banner.png";
import styles from "./PageInitial.module.scss";

import Header from "components/Header";
import Menu from "components/Menu";
import Galeria from "components/Galeria";
import Populares from "components/Populares";
import Footer from "components/Footer";

export default function PageInitial() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Footer />
    </>
  );
}
