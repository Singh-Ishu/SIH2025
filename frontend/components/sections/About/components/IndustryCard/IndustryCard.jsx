import Card from "../../../../shared/Card/Card";
import styles from "./IndustryCard.module.css";

function IndustryCard({ icon, title, description, stats }) {
    return (
        <Card className={styles.industryCard}>
            <div className={styles.icon}>{icon}</div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <div className={styles.stats}>
                {stats.map((stat, index) => (
                    <span 
                        key={index} 
                        className={index === stats.length - 1 ? styles.highlight : ""}
                    >
                        {stat}
                    </span>
                ))}
            </div>
        </Card>
    );
}

export default IndustryCard;