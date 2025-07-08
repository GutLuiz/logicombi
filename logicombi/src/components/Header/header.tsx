import React, { useState } from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGICOM BI</div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="#">Dashboard</a>
        <a href="#">Vendas</a>
        <a href="#">Clientes</a>
        <a href="#">Empresa</a>
      </nav>

      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
