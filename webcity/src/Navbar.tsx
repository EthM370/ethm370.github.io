import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>My Website</h1>
            <ul style={styles.navList}>
                <li style={styles.navItem}><Link style={styles.navLink} to="/">Home</Link></li>
                <li style={styles.navItem}><Link style={styles.navLink} to="/about">About</Link></li>
                <li style={styles.navItem}><Link style={styles.navLink} to="/projects">Services</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      background: '#282c34',
      color: 'white',
    },
    title: {
      fontSize: '24px',
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      gap: '20px',
    },
    navItem: {
      padding: '12px 0',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
    },
  };
  
  export default Navbar;