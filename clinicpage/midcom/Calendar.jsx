import styles from './Calendar.module.css';
import NavbarB from '../component1/NavbarB.jsx';

const Calendar = () =>{
    return (
        <div>
            <div>
                <NavbarB />
            </div>
            <div className={styles.container}>
                <img src='/images/cal.png'/>
            </div>
        </div>
    )
}

export default Calendar;