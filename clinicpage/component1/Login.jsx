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
                <ul>
                    <li>    
                        <div className={styles.con}>
                            <h2>Sign In</h2>
                            <div>
                                <input type="Name" placeholder="Email or Username"></input>
                            </div>
                            <div>
                                <input type="Pass" placeholder="Password"></input>
                            </div>
                            <div className={styles.mid}><a href='/Welcome'><Button variant='primary'>Log In</Button></a></div>
                            <p>Forgot Password?</p>
                            <div className={styles.end}>
                                <p>Don't have an account?</p>
                                <div className={styles.last}><a href='/Newa'><Button variant="primary">Sign Up Here!</Button></a></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Login;