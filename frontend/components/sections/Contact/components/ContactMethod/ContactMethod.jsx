import Card from "../../../../shared/Card/Card";
import styles from "./ContactMethod.module.css";

function ContactMethod({ icon, title, text, subtext }) {
    return (
        <Card className={styles.contactMethod} hover={false}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.details}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.text}>{text}</p>
                <p className={styles.subtext}>{subtext}</p>
            </div>
        </Card>
    );
}

export default ContactMethod;