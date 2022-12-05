import styles from './Title.module.css';

const Title = () => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h5>We Care for your Smile</h5>
                    <h1>Our Commitment to Dental health is to set to last forever.</h1>
                    <p>Our professional doctors will take care of your dental health. Set the best time and we are ready to help you.</p>
                    <div className={styles.con1}>
                        <a href='/Let'><div className={styles.b1}><button>Let's Talk</button></div></a>
                        <a href='/Newa'><div className={styles.b2}><button>Make Account</button></div></a>
                    </div>
                </div>
                <div>
                    <img src = "/images/title.png"/>
                </div>
            </div>
        </div>
    )
}

export default Title;