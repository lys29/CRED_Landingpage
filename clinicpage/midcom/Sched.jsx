import styles from './Sched.module.css';
import NavbarG from '../component1/NavbarG.jsx';
import Button from '../components/Button.jsx';

const Sched = () => {
    return (
        <div>
            <div>
                <NavbarG />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <h1>Patient Information</h1>
                    <div>
                        <div className={styles.spread}>
                            <input type='Name' placeholder="First Name"></input>
                            <input type='Name' placeholder="Last Name"></input>
                        </div>
                        <div>
                            <input type='bir' placeholder='Age'></input>
                        </div>
                        <div>
                            <input type='bir' placeholder="Birthday    00/00/0000"></input>
                        </div>
                        <div>
                            <input type='mail' placeholder="Email"></input>
                        </div>
                        <div>
                            <input type='mail' placeholder="Password"></input>
                        </div>
                        <div className={styles.end}>
                            <p>Language</p>
                        </div>
                    </div>
                </div>
                <div className={styles.coni}>
                    <img src='/images/Schedcal.png'/>
                    <div className={styles.time}>
                        <img src='/images/time.png'/>
                        <Button variant='secondary'>Submit</Button>
                    </div>
                    <div className={styles.right}>
                        <p>Terms</p>
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sched;