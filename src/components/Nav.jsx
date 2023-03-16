import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsXLg } from 'react-icons/bs';
import { menuList } from '../data/tabMenu';

import styles from '../styles/Nav.module.css';

export default function Nav() {
   const [tabActive, setTabActive] = useState(1);

   return (
      <nav className={styles.nav}>
         <ul className={styles.tabMenu}>
            {menuList && menuList.map(({ link, name, id }) => 
               <Link to={link} key={link}>
                  <li
                     onClick={() => {
                        setTabActive(id);
                     }}
                     className={[styles.menu_btn, tabActive === id ? styles.active_menu : styles.menu_btn].join(' ')}>
                     {name}
                     {<BsXLg />}
                  </li>
               </Link>
            )}
         </ul>
      </nav>
   );
}
