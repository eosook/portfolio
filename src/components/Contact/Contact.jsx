import ContactForm from '../ContactForm/ContactForm'
import './Contact.scss'

export default function Contact(){
    return (
        <div className="contact">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__body">want to talk?</p>
            <ContactForm />
        </div>
    )
}