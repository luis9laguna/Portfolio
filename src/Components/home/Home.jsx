import styles from './Home.module.css';
import home from "../../public/img/home.jpg";
import pdf from "../../public/pdf/CV_LUIS_LAGUNA_ENGLISH.pdf";


export default function Home() {
  return (
    <div  id="home" className={styles.containerHome}>
        <div className={styles.wrapper}>
          <h2 className={styles.intro}>Hi, I'm</h2>
          <h1 className={styles.name}>Luis Laguna</h1>
          <div className={styles.title}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleItem}>Web Developer</div>
              <div className={styles.titleItem}>React</div>
              <div className={styles.titleItem}>NodeJs</div>
              <div className={styles.titleItem}>NextJs</div>
              <div className={styles.titleItem}>Javascript</div>
            </div>
          </div>
          <p className={styles.description}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <a href={pdf} target="_blank"  className={styles.button}>Resume</a>
        </div>
    </div>
  )
}
