import styles from "./HomePage.module.css";
import codingLoop from "../../assets/coding-loop.mp4";

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <div className={styles.hero}>
                <video autoPlay loop muted playsInline className={styles.heroVideo}>
                    <source src={codingLoop} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.overlay} />

                <div className={styles.heroContent}>
                    <p>Welcome to my portfolio!<br /> 
                    I'm a passionate developer creating amazing web experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}