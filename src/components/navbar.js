import React from 'react';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <input id="menu" type="checkbox" />
      <label htmlFor="menu">Menu</label>
      <ul className={styles.menu}>
        <li>
          <Link href="#0">
            <span>About</span>
            <i className="fas fa-address-card" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link href="#0">
            <span>Projects</span>
            <i className="fas fa-tasks" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link href="#0">
            <span>Clients</span>
            <i className="fas fa-users" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
      <p className={styles.notification}>Click on the Menu</p>
    
    </nav>
  );
};

export default Navbar;
