import React, { useState } from "react";
import { validateEmail } from "../../assets/utils/helpers";

function ContactForm() {
   // const { name, email, message } = formState;
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState({ [e.target]: e.target.value });
        console.log(formState);
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    };

    //jsx
    return (
        <section className="container my-2" id="contact">
            <div className="center my-2">
                <h1>Get In Touch</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={formState.name} onBlur={handleChange}></input>
                </div>
                <div className="my-2">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={formState.email} onBlur={handleChange}></input>
                </div>
                <div className="my-2">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="6" defaultValue={formState.message} onBlur={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );

}

export default ContactForm;