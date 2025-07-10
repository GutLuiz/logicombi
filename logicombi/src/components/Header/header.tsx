import React from "react";
import styles from "./header.module.css";
import {
  MdHome,
  MdPerson,
  MdBusiness,
  MdAttachMoney,
  MdMoreHoriz,
  MdAssignmentInd,
} from "react-icons/md";

const Header: React.FC = () => (
  <nav className={styles.butaonav}>
    <div className={styles.itens + " " + styles.ativo}>
      <MdHome />
      <span>Geral</span>
    </div>
    <div className={styles.itens}>
      <MdPerson />
      <span>Clientes</span>
    </div>
    <div className={styles.itens}>
      <MdBusiness />
      <span>Empresa</span>
    </div>
    <div className={styles.itens}>
      <MdAttachMoney />
      <span>Vendas</span>
    </div>
    <div className={styles.itens}>
      <MdMoreHoriz />
      <span>Mais</span>
    </div>
  </nav>
);

export default Header;
