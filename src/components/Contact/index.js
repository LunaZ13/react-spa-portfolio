import React, { useState } from "react";

function ContactForm() {
    const { name, email, message } = formState;
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    // will need to add onclick handler

    //jsx
    return (
        <section>
            <div>
                <h1>Get In Touch</h1>
            </div>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name}></input>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email}></input>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="6" defaultValue={message}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );

}

export default ContactForm;