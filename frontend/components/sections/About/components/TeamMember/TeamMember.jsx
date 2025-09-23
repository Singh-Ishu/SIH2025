import Card from "../../../../shared/Card/Card";
import styles from "./TeamMember.module.css";

function TeamMember({ avatar, name, role, bio }) {
    return (
        <Card className={styles.teamMember}>
            <div className={styles.avatar}>{avatar}</div>
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.role}>{role}</p>
            <p className={styles.bio}>{bio}</p>
        </Card>
    );
}

export default TeamMember;