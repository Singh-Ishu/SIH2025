import PageLayout from "../../components/shared/PageLayout/PageLayout";
import styles from "./About.module.css";

function About() {
    return (
        <PageLayout 
            title="About WIPER" 
            subtitle="Leading the revolution in secure data destruction technology"
        >
            <div className={styles.aboutContent}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.sectionText}>
                        WIPER is dedicated to providing the most advanced and secure data wiping solutions 
                        in the industry. We understand that in today's digital age, data security isn't just 
                        about protection—it's about complete and irreversible destruction when needed.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Market Opportunity in India</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <h3 className={styles.statNumber}>₹2,400 Cr</h3>
                            <p className={styles.statLabel}>Data Security Market Size</p>
                        </div>
                        <div className={styles.statCard}>
                            <h3 className={styles.statNumber}>45%</h3>
                            <p className={styles.statLabel}>Annual Growth Rate</p>
                        </div>
                        <div className={styles.statCard}>
                            <h3 className={styles.statNumber}>500M+</h3>
                            <p className={styles.statLabel}>Devices Requiring Secure Wiping</p>
                        </div>
                        <div className={styles.statCard}>
                            <h3 className={styles.statNumber}>85%</h3>
                            <p className={styles.statLabel}>Enterprises Lacking Proper Data Destruction</p>
                        </div>
                    </div>
                    <p className={styles.sectionText}>
                        India's rapidly growing digital economy presents an unprecedented opportunity for 
                        secure data destruction services. With increasing regulatory compliance requirements 
                        and growing awareness of data privacy, the demand for professional data wiping 
                        solutions is expected to reach ₹5,000 crores by 2027.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Why Choose WIPER?</h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3 className={styles.featureTitle}>Military-Grade Security</h3>
                            <p className={styles.featureText}>
                                Our algorithms exceed DoD 5220.22-M standards, ensuring complete data obliteration.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h3 className={styles.featureTitle}>Lightning Fast</h3>
                            <p className={styles.featureText}>
                                Advanced multi-threading and hardware acceleration for rapid data destruction.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔧</div>
                            <h3 className={styles.featureTitle}>Universal Compatibility</h3>
                            <p className={styles.featureText}>
                                Works with HDDs, SSDs, NVMe drives, and all major storage technologies.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📋</div>
                            <h3 className={styles.featureTitle}>Compliance Ready</h3>
                            <p className={styles.featureText}>
                                Meets GDPR, HIPAA, SOX, and Indian IT Act requirements with detailed reporting.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Team</h2>
                    <p className={styles.sectionText}>
                        Founded by cybersecurity experts and systems engineers, WIPER combines decades 
                        of experience in data security, low-level programming, and enterprise solutions. 
                        Our team has worked with Fortune 500 companies, government agencies, and leading 
                        technology firms to develop the most robust data destruction tools available.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}

export default About;