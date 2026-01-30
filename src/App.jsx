import React, { useState, useEffect} from 'react';
import MainPage from './Pages/main';
import Header from './components/header';
import Footer from './components/footer';
import cn from 'classnames';
import styles from './index.module.scss';
import Asaid from './components/asaid';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
      if (window.innerWidth >= 1200) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (!isDesktop) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = () => {
    if (!isDesktop) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={cn(styles.root, { [styles.menuOpen]: isMenuOpen })}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Asaid isOpen={isMenuOpen} closeMenu={closeMenu} />
      
      <div className={styles.contentContainer}>
        <MainPage isMenuOpen={isMenuOpen} />
        <Footer />
      </div>
    </div>
  );
}

export default App;