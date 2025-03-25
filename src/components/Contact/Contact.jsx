import ContactForm from './ContactForm/ContactForm'
import './Contact.scss'

export default function Contact(){
    return (
        <div id="contact" className="contact">
            {/* <h2 className="contact__subtitle">Want to Chat?</h2> */}
            <h3 className="contact__title">Let's Chat!</h3>
            <h3 className="contact__email">eosookim@gmail.com</h3>
            <ContactForm />
        </div>
    )
}