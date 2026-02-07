import styles from './NavBar.module.css';
import logo from '../assets/react.svg';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.brandName}>TheGameLibrary</span>
      </div>
      <div className={styles.searchBar}>
        <input 
          type="text" 
          placeholder="Search games..." 
          className={styles.searchInput} 
        />
      </div>
      <div className={styles.userSection}>
        {}
        <span>Dark Mode</span>
      </div>
    </nav>
  );
};

export default NavBar;