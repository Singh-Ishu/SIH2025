import styles from "./SectionHeader.module.css";

function SectionHeader({ 
    title, 
    subtitle, 
    description,
    centered = true,
    className = ""
}) {
    const headerClasses = [
        styles.sectionHeader,
        centered && styles.centered,
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={headerClasses}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
}

export default SectionHeader;