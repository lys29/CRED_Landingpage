import styles from './Login.module.css';
import NavbarG from './NavbarG.jsx';
import Button from '../components/Button.jsx';

const Login = () => {
    return (
        <div>
            <div>
                <NavbarG />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <h2>Sign In</h2>
                    <div>
                        <input type="Name" placeholder="Email or Username"></input>
                    </div>
                    <div>
                        <input type="Pass" placeholder="Password"></input>
                    </div>
                    <a href=''><Button variant='primary'>Log In</Button></a>
                    <p>Forgot Password?</p>
                    <h4>Create New Account</h4>
                </div>
            </div>
        </div>
    )
}

export default Login;