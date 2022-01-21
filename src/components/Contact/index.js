import React, { useState } from "react";

function ContactForm() {
   // const { name, email, message } = formState;
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    
    // will need to add onclick handler

    //jsx
    return (
        <section className="container my-2" id="contact">
            <div>
                <h1>Get In Touch</h1>
            </div>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={formState.name}></input>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={formState.email}></input>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="6" defaultValue={formState.message}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );

}

export default ContactForm;