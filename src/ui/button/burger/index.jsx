import React from 'react';
import styles from './burger.module.scss';

const Burger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button 
      className={`${styles.burger}`}
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
    >
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </button>
  );
};

export default Burger;