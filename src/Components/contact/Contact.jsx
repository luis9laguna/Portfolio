import styles from "./Contact.module.css";
import { Email, Phone, Web } from "@material-ui/icons";
import Form from "./Form";

const Contact = () => {

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={styles.containerContact} id='contact' >
      <h2>Get in Touch!</h2>
      <p>I'm currently looking for new opportunities, my inbox is always open, so if you want lo let some question or just say hi, I'll do my best to get back to you as soon as possible!</p>
      <div className={styles.subContainer}>
        <div className={styles.info}>
          <div>
            <Phone /> <span>+56 957406030</span>
          </div>
          <div>
            <Email /> <a href="mailto:luis9laguna@gmail.com">luis9laguna@gmail.com</a>
          </div>
          <div>
            <Web /> <a className={styles.linkedIn} href="https://www.linkedin.com/in/luis9laguna">LinkedIn</a>
          </div>
        </div>
         <Form/>
      </div>
    </div>
  );
};

export default Contact;
