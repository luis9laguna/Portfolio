import { Email, GitHub, LinkedIn } from "@material-ui/icons"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <h3> Made with love by Luis Laguna  </h3>
      <div className={styles.infoContact}>
        <a href="https://github.com/luis9laguna">
          <GitHub/>
        </a>
        <a href="mailto:luis9laguna@gmail.com">
          <Email/>
        </a>
        <a href="https://www.linkedin.com/in/luis9laguna">
          <LinkedIn/>
        </a>
      </div>
    </div>
  )
}

export default Footer