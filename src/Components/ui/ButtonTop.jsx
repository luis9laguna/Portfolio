import { ArrowUpwardOutlined } from '@material-ui/icons'
import styles from './ButtonTop.module.css'

const ButtonTop = () => {
  return (
    <a className={styles.buttonTop} href="#header">
        <ArrowUpwardOutlined/>
    </a>
  )
}

export default ButtonTop