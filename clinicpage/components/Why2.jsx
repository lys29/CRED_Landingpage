import styles from './Why2.module.css';
import Swal from "sweetalert2";

const Why2 = () => {
    const log = () => {
        Swal.fire({
            icon: "information",
            title:"LOG IN FIRST",
            text: "To access the following, you have to sign in first",
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Success')
            } else if (result.isDenied) {
                Swal.fire('Failed')
            }
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <a href='/Newa'><button onClick={log}><img src='/images/Appointment.png'/></button></a>
                <center><h4>Book <br></br>Appointment</h4></center>
            </div>
            <div>
                <a href='/Newa'><button onClick={log}><img src='/images/Calendar.png'/></button></a>
                <center><h4>Calendar</h4></center>
            </div>
            <div className={styles.con}>
                <a href='/Newa'><button onClick={log}><img src='/images/Schedule.png'/></button></a>
                <center><h4>Appointment <br></br>Status</h4></center>
            </div>
            <div>
                <a href='/Newa'><button onClick={log}><img src='/images/Contactus.png'/></button></a>
                <center><h4>Contact Us</h4></center>
            </div>
        </div>
    )
}

export default Why2;