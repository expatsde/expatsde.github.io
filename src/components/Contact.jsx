import React, { useState } from 'react';
import styled from 'styled-components';
import Button from "./Button";
import emailjs from "@emailjs/browser";

const Container = styled.div`
 max-width: 600px;
 margin: 0 auto;
 padding: 2rem;
`;

const FormStyle = styled.form`
 width: 100%;
 max-width: 100%;
 .form-group {
    width: 100%;
    margin-bottom: 2rem;
 }
 label {
    font-size: 1.8rem;
 }
 input,
 textarea {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.8rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: 1px solid white;
    border-radius: 8px;
    margin-top: 1rem;
 }
 textarea {
    min-height: 200px;
    resize: vertical;
 }
 button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
 }
`;

export default function ContactForm() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const [showSuccessAlert, setShowSuccessAlert] = useState(false);

 const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
    .send(
      "service_jegiket",
      "template_vyx8zcy",
      templateParams,
      "Lp_SaMa94FhyIMye8"
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSuccessAlert(true);
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log('FAILED...', err);
        setShowSuccessAlert(false);
      });
 };

 return (
    <Container>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <Button type="submit" white>
          Send
        </Button>
      </FormStyle>
      {showSuccessAlert && (
        <showSuccessAlert>
         📬 Got your query! We'll be in touch soon.
        </showSuccessAlert>
      )}
    </Container>
 );
}
