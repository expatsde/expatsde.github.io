import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-number-input/input';


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
    margin-bottom: 1rem; // Reduced margin-bottom
 }
 label {
    font-size: 1.4rem; // Reduced font size
 }
 input,
 textarea {
    width: 100%;
    font-size: 1.2rem; // Reduced font size
    padding: 0.6rem; // Reduced padding
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: 1px solid white;
    border-radius: 8px;
    margin-top: 0.5rem; // Reduced margin-top
 }
 textarea {
    min-height: 150px; // Reduced min-height
    resize: vertical;
 }
 button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 1.2rem; // Reduced font size
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.6rem 2rem; // Reduced padding
    cursor: pointer;
 }
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
  console.log("Form data before submission:", formData);
  emailjs
    .sendForm(
      "service_jegiket",
      "template_sqoq94t",
      form.current,
      "Lp_SaMa94FhyIMye8"
    )
    .then(
      () => {
        console.log("SUCCESS!");
        setShowSuccessAlert(true);
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            nationality: "",
            title: "",
          });
          setShowSuccessAlert(false);
        }, 5000);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
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
              required
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
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
              required
              international
              withCountryCallingCode
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
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleChange}
              hidden
            />
          </label>
        </div>
        <Button type="submit" white>
          Submit
        </Button>
        </FormStyle>
      {showSuccessAlert && (
        <showSuccessAlert>
          Please hold tight and relax 😊, we'll be in touch within 24 hours! 🕒
        </showSuccessAlert>
      )}
    </Container>
 );
}
