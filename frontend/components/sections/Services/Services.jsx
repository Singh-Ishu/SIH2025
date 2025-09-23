import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Services.module.css";

function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.${styles.methodCard}`, {
                opacity: 0,
                y: 60,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.${styles.methodsGrid}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(`.${styles.pricingCard}`, {
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: `.${styles.pricingGrid}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" className={`${styles.services} section`} ref={sectionRef}>
            <div className="container">
                <div className={styles.servicesHeader}>
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <p className={styles.sectionSubtitle}>
                        Comprehensive data destruction solutions for every need
                    </p>
                </div>

                <div className={styles.methodsSection}>
                    <h3 className={styles.subsectionTitle}>Data Wiping Methods</h3>
                    <div className={styles.methodsGrid}>
                        <div className={`${styles.methodCard} glass`}>
                            <div className={styles.methodHeader}>
                                <h4 className={styles.methodTitle}>Clean</h4>
                                <div className={styles.methodBadge}>Standard</div>
                            </div>
                            <p className={styles.methodDescription}>
                                Standard secure deletion using DoD 5220.22-M protocols. Perfect for 
                                routine data cleanup and file removal with 3-pass overwriting.
                            </p>
                            <ul className={styles.methodFeatures}>
                                <li>3-pass overwrite algorithm</li>
                                <li>Suitable for personal use</li>
                                <li>Fast processing time</li>
                                <li>Basic compliance standards</li>
                            </ul>
                        </div>
                        
                        <div className={`${styles.methodCard} glass`}>
                            <div className={styles.methodHeader}>
                                <h4 className={styles.methodTitle}>Purge</h4>
                                <div className={styles.methodBadge}>Advanced</div>
                            </div>
                            <p className={styles.methodDescription}>
                                Advanced multi-pass wiping with cryptographic randomization. 
                                Ideal for sensitive corporate data requiring higher security levels.
                            </p>
                            <ul className={styles.methodFeatures}>
                                <li>7-pass overwrite with random data</li>
                                <li>Cryptographic verification</li>
                                <li>Enterprise-grade security</li>
                                <li>GDPR & HIPAA compliant</li>
                            </ul>
                        </div>
                        
                        <div className={`${styles.methodCard} glass`}>
                            <div className={styles.methodHeader}>
                                <h4 className={styles.methodTitle}>Exterminate</h4>
                                <div className={styles.methodBadge}>Military</div>
                            </div>
                            <p className={styles.methodDescription}>
                                Military-grade destruction with 35-pass Gutmann method plus 
                                hardware-level secure erase commands. Maximum security guaranteed.
                            </p>
                            <ul className={styles.methodFeatures}>
                                <li>35-pass Gutmann algorithm</li>
                                <li>Hardware secure erase</li>
                                <li>Military & government grade</li>
                                <li>Forensically unrecoverable</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.pricingSection}>
                    <h3 className={styles.subsectionTitle}>Service Packages</h3>
                    <div className={styles.pricingGrid}>
                        <div className={`${styles.pricingCard} glass`}>
                            <div className={styles.pricingHeader}>
                                <h4 className={styles.pricingTitle}>Individual</h4>
                                <div className={styles.pricingPrice}>₹999</div>
                                <div className={styles.pricingPeriod}>per device</div>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>Single device wiping</li>
                                <li>Clean or Purge methods</li>
                                <li>Basic certificate</li>
                                <li>Email support</li>
                            </ul>
                            <button className={styles.pricingButton}>Get Started</button>
                        </div>
                        
                        <div className={`${styles.pricingCard} ${styles.featured} glass-strong`}>
                            <div className={styles.featuredBadge}>Most Popular</div>
                            <div className={styles.pricingHeader}>
                                <h4 className={styles.pricingTitle}>Business</h4>
                                <div className={styles.pricingPrice}>₹49,999</div>
                                <div className={styles.pricingPeriod}>per month</div>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>Up to 100 devices</li>
                                <li>All wiping methods</li>
                                <li>Compliance reporting</li>
                                <li>Priority support</li>
                            </ul>
                            <button className={`${styles.pricingButton} ${styles.featuredButton}`}>
                                Choose Business
                            </button>
                        </div>
                        
                        <div className={`${styles.pricingCard} glass`}>
                            <div className={styles.pricingHeader}>
                                <h4 className={styles.pricingTitle}>Enterprise</h4>
                                <div className={styles.pricingPrice}>Custom</div>
                                <div className={styles.pricingPeriod}>contact us</div>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>Unlimited devices</li>
                                <li>Custom solutions</li>
                                <li>Dedicated support</li>
                                <li>On-site services</li>
                            </ul>
                            <button className={styles.pricingButton}>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;