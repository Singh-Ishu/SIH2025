import Card from "../../../../shared/Card/Card";
import styles from "./MethodCard.module.css";

function MethodCard({ title, badge, description, features }) {
    return (
        <Card className={styles.methodCard}>
            <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.badge}>{badge}</div>
            </div>
            <p className={styles.description}>{description}</p>
            <ul className={styles.features}>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </Card>
    );
}

export default MethodCard;