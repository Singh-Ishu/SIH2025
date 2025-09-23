import Card from "../../../../shared/Card/Card";
import styles from "./ProcessStep.module.css";

function ProcessStep({ number, title, description }) {
    return (
        <Card className={styles.processStep} hover={false}>
            <div className={styles.stepNumber}>{number}</div>
            <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{title}</h4>
                <p className={styles.stepText}>{description}</p>
            </div>
        </Card>
    );
}

export default ProcessStep;