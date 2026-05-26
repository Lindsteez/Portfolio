import styles from './Contactpage.module.css';

export default function ContactPage() {
    return (
        <div className={styles.contactContainer}>
            <h1>Contact Me</h1>
            <p className={styles.subtitle}>
                Have a project in mind or want to collaborate? Let's connect!
            </p>

            <div className={styles.contactInfo}>
                <div className={styles.infoBox}>
                    <h3>📧 Email</h3>
                    <p><a href="mailto:lindgren.axel@hotmail.com">lindgren.axel@hotmail.com</a></p>
                </div>
                <div className={styles.infoBox}>
                    <h3>💼 LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/in/axel-lindgren-a26264244/" target="_blank" rel="noopener noreferrer">Visit Profile</a></p>
                </div>
                <div className={styles.infoBox}>
                    <h3>💻 GitHub</h3>
                    <p><a href="https://github.com/Lindsteez" target="_blank" rel="noopener noreferrer">View Projects</a></p>
                </div>
            </div>
        </div>
    )
}