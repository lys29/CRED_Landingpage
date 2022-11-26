import styles from './NavbarB.module.css';
import Button from '../components/Button.jsx';

const NavbarB = () => {
    return (
        <div className={styles.container}>
            <ul>
                <a href='/Home'><div className={styles.main}><Button variant='secondary'><img src='/images/logo.png'/></Button></div></a>
                <a href='/Home'><Button variant='primary'>Home</Button></a>
                <a href='/Cli'><Button variant='primary'>Clinic</Button></a>
                <a href='/Ser'><Button variant='primary'>Services</Button></a>
                <a href='/Blo'><Button variant='primary'>Blog</Button></a>
                <a href='/Car'><Button variant='primary'>Careers</Button></a>
                <a href='/Log'><div className={styles.prior}><Button variant='secondary'>Log In</Button></div></a>
            </ul>
        </div>
    )
}

export default NavbarB;