import styles from './Careers.module.css';
import NavbarB from './NavbarB.jsx';
import Button from '../components/Button.jsx';

const Careers = () => {
    return (
        <div>
            <div>
                <NavbarB />
            </div>
            <div className={styles.container}>
                <div>
                    <h1>Be Part of Our Team!</h1>
                    <img src='/images/Career.png'/>
                </div>
                <div className={styles.con}>
                    <h5>Submit Your Resume Now!</h5>
                    <div>
                        <input type="Name" placeholder="Full Name:"></input>
                    </div>
                    <div>
                        <input type="Add" placeholder="Phone Number:"></input>
                        <input type="Add" placeholder="Email Address:"></input>
                    </div>
                    <div>
                        <input type="Address" placeholder="Address:"></input>
                    </div>
                        <p>Submit your resume here:</p>
                    <div className={styles.last}>
                        <Button variant="primary">Choose File</Button>
                        <p>No file chosen</p>
                    </div>
                    <div>
                        <img src='/images/logo.png'></img>
                    </div>
                    <div className={styles.last1}>
                        <p>Language </p>
                        <p>Terms</p>
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;