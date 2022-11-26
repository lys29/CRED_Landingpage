import styles from './Title.module.css';
import Button from './Button.jsx';
import Navbar from './Navbar.jsx';

const Title = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div>
                    <h5>Smile, it lets your teeth breathe.</h5>
                    <h1>A better life starts with a beautiful <span>smile.</span></h1>
                    <p>Our professional doctors will take care of your dental health. Choose your desired time and we'll help out.</p>
                    <div className={styles.con1}>
                        <a href='/Let'><div className={styles.b1}><Button variant='secondary'>Let's Talk</Button></div></a>
                        <a href='/Newa'><div className={styles.b2}><Button variant='primary'>Make Account</Button></div></a>
                    </div>
                </div>
                <div>
                    <img src = "/images/title.png"/>
                </div>
            </div>
        </div>
    )
}

export default Title;