import styles from './Header.module.css';
import Logo from "../../public/img/logo.png";
import { useState } from 'react';

export default function Header() {

    //USESTATE FOR NAVBAR
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    return (
        <div className={styles.container} id="header">
            <img src={Logo} className='image'/>
            <button className={`${styles.burguer} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(prev => !prev)}>
                <div/>
            </button>
            <div className={`${styles.containerLinks} ${isOpen ? styles.active : ''}`}>
                <a href="#home" onClick={() => setIsOpen(prev => !prev)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(prev => !prev)}>About me</a>
                <a href="#projects" onClick={() => setIsOpen(prev => !prev)}>Projects</a>
                <a href="#contact" onClick={() => setIsOpen(prev => !prev)}>Contact</a>
            </div>
            
        </div>
    )
}
