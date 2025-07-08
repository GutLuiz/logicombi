import React from "react";
import styles from "./header.module.css";
import { MdHome, MdPerson, MdBusiness, MdAttachMoney, MdMoreHoriz } from "react-icons/md";

const Header: React.FC = () => (
  <nav className={styles.bottomNav}>
    <div className={styles.navItem + " " + styles.active}>
      <MdHome />
      <span>Geral</span>
    </div>
    <div className={styles.navItem}>
      <MdPerson />
      <span>Clientes</span>
    </div>
    <div className={styles.navItem}>
      <MdBusiness />
      <span>Empresa</span>
    </div>
    <div className={styles.navItem}>
      <MdAttachMoney />
      <span>Vendas</span>
    </div>
    {/* <div className={styles.navItem}>
      <MdMoreHoriz />
      <span>Mais</span>
    </div> */}
  </nav>
);

export default Header; 