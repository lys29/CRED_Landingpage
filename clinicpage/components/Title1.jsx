import styles from './Title1.module.css';
import Button from './Button.jsx';

const Title1 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h5>We Care for your Smile</h5>
                    <h1>Our Commitment to Dental health is to set to last forever.</h1>
                    <p>Our professional doctors will take care of your dental health. Set the best time and we are ready to help you.</p>
                    <div className={styles.con1}>
                        <a href='/Let1'><div className={styles.b1}><Button variant='secondary'>Let's Talk</Button></div></a>
                        <a href='/Newa1'><div className={styles.b2}><Button variant='primary'>Make Account</Button></div></a>
                    </div>
                </div>
                <div>
                    <img src = "/images/title.png"/>
                </div>
            </div>
        </div>
    )
}

export default Title1;