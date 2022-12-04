import styles from './Why2.module.css';
import Button from './Button.jsx';

const Why2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <a href='/Newa'><Button><img src='/images/Appointment.png'/></Button></a>
                <center><h4>Book <br></br>Appointment</h4></center>
            </div>
            <div>
                <a href='/Newa'><Button><img src='/images/Calendar.png'/></Button></a>
                <center><h4>Calendar</h4></center>
            </div>
            <div className={styles.con}>
                <a href='/Newa'><Button><img src='/images/Schedule.png'/></Button></a>
                <center><h4>Appointment <br></br>Status</h4></center>
            </div>
            <div>
                <a href='/Newa'><Button><img src='/images/Contactus.png'/></Button></a>
                <center><h4>Contact Us</h4></center>
            </div>
        </div>
    )
}

export default Why2;