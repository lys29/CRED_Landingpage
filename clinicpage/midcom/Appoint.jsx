import styles from './Appoint.module.css';
import NavbarG from '../component1/NavbarG.jsx';
import Button from '../components/Button.jsx';

const Appoint = () => {
    return (
        <div>
            <div>
                <NavbarG />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <ul>
                        <li>
                            <div className={styles.top}>
                                <div>
                                    <h3>Personal Information:</h3>
                                </div>
                                <div>
                                    <input type="Name" placeholder="First Name"></input>
                                    <input type="Name1" placeholder="Last Name"></input>
                                </div>
                                <div>
                                    <input type="MPass" placeholder="Email"></input>
                                </div>
                                <div className={styles.gen}>
                                    <h5>Gender:</h5>
                                    <input type="checkbox" id="f" name="Female" value="hi"/>
                                    <label for="f">Female</label>
                                    <input type="checkbox" id="m" name="Male" value="hi"/>
                                    <label for="f">Male</label>
                                    <input type="checkbox" id="o" name="No" value="hi"/>
                                    <label for="o">Prefer not to say</label>
                                </div>
                                <div>
                                    <input type="Add" placeholder="Address:"></input>
                                </div>
                                <div>
                                    <input type="Cont" placeholder="Contact(required):"></input>
                                </div>
                                <div>
                                    <input type="Day" placeholder="Desired Date of Appointment      00/00/0000"></input>
                                </div>
                                <div>
                                    <input type="Day" placeholder="Desired Time of Appointment           00:00"></input>
                                </div>
                                <div className={styles.button}>
                                    <div className={styles.second}>
                                        <Button variant='secondary'>Submit</Button>
                                    </div>
                                </div>
                                <div className={styles.end}>
                                    <p>Language</p>
                                    <p>Terms</p>
                                    <p>Help</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Appoint;