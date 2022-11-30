import styles from './Appoint1.module.css';
import NavbarG from '../component1/NavbarG';
import Button from '../components/Button';

const Appoint1 = () =>{
    return(
        <div>
            <div>
                <NavbarG />
            </div>
            <div className={styles.container}>
            <center><h1>Book Appointment</h1></center>
               <div className={styles.right}>
                    <div className={styles.report}>
                        <div  className={styles.logo}>
                            <img src='/images/schedlogo.png'></img>
                            <p>Book Appointment Form</p>
                        </div>
                    </div>
                    <ul className={styles.board}>
                        <div className={styles.spread}>
                            <div className={styles.left}>
                                <h3>SCHEDULE:</h3>
                                <p>Date: December XX, 2022</p>
                                <p>Time: 10:00 AM - 10:30 AM</p>
                                <hr></hr>
                                <h3>DOCTOR:</h3>
                                <p>Name: Rosemae Rosete, RM, LPT</p>
                                <p>Specialization: Campus Nurse</p>
                                <p>Contact: 09123456789</p>
                                <p>Email: rosemae_rosete@gsfe.tupcavite.edu.ph</p>
                            </div>
                            <div className={styles.right1}>
                                <ul>
                                    <li>
                                        <div>
                                            <h1>Student Personal Information</h1>
                                        <div className={styles.right11}>
                                            <input type='text' placeholder='Name'></input>
                                        </div>
                                        <div>
                                            <input type='text' placeholder='ID Number'></input>
                                        </div>
                                        <div className={styles.gen}>
                                            <input type="checkbox" id="f" name="Female" value="hi"/>
                                            <label for="f">Female</label>
                                            <input type="checkbox" id="m" name="Male" value="hi"/>
                                            <label for="f">Male</label>
                                            <input type="checkbox" id="o" name="No" value="hi"/>
                                            <label for="o">Prefer not to say</label>
                                        </div>
                                        <div>
                                        <input type='text' placeholder='Email:'></input>
                                        </div>
                                        <div>
                                        <input type='text' placeholder='Contact Number:'></input>
                                        </div>
                                        <Button variant='primary'>Submit</Button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Appoint1;