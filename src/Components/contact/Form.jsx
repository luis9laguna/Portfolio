import styles from './Form.module.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import useInput from '../../hooks/useInput';

const Form = () => {

    const form = useRef();

    //REGEX FOR EMAIL
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    //NAME
     const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim().length >= 3)

    //SUBJECT
    const {
        value: enteredSubject,
        isValid: enteredSubjectIsValid,
        hasError: subjectInputHasError,
        valueChangeHandler: subjectChangedHandler,
        inputBlurHandler: subjectBlurHandler,
        reset: resetSubjectInput
    } = useInput(value => value.trim().length >= 3)

    //EMAIL
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => regexEmail.test(value));

    //MESSAGE
    const {
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: messageInputHasError,
        valueChangeHandler: messageChangedHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessageInput
    } = useInput(value => value.trim().length >= 5)

    //DATA NEEDED
    const service_id = "service_lvchfy5"
    const template_id = "template_kb9zlpi"
    const user_id = "4hnfZJ4-v2g5fgifS"


    //FORMVALID?
    let formIsValid = false;
    if (
        enteredNameIsValid &&
        enteredSubjectIsValid &&
        enteredEmailIsValid &&
        enteredMessageIsValid
    ) { formIsValid = true }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(service_id, template_id, form.current, user_id)
        .then(() => {
            Swal.fire(
                'Good job!','Your email has been send correctly', 'success'
            )
        }, () => {
            Swal.fire({
                icon: 'error', title: 'Oops...', text: 'Something went wrong!'
            })
        });

        resetNameInput()
        resetSubjectInput()
        resetEmailInput()
        resetMessageInput()
    };


    return (
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <input
                placeholder="Name*"
                type="text"
                id="name"
                name="user_name"
                value={enteredName}
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                className={nameInputHasError ? styles.invalidInput : ''}
            />
            {nameInputHasError && <p className={styles.invalidText}>Name need to has at least 3 characters.</p>}

            <input 
                placeholder="Subject" 
                type="text"
                id="subject" 
                name="user_subject"
                value={enteredSubject}
                onChange={subjectChangedHandler}
                onBlur={subjectBlurHandler}
                className={nameInputHasError ? styles.invalidInput : ''}
                />
            {subjectInputHasError && <p className={styles.invalidText}>Subject need to has at least 3 characters</p>}

            <input
                placeholder="Email*"
                type="email"
                id="email"
                name="user_email"
                value={enteredEmail}
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                className={emailInputHasError ? styles.invalidInput : ''}
            />
            {emailInputHasError && <p className={styles.invalidText}>It must be a valid email.</p>}

            <textarea 
                placeholder="Message*" 
                type="text"
                id="message" 
                name="message"
                value={enteredMessage}
                onChange={messageChangedHandler}
                onBlur={messageBlurHandler}
                className={messageInputHasError ? styles.invalidInput : ''}
                
                />
            {messageInputHasError && <p className={styles.invalidText}>The message must be at least 5 characters long</p>}

            <button disabled={!formIsValid}>Say hello!</button>
        </form>
    )
}

export default Form