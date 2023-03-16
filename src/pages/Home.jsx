import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';

import styles from '../styles/Home.module.css';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.homepage}>
            <h1 onClick={()=> {}} className={styles.logo}>
                <img src={process.env.PUBLIC_URL + `/img/logo.png`} alt="logo" />
            </h1>
            <div className={styles.search_bar}>
                <FaSistrix className={styles.icon}/>
                <h1>안녕하세요. 프론트엔드 개발자 이은주 입니다.</h1>
            </div>
        </div>
    );
}

