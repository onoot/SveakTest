import React from 'react';
import styles from './card.module.scss';

const Card = ({ id = null, h = null, desc = null, img = null }) => {
  return (
    <div className={styles.card}>
      <div key={id} className={styles.cardContent}>
          <img 
            src={img} 
            alt={h || 'Card image'} 
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>
            {h}
          </h3>
          <p className={styles.cardDescription}>
            {desc}
          </p>
      </div>
    </div>
  );
};

export default Card;