import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src = '/images/logo.png'/>
                <h2>For more information.</h2>
                <h2>Contact us here:</h2>
                <p>+63 9912345678</p>
                <p>sa_ngipin.mo@gmail.com</p>
            </div>
            <div>
                <h2>Support</h2>
                <h6>Privacy Policy</h6>
                <h6>Cookie Policy</h6>
                <h6> Purchasing Policy</h6>
                <h6>Terms and Conditions</h6>
            </div>
            <div>
                <h2>Social Media</h2>
                <h6>https://www.instagram.com/sa_ngipin.mo</h6>
                <h6>https://www.facebook.com/sa_ngipin.mo</h6>
                <h6>https://www.twitter.com/sa_ngipin.mo</h6>
            </div>
        </div>
    )
}

export default Footer;