import ContactForm from './ContactForm/ContactForm'
import './Contact.scss'

export default function Contact(){
    return (
        <div id="contact" className="contact">
            <h3 className="contact__title">Let's Chat!</h3>
            <h3 className="contact__email">eosookim@gmail.com</h3>
            <ContactForm />
        </div>
    )
}