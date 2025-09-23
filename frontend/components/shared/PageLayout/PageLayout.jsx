import styles from "./PageLayout.module.css";

function PageLayout({ children, title, subtitle }) {
    return (
        <div className={styles.pageLayout}>
            <div className={styles.radialBackground}></div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageLayout;