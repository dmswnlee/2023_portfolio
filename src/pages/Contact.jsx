import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <section>
                <FaEnvelope className={styles.icon} />
                <p>궁금한 점은 메일로 보내주시면 <br /> 최대한 빠르게 답장드리겠습니다.</p>
                <a href="mailto:dlrmawnl03@gmail.com">dlrmawnl03@gmail.com</a>
            </section>
        </div>
    );
}

