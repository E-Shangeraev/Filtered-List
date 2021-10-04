import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>FILTERED LIST</h1>
    </header>
  );
};

export default Header;
