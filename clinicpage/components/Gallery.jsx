import styles from './Gallery.module.css';

const Gallery = () => {
    return (
        <div>
            <div className={styles.con1}>
                <hr></hr>
                <center><h1>See Our Gallery</h1></center>
            </div>
            <div className={styles.container}>
                <hr></hr>
                <img src='/images/first.png'/>
                <div>
                    <img src='/images/second.png'/>
                    <img src='/images/fourth.png'/>
                </div>
                <div>
                    <div className={styles.third}><img src='/images/third.png'/></div>
                    <img src='/images/fifth.png'/>
                    <img src='/images/sixth.png'/>
                </div>

            </div>
        </div>
    )
}

export default Gallery;