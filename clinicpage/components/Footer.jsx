import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src = '/images/logo.png'/>
                <h2>For more information.</h2>
                <h2>Contact us here:</h2>
                <div className={styles.logo}><img src='/images/user.png'/><p>+63 9912345678</p></div>
                <div className={styles.logo}><img src='/images/msg.png'></img><p>tupcavitedentist@gmail.com</p></div>
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
                <div className={styles.logo1}><img src='/images/instagram.png'/><h6>https://www.instagram.com/tupdentist.cavite</h6></div>
                <div className={styles.logo1}><img src='/images/fb.png'/><h6>https://www.facebook.com/tupdentist.cavite</h6></div>
                <div className={styles.logo1}><img src='/images/tweet.png'/><h6>https://www.twitter.com/tupdentist.cavite</h6></div>
            </div>
        </div>
    )
}

export default Footer;