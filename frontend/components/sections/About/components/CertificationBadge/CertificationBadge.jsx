import Card from "../../../../shared/Card/Card";
import styles from "./CertificationBadge.module.css";

function CertificationBadge({ badge, title, description }) {
    return (
        <Card className={styles.certCard}>
            <div className={styles.badge}>{badge}</div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </Card>
    );
}

export default CertificationBadge;