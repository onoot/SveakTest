import styles from './header.module.scss';
import Burger from '../../ui/button/burger'

const Header = ({ isMenuOpen, toggleMenu }) => {

  return (
    <>
    <header className={styles.header}>
      <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
      <div className={styles.rightMenu}>
        <button className={styles.triangl}>
        </button>
        <button className={styles.cirkle}>
        </button>
         <button className={styles.sqrt}>
        </button>
      </div>
    </header>
    </>
  );
};

export default Header;