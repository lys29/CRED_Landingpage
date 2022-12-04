import styles from './Navbar1G.module.css';
import Button from './Button.jsx';

const Navbar1G = () => {
    return (
        <div className={styles.container}>
            <ul>
                <a href='/Home1'><div className={styles.main}><Button variant='secondary'><img src='/images/logo.png'/></Button></div></a>
                <a href='/Home1'><Button variant='primary'>Home</Button></a>
                <a href='/Cli1'><Button variant='primary'>Clinic</Button></a>
                <a href='/Ser1'><Button variant='primary'>Services</Button></a>
                <a href='/Blo1'><Button variant='primary'>Blog</Button></a>
                <a href='/Car1'><Button variant='primary'>Careers</Button></a>
                <div className={styles.dropdown}>
                    <div className={styles.drop}>
                        <span>Welcome, User!</span>
                        <div className={styles.content}>
                            <a href='/Home'><Button variant='primary'>Log out</Button></a>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar1G;