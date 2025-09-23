import Card from "../../../../shared/Card/Card";
import styles from "./FAQCard.module.css";

function FAQCard({ question, answer }) {
    return (
        <Card className={styles.faqCard}>
            <h4 className={styles.question}>{question}</h4>
            <p className={styles.answer}>{answer}</p>
        </Card>
    );
}

export default FAQCard;