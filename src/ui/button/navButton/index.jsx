import React from 'react';
import styles from './nvabutton.module.scss';
import classNames from 'classnames';

const Button = ({ iconStyle, text, onClick }) => {
  return (
    <button 
      className={classNames(styles.menuButton)}
      onClick={onClick}
      aria-label={text}
    >
      <div 
        className={classNames(styles.icon, iconStyle)}
        aria-hidden="true"
      />
      <span className={styles.label}>{text}</span>
    </button>
  );
};

export default Button;