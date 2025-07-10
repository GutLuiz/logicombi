import React, { useState, useRef, useEffect } from "react";
import styles from "./header.module.css";
import {
  MdHome,
  MdPerson,
  MdBusiness,
  MdAttachMoney,
  MdMoreHoriz,
  MdAssignmentInd,
  MdClose,
} from "react-icons/md";

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    }
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <nav className={styles.butaonav} ref={headerRef}>
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
        {/* <div className={styles.itens} onClick={() => setShowModal((v) => !v)}>
          {showModal ? <MdClose /> : <MdMoreHoriz />}
          <span>{showModal ? "Fechar" : "Mais"}</span>
        </div> */}
      </nav>
      {/* {showModal && (
        <div className={styles.dropdownOverlay}>
          <div className={styles.dropdownMenu} ref={modalRef}>
            <h3 className={styles.modalTitle}>Ações</h3>
            <div className={styles.modalItem}>Conta</div>
            <div className={styles.modalItem}>Compartilhar dados</div>
            <div className={styles.modalItem}>Alterar período</div>
            <div className={styles.modalItem}>Comparar com outro período</div>
            <div className={styles.modalItem}>Configurações</div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;
