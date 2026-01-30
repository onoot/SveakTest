import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './main.module.scss';
import Card from '../../ui/card';
import LEV from '../../assets/img/Lev.png'
import ANY from '../../assets/img/Any.png'
import PUH from '../../assets/img/Puh.png'

function MainPage({ isMenuOpen }) {
  const dataCard = [
  { id: 1, h: 'card', desc: 'Description', img: ANY },
  { id: 2, h: 'card', desc: 'Description', img: ANY },
  { id: 3, h: 'card', desc: 'Description', img: LEV },
  { id: 4, h: 'card', desc: 'Description', img: ANY },
  { id: 5, h: 'card', desc: 'Description', img: LEV },
  { id: 6, h: 'card', desc: 'Description', img: LEV },
  { id: 7, h: 'card', desc: 'Description', img: ANY },
  { id: 8, h: 'card', desc: 'Description', img: LEV },
  { id: 9, h: 'card', desc: 'Description', img: ANY },
  { id: 10, h: 'card', desc: 'Description', img: LEV },
  { id: 11, h: 'card', desc: 'Description', img: LEV },
  { id: 12, h: 'card', desc: 'Description', img: ANY },
  { id: 13, h: 'card', desc: 'Description', img: LEV },
  { id: 14, h: 'card', desc: 'Description', img: ANY },
  { id: 15, h: 'card', desc: 'Description', img: LEV },
  { id: 16, h: 'card', desc: 'Description', img: LEV },
  { id: 17, h: 'card', desc: 'Description', img: ANY },
  { id: 18, h: 'card', desc: 'Description', img: LEV },
  { id: 19, h: 'card', desc: 'Description', img: ANY },
  { id: 20, h: 'card', desc: 'Description', img: LEV },
  { id: 21, h: 'card', desc: 'Description', img: PUH },
  { id: 22, h: 'card', desc: 'Description', img: LEV },
  { id: 23, h: 'card', desc: 'Description', img: LEV },
  { id: 24, h: 'card', desc: 'Description', img: PUH },
  { id: 25, h: 'card', desc: 'Description', img: LEV },
  { id: 26, h: 'card', desc: 'Description', img: PUH },
  { id: 27, h: 'card', desc: 'Description', img: LEV },
  { id: 28, h: 'card', desc: 'Description', img: LEV },
  { id: 29, h: 'card', desc: 'Description', img: PUH },
  { id: 30, h: 'card', desc: 'Description', img: LEV },
  { id: 31, h: 'card', desc: 'Description', img: ANY },
  { id: 32, h: 'card', desc: 'Description', img: LEV },
  { id: 33, h: 'card', desc: 'Description', img: ANY },
  { id: 34, h: 'card', desc: 'Description', img: LEV },
  { id: 35, h: 'card', desc: 'Description', img: LEV },
  { id: 36, h: 'card', desc: 'Description', img: ANY },
  { id: 37, h: 'card', desc: 'Description', img: LEV },
  { id: 38, h: 'card', desc: 'Description', img: ANY },
  { id: 39, h: 'card', desc: 'Description', img: LEV },
  { id: 40, h: 'card', desc: 'Description', img: LEV },
  { id: 41, h: 'card', desc: 'Description', img: PUH },
  { id: 42, h: 'card', desc: 'Description', img: LEV },
  { id: 43, h: 'card', desc: 'Description', img: PUH },
  { id: 44, h: 'card', desc: 'Description', img: LEV },
  { id: 45, h: 'card', desc: 'Description', img: PUH },
  { id: 46, h: 'card', desc: 'Description', img: LEV },
  { id: 47, h: 'card', desc: 'Description', img: LEV },
  { id: 48, h: 'card', desc: 'Description', img: PUH },
  { id: 49, h: 'card', desc: 'Description', img: LEV },
  { id: 50, h: 'card', desc: 'Description', img: ANY }
];

  return (
    <main className={cn(styles.root, { [styles.menuOpen]: isMenuOpen })}>
      <div className={styles.content}>
        <div className={styles.listCard}>
          {dataCard.map((card) => (
            <div key={card.id} className={styles.cardContainer}>
              <Card 
                h={card.h}
                desc={card.desc}
                img={card.img}
              />
            </div>
          ))}
        </div>        
      </div>
    </main>
  );
}


export default MainPage;