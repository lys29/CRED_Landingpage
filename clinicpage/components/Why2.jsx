import styles from './Why2.module.css';
import Button from './Button.jsx';

const Why2 = () => {
    return (
        <div className={styles.container}>
            <div>
                <a href='/Ap'><Button><img src='/images/Appointment.png'/></Button></a>
                <center><h6>Appointment</h6></center>
            </div>
            <div>
                <a href='/Cal'><Button><img src='/images/Calendar.png'/></Button></a>
                <center><h6>Calendar</h6></center>
            </div>
            <div>
                <a href='/Schedule'><Button><img src='/images/Schedule.png'/></Button></a>
                <center><h6>Schedule</h6></center>
            </div>
            <div>
                <a href='/Call'><Button><img src='/images/Contactus.png'/></Button></a>
                <center><h6>Contact Us</h6></center>
            </div>
        </div>
    )
}

export default Why2;