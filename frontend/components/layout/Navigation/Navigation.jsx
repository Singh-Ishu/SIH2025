import styles from "./Navigation.module.css";

function Navigation({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: "landing", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "technology", label: "Technology" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <span onClick={() => setCurrentPage("landing")}>WIPER</span>
            </div>
            <ul className={styles.navList}>
                {navItems.map((item) => (
                    <li key={item.id} className={styles.navItem}>
                        <button
                            className={`${styles.navButton} ${
                                currentPage === item.id ? styles.active : ""
                            }`}
                            onClick={() => setCurrentPage(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;