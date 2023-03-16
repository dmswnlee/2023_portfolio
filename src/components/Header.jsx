import React from 'react';
import { FaArrowLeft, FaArrowRight, FaUndoAlt } from 'react-icons/fa';

import styles from '../styles/Header.module.css'

export default function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.header_wrapper}>
            <ul className={styles.icon}>
                <li><FaArrowLeft /></li>
                <li><FaArrowRight /></li>
                <li><FaUndoAlt /></li>
            </ul>
            <div className={styles.address_bar}>
               <p>https://github.com</p>
            </div>
            <div className={styles.user_name}>
               <p>은주</p>
            </div>
         </div>
      </header>
   );
}
