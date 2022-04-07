import styles from "./About.module.css";
import image from "../../public/img/about.jpeg"
import angular from '../../public/img/png/angular.png'
import css from '../../public/img/png/css3.png'
import git from '../../public/img/png/git.png'
import html5 from '../../public/img/png/html5.png'
import javascript from '../../public/img/png/javascript.png'
import mongodb from '../../public/img/png/mongodb.png'
import nodejs from '../../public/img/png/nodejs.png'
import react from '../../public/img/png/react.png'


const About = () => {
    return (
        <div id="about" className={styles.aboutContainer}>
            <div className={styles.aboutLeft} data-aos="fade-right" data-aos-duration="1000">
                <div className={styles.cardBack}/>
                <div className={styles.card}>
                    <img
                        src={image}
                        alt="image"
                        className={styles.aboutImage}
                    />
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className={styles.aboutRight}>
                <h1 >About Me</h1>
                <p className={styles.aboutTop}>
                    Hi, I’m Luis Laguna, a Software Developer who loves technologies
                    such as Js, React, Nodejs, Angular, and PHP, so basically, web
                    development.
                </p>
                <p className={styles.aboutBottom}>
                    Since I was a child I’ve loved how things work, usually ending up in
                    complex situations just to find out how that specific thing works,
                    that “ability” has given me a lot of problems but in some other
                    situations it could be said that it has been an advantage such as
                    this case since I’m constantly learning how to do things and not
                    only that but how it works too, so I can have better hindsight of
                    the situation and the problem I need to resolve after all if I don’t
                    know how to resolve a problem how am I supposed to become a
                    good developer?

                </p>
                <div className={styles.containerSkills}>
                <h2>Some of the tecnologies that I use</h2>
                <div >
                    <div> <img src={html5}/> </div>
                    <div> <img src={css}/> </div>
                    <div> <img src={javascript}/> </div>
                    <div> <img src={react}/> </div>
                    <div> <img src={nodejs}/> </div>
                    <div> <img src={mongodb}/> </div>
                    <div> <img src={git}/> </div>
                    <div> <img src={angular}/> </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;