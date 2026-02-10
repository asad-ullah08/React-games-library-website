import styles from './NavBar.module.css';
import logo from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch';

interface Props {
  onToggle: () => void;
  isDarkMode: boolean;
}

const NavBar = ({onToggle, isDarkMode}: Props) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.brandName}>TheGameFolio</span>
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
        <ColorModeSwitch isDarkMode={isDarkMode} onToggle={onToggle} />
      </div>
    </nav>
  );
};

export default NavBar;