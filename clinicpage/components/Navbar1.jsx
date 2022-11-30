import styles from './Navbar1.module.css';
import Button from './Button.jsx';

const Navbar1 = () => {
    return (
        <div className={styles.container}>
            <ul>
                <a href='/Home'><div className={styles.main}><Button variant='secondary'><img src='/images/logo.png'/></Button></div></a>
                <a href='/Home'><Button variant='primary'>Home</Button></a>
                <a href='/Cli'><Button variant='primary'>Clinic</Button></a>
                <a href='/Ser'><Button variant='primary'>Services</Button></a>
                <a href='/Blo'><Button variant='primary'>Blog</Button></a>
                <a href='/Car'><Button variant='primary'>Careers</Button></a>
                <div className={styles.dropdown}>
                    <div className={styles.drop}>
                        <span>Welcome, User!</span>
                        <div className={styles.content}>
                            <a href=''><Button variant='primary'>Appointment Status</Button></a>
                            <a href='/Home'><Button variant='primary'>Log out</Button></a>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar1;