import "./ContactForm.scss";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const form = useRef();
  const [messageSent, SetMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w8fo1mg", "template_9jhffcb", form.current, {
        publicKey: "Aqi_cQd6mCDFmPfAd",
      })
      .then(
        () => {
          SetMessageSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input className="contact-form__input" type="text" placeholder="Name" name="sender_name" required></input>
      <input className="contact-form__input" type="text" placeholder="Email" name="sender_email" required></input>
      <textarea
        className="contact-form__input contact-form__textarea"
        placeholder="Message"
        name="message"
        required
      ></textarea>
      <button className="contact-form__button" type="submit">
        SUBMIT
      </button>
      <h3 className={messageSent ? "contact-form__success" : "contact-form__false"}>Your message has been sent!</h3>
    </form>
  );
}