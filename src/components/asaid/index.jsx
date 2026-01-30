import React from 'react';
import styles from './asaid.module.scss';
import Item from '../../ui/button/navButton';

const Asaid = ({ isOpen, closeMenu }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.nav)) {
      closeMenu();
    }
  };

  const menuItems = [
    { id: 1, text: 'Главная' },
    { id: 3, text: 'Команда' },
    { id: 8, text: 'Хэлп' },
  ];


  return (
    <nav 
      className={`${styles.nav} ${isOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      {isOpen && (
        <>
          <button 
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          />
          
          <div className={styles.menuContent}>
           {menuItems.map((item) => (
          <Item
            key={item.id}
            text={item.text}
            onClick={() => {
              console.log(`Првиет, клик: ${item.text}`);
              closeMenu();
            }}
          />
        ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Asaid;