import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Navigation.module.css";

function Navigation() {
    const navRef = useRef(null);
    const [activeSection, setActiveSection] = useState("hero");

    const navItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "technology", label: "Technology" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });
        }, navRef);

        // Intersection Observer for active section detection
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe all sections
        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            ctx.revert();
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${styles.navigation} glass`} ref={navRef}>
            <div className={styles.logo}>
                <span onClick={() => scrollToSection("hero")}>WIPER</span>
            </div>
            <ul className={styles.navList}>
                {navItems.map((item) => (
                    <li key={item.id} className={styles.navItem}>
                        <button
                            className={`${styles.navButton} ${
                                activeSection === item.id ? styles.active : ""
                            }`}
                            onClick={() => scrollToSection(item.id)}
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