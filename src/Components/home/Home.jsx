import styles from './Home.module.css';
import pdf from "../../public/pdf/CV_LUIS_LAGUNA_ENGLISH.pdf";


export default function Home() {
  return (
    <div  id="home" className={styles.containerHome}>
        <div className={styles.wrapper}>
          <h2 className={styles.intro} data-aos="fade-up" data-aos-duration="500">Hi, I'm</h2>
          <h1 className={styles.name} data-aos="fade-up" data-aos-duration="1000">Luis Laguna</h1>
          <div className={styles.title} data-aos="fade-up" data-aos-duration="1500">
            <div className={styles.titleWrapper}>
              <div className={styles.titleItem}>Web Developer</div>
              <div className={styles.titleItem}>React</div>
              <div className={styles.titleItem}>NodeJs</div>
              <div className={styles.titleItem}>NextJs</div>
              <div className={styles.titleItem}>Javascript</div>
            </div>
          </div>
          <p className={styles.description} data-aos="fade-up" data-aos-duration="2500">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <a href={pdf} target="_blank" data-aos="fade-up" data-aos-duration="2500"  className={styles.button}>Resume</a>
        </div>
    </div>
  )
}
