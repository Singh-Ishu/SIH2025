import Card from "../../../../shared/Card/Card";
import styles from "./BenefitCard.module.css";

function BenefitCard({ icon, title, description, details }) {
    return (
        <Card className={styles.benefitCard}>
            <div className={styles.icon}>{icon}</div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{description}</p>
            <div className={styles.details}>
                {details.map((detail, index) => (
                    <span key={index}>{detail}</span>
                ))}
            </div>
        </Card>
    );
}

export default BenefitCard;