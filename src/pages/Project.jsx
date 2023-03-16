import React from 'react';
import { myProject } from '../data/projects';

import styles from '../styles/Project.module.css';

export default function Project() {
   return (
      <div className={styles.projects}>
         <h2>MY PROJECTS.</h2>
         <ul className={styles.project_wrapper}>
            {myProject.map(({ id, img, title, description, tech_stack, url }) => (
               <li className={styles.my_project}>
                  <a key={id} href={url} target="_blank">
                     <img src={img} alt={title} />
                     <h3>{title}</h3>
                     <p className={styles.description}>{description}</p>
                     <ul>
                        {tech_stack.map((tech, idx) => (
                           <li key={idx} className={styles.tech_stack}>{tech}</li>
                        ))}
                     </ul>
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
}
