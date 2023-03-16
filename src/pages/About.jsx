import React from 'react';
import { mySkillsImages } from '../data/about.js';

import styles from '../styles/About.module.css';

export default function About() {
   return (
      <div className={styles.about}>
         <h2>Who.</h2>
         <section className={styles.who}>
            <div>
               <img src={process.env.PUBLIC_URL + `/img/about/jay_picture.png`} alt="이은주" className={styles.me} />
               <div className={styles.archive}>
                  <a href="https://github.com/dmswnlee" target="_blank">
                     <img src={process.env.PUBLIC_URL + `/img/about/github.png`} alt="깃허브" />
                  </a>
                  <a href="https://jaydl.tistory.com/" target="_blank">
                     <img src={process.env.PUBLIC_URL + `/img/about/tistory.png`} alt="티스토리 블로그" />
                  </a>
               </div>
            </div>
            <p>
               안녕하세요. 프론트엔드 개발자 이은주 입니다. <br />
               <br />
               새로운 기술을 배우는것에 관심이 많고 공부하기 위해 꾸준히 기록하고 정리하는 습관을 가지고 있습니다.
               사용자에게 깔끔하고 사용하기 편리한 서비스를 제공하기 위해 끊임없이 공부하고 노력하고 있습니다. <br />
               <br />
               어떤일이든 같이 일하는 팀원들과의 커뮤니케이션이 중요하다는 것을 알고 있습니다. 부족한 부분은 피드백 받으며
               같이 일하기 좋은 개발자가 되기 위해 노력하겠습니다.
            </p>
         </section>
         <h2>Skills.</h2>
         <section className={styles.skills}>
            <ul className={styles.skills_list}>
               {mySkillsImages.map(({ id, img, descript }) => (
                  <li key={id}>
                     <div>
                        <div className={styles.skill_wrapper}>
                           <img src={img} alt={descript} className={styles.skill_img} />
                        </div>
                        <p>{descript}</p>
                     </div>
                  </li>
               ))}
            </ul>
         </section>
      </div>
   );
}
