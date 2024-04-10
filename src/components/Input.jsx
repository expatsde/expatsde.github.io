import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useParams } from "react-router-dom";
import emailjs from '@emailjs/browser';

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
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.8rem 3rem;
    cursor: pointer;
  }
`;

const SuccessAlert = styled.div`
  background-color: green;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;



export default function InputForm() {
 const { title } = useParams();
 const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    title: title,
 });
 const [showSuccessAlert, setShowSuccessAlert] = useState(false);
 const form = useRef();

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form data before submission:', formData); // Log form data to check if title is included
  emailjs
     .sendForm('service_jegiket', 'template_sqoq94t', form.current, 'Lp_SaMa94FhyIMye8')
     .then(
       () => {
         console.log('SUCCESS!');
         setShowSuccessAlert(true);
         setTimeout(() => {
           setFormData({
             firstName: "",
             lastName: "",
             email: "",
             phoneNumber: "",
             nationality: "",
             title: "", // Reset title field
           });
           setShowSuccessAlert(false); // Hide the success alert
         }, 5000);
       },
       (error) => {
         console.log('FAILED...', error.text);
       },
     );
 };

 return (
    <Container>
      <FormStyle ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">
            Phone Number
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="nationality">
            Nationality
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </label>
        </div>
        <Button type="submit" white>
          Submit
        </Button>
      </FormStyle>
      {showSuccessAlert && (
        <SuccessAlert>Form submitted successfully!</SuccessAlert>
      )}
    </Container>
 );
}