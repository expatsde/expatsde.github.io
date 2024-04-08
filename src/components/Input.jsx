import React, { useState } from 'react';
import styled from 'styled-components';
import Button from "./Button";


const Container = styled.div`
 max-width: 600px; // Adjust this value as needed
 margin: 0 auto;
 padding: 2rem;
`;

const FormStyle = styled.form`
 width: 100%;
 max-width: 100%; // Ensures the form doesn't exceed the container's max-width
 .form-group {
    width: 100%;
    margin-bottom: 2rem;
 }
 label {
    font-size: 1.8rem; // Adjusted based on your needs
 }
 input,
 textarea {
    width: 100%;
    font-size: 1.5rem; // Reduced font size
    padding: 0.8rem; // Reduced padding
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: 1px solid white;
    border-radius: 8px;
    margin-top: 1rem;
 }
 textarea {
    min-height: 200px; // Reduced min-height
    resize: vertical;
 }
 button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 1.5rem; // Adjusted based on your needs
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.8rem 3rem; // Adjusted padding
    cursor: pointer;
 }
`;

export default function InputForm() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 return (
    <Container>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="email">
            First Name
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Last Name
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email ID
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
             Phone Number
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
             Nationality
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <Button white>
            Submit
          </Button>
      </FormStyle>
    </Container>
 );
}
