import Card from "../../../../shared/Card/Card";
import styles from "./TimelineItem.module.css";

function TimelineItem({ title, description }) {
    return (
        <div className={styles.timelineItem}>
            <div className={styles.marker}></div>
            <Card className={styles.content} hover={false}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.text}>{description}</p>
            </Card>
        </div>
    );
}

export default TimelineItem;