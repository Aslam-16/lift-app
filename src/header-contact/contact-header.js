import emailIcon from "../assets/images/email-icon.png";
import phoneIcon from "../assets/images/phone-icon.png";
import "./contact-header.css";

const HeaderContact = () => (
    <section className="header-contact-grid">
        <div className="address-section">
            <p>67e ahdf dfdf, Chidambaram 123123</p>
        </div>
        <div className="contact-section d-flex">
            <a href="mailto:jayavel2000eee@gmail.com"  className="email-section d-flex">
                <img alt="email-icon" className="email-icon" src={emailIcon}/>
                <p>jayavel2000eee@gmail.com</p>
            </a>
            <a href="tel:+91 9791949933" className="phone-number-section d-flex">
                <img alt="phone-icon" className="phone-icon" src={phoneIcon} />
                <p>+91 9791949933</p>
            </a>
        </div>
    </section>
);

export default HeaderContact;
