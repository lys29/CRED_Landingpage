import styles from './Talk.module.css';
import NavbarG from '../component1/NavbarG.jsx';
import Button from '../components/Button.jsx';

const Talk = () => {
    return(
        <div>
            <div>
                <NavbarG />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                <h3>New Message:</h3>
                <ul>
                    <li>
                        <div className={styles.top}>
                            <div>
                                <p>To:</p>
                                <hr></hr>
                            </div>
                            <input type='text'></input>
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <p>Subject:</p>
                            </div>
                            <textarea id="text" name="text" rows="10" cols="50"></textarea>
                            <div className={styles.last}>
                                <div className={styles.second}>
                                <Button variant='secondary'>Send</Button>
                                </div>
                                <Button variant='primary'><img src='/images/talkbar.png'></img></Button>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Talk;