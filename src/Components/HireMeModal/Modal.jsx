import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Modal.css";


export const Modal = ({ closeModal }) => {
    const { REACT_APP_EMAIL_JS_PUBLIC_KEY, REACT_APP_EMAIL_JS_SERVICE_ID, REACT_APP_EMAIL_JS_TEMPLATE_ID } = process.env;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(REACT_APP_EMAIL_JS_SERVICE_ID, REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, REACT_APP_EMAIL_JS_PUBLIC_KEY)
          .then((result) => {
              alert('Your email has been successfully sent. STATUS: ' + result.text);
          }, (error) => {
              alert('Your email hasn`t been sent. ERROR STATUS: ' + error.text);
          });
    };
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal();
      }}
    >
      <div className="modal">
        <div className="modal-title-container">
          <h2> Hire me </h2>
        </div>
        <div className="modal-content">
        <form ref={form} onSubmit={sendEmail} className="form-container">
            <input placeholder="Username" type="text" name="username" required/>
            <input placeholder="Email" type="email" name="user_email" required/>
            <input placeholder="Company Name" type="text" name="company_name" required/>
            <textarea placeholder="Message..." name="message" required/>
            <div className="ctrl_buttons">
              <button type="submit" value="Submit"> Submit </button>
              <button type="button" value="Cancel" onClick={closeModal}> Cancel </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};