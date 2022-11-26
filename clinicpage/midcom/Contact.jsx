import styles from './Contact.module.css';
import NavbarB from '../component1/NavbarB.jsx';

const Contact = () =>{
    return(
        <div>
            <div>
                <NavbarB />
            </div>
            <div className={styles.container}>
                <ul>
                    <li>
                        <h1>OFFICE OF HEALTH SERVICES (OHS)</h1>
                        <p>The TUP-Medical and Dental Clinic provides health-related services to the University. It is a team consisting of a physician, dentists, nurses and other trained paramedical staff. They provide routine medical and dental services such as consultations, perform the necessary basic procedures, facilitate the referral of patients to the specialized institutions, conduct the annual medical and dental evaluation of students and employees and provide lectures and other health related activities in cooperation with the other units or organizations of the school.
<br></br>Provide basic medical and dental services. Promote health and wellness among the school populace and encourage health knowledge and practices.</p>
                        <div className={styles.foot}>
                            <div className={styles.log}>
                                <img src='/images/logo.png'/>
                                <h5>For more information. <br></br> Contact us here:</h5>
                                <h6>+63 9912345678</h6>
                                <h6>sa_ngipin.mo@gmail.com</h6>
                            </div>
                            <div>
                                <h4>Support</h4>
                                <p>Privacy Policy</p>
                                <p>Cookie Policy</p>
                                <p>Purchasing Policy</p>
                                <p>Terms and Conditions</p>
                            </div>
                            <div>
                                <h4>Social Media</h4>
                                <p>https://www.instagram.com/sa_ngipin.mo</p>
                                <p>https://www.facebook.com/sa_ngipin.mo</p>
                                <p>https://www.twitter.com/sa_ngipin.mo</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;