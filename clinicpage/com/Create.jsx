import styles from './Create.module.css';

const Create = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <ul>
                        <li>
                            <div className={styles.top}>
                                <div>
                                    <h3>Create your account</h3>
                                </div>
                                <div>
                                    <input type="Name" placeholder="First Name"></input>
                                    <input type="Name1" placeholder="Last Name"></input>
                                </div>
                                <div>
                                    <input type="MPass" placeholder="Email"></input>
                                </div>
                                <div>
                                    <input type="MPass" placeholder="Password"></input>
                                </div>
                                <div>
                                    <input type="MPass" placeholder="Confirm Pasword"></input>
                                </div>
                                <div>
                                    <input type="Day" placeholder="Birthday   00/00/0000"></input>
                                </div>
                                <div className={styles.button}>
                                    <div className={styles.first}>
                                        <a href='/Log'><button>Sign in instead</button></a>
                                    </div>
                                    <div className={styles.second}>
                                        <a href='/Log'><button>Submit</button></a>
                                    </div>
                                </div>
                                <div className={styles.end}>
                                    <p>Language</p>
                                    <p>Terms</p>
                                    <p>Help</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Create;