import PageLayout from "../../components/shared/PageLayout/PageLayout";
import styles from "./Services.module.css";

function Services() {
    return (
        <PageLayout 
            title="Our Services" 
            subtitle="Comprehensive data destruction solutions for every need"
        >
            <div className={styles.servicesContent}>
                <div className={styles.serviceCategory}>
                    <h2 className={styles.categoryTitle}>Data Wiping Methods</h2>
                    <div className={styles.methodsGrid}>
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>🧹 Clean</h3>
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
                        
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>🔥 Purge</h3>
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
                        
                        <div className={styles.methodCard}>
                            <h3 className={styles.methodTitle}>💀 Exterminate</h3>
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

                <div className={styles.serviceCategory}>
                    <h2 className={styles.categoryTitle}>Enterprise Solutions</h2>
                    <div className={styles.enterpriseGrid}>
                        <div className={styles.enterpriseCard}>
                            <div className={styles.enterpriseIcon}>🏢</div>
                            <h3 className={styles.enterpriseTitle}>Corporate Data Centers</h3>
                            <p className={styles.enterpriseText}>
                                Bulk processing of enterprise storage systems with automated 
                                scheduling, detailed audit trails, and compliance reporting.
                            </p>
                        </div>
                        
                        <div className={styles.enterpriseCard}>
                            <div className={styles.enterpriseIcon}>🏥</div>
                            <h3 className={styles.enterpriseTitle}>Healthcare & HIPAA</h3>
                            <p className={styles.enterpriseText}>
                                Specialized solutions for medical data destruction meeting 
                                strict HIPAA requirements with certified destruction certificates.
                            </p>
                        </div>
                        
                        <div className={styles.enterpriseCard}>
                            <div className={styles.enterpriseIcon}>🏛️</div>
                            <h3 className={styles.enterpriseTitle}>Government & Defense</h3>
                            <p className={styles.enterpriseText}>
                                Top-secret clearance level data destruction following NSA 
                                guidelines with multi-level security verification.
                            </p>
                        </div>
                        
                        <div className={styles.enterpriseCard}>
                            <div className={styles.enterpriseIcon}>🏦</div>
                            <h3 className={styles.enterpriseTitle}>Financial Services</h3>
                            <p className={styles.enterpriseText}>
                                SOX-compliant data destruction for banking and financial 
                                institutions with real-time monitoring and verification.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.serviceCategory}>
                    <h2 className={styles.categoryTitle}>Specialized Services</h2>
                    <div className={styles.specializedList}>
                        <div className={styles.specializedItem}>
                            <h4 className={styles.specializedTitle}>📱 Mobile Device Wiping</h4>
                            <p className={styles.specializedText}>
                                Complete data destruction for smartphones, tablets, and IoT devices 
                                including encrypted storage and secure elements.
                            </p>
                        </div>
                        
                        <div className={styles.specializedItem}>
                            <h4 className={styles.specializedTitle}>☁️ Cloud Storage Purging</h4>
                            <p className={styles.specializedText}>
                                Secure deletion of cloud-based data across multiple providers 
                                with verification of complete removal from all backup systems.
                            </p>
                        </div>
                        
                        <div className={styles.specializedItem}>
                            <h4 className={styles.specializedTitle}>🔧 Hardware Destruction</h4>
                            <p className={styles.specializedText}>
                                Physical destruction services for drives that cannot be wiped, 
                                including degaussing and certified physical destruction.
                            </p>
                        </div>
                        
                        <div className={styles.specializedItem}>
                            <h4 className={styles.specializedTitle}>📊 Forensic Analysis</h4>
                            <p className={styles.specializedText}>
                                Pre and post-wipe forensic verification to ensure complete 
                                data destruction with detailed technical reports.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.pricingSection}>
                    <h2 className={styles.categoryTitle}>Service Packages</h2>
                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <h3 className={styles.pricingTitle}>Individual</h3>
                            <div className={styles.pricingPrice}>₹999</div>
                            <p className={styles.pricingPeriod}>per device</p>
                            <ul className={styles.pricingFeatures}>
                                <li>Single device wiping</li>
                                <li>Clean or Purge methods</li>
                                <li>Basic certificate</li>
                                <li>Email support</li>
                            </ul>
                        </div>
                        
                        <div className={styles.pricingCard}>
                            <h3 className={styles.pricingTitle}>Business</h3>
                            <div className={styles.pricingPrice}>₹49,999</div>
                            <p className={styles.pricingPeriod}>per month</p>
                            <ul className={styles.pricingFeatures}>
                                <li>Up to 100 devices</li>
                                <li>All wiping methods</li>
                                <li>Compliance reporting</li>
                                <li>Priority support</li>
                            </ul>
                        </div>
                        
                        <div className={styles.pricingCard}>
                            <h3 className={styles.pricingTitle}>Enterprise</h3>
                            <div className={styles.pricingPrice}>Custom</div>
                            <p className={styles.pricingPeriod}>contact us</p>
                            <ul className={styles.pricingFeatures}>
                                <li>Unlimited devices</li>
                                <li>Custom solutions</li>
                                <li>Dedicated support</li>
                                <li>On-site services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default Services;