import PageLayout from "../../components/shared/PageLayout/PageLayout";
import styles from "./Technology.module.css";

function Technology() {
    return (
        <PageLayout 
            title="Technology" 
            subtitle="State-of-the-art Rust-powered bootable drive solution"
        >
            <div className={styles.technologyContent}>
                <div className={styles.heroSection}>
                    <div className={styles.heroCard}>
                        <h2 className={styles.heroTitle}>🦀 WIPER OS</h2>
                        <p className={styles.heroSubtitle}>Revolutionary Rust-Based Bootable Solution</p>
                        <p className={styles.heroDescription}>
                            We're developing a cutting-edge bootable drive powered by Rust that can 
                            securely wipe any storage device, regardless of the operating system or 
                            file system. Our solution boots directly from USB, bypassing all software 
                            protections and accessing hardware at the lowest level.
                        </p>
                        <div className={styles.statusBadge}>
                            <span className={styles.statusDot}></span>
                            In Active Development - Beta Q2 2025
                        </div>
                    </div>
                </div>

                <div className={styles.techSection}>
                    <h2 className={styles.sectionTitle}>Why Rust?</h2>
                    <div className={styles.rustBenefits}>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>⚡</div>
                            <h3 className={styles.benefitTitle}>Zero-Cost Abstractions</h3>
                            <p className={styles.benefitText}>
                                Maximum performance with memory safety guarantees, crucial for 
                                low-level hardware operations and data wiping algorithms.
                            </p>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>🛡️</div>
                            <h3 className={styles.benefitTitle}>Memory Safety</h3>
                            <p className={styles.benefitText}>
                                Prevents buffer overflows and memory corruption that could 
                                compromise the wiping process or leave data recoverable.
                            </p>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>🔧</div>
                            <h3 className={styles.benefitTitle}>Systems Programming</h3>
                            <p className={styles.benefitText}>
                                Direct hardware access and bare-metal programming capabilities 
                                essential for bootable environments.
                            </p>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>🚀</div>
                            <h3 className={styles.benefitTitle}>Concurrency</h3>
                            <p className={styles.benefitText}>
                                Fearless concurrency enables parallel wiping of multiple drives 
                                and optimized multi-threaded algorithms.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.techSection}>
                    <h2 className={styles.sectionTitle}>Technical Architecture</h2>
                    <div className={styles.architectureGrid}>
                        <div className={styles.archCard}>
                            <h3 className={styles.archTitle}>🔧 Bootloader Layer</h3>
                            <ul className={styles.archList}>
                                <li>UEFI/BIOS compatibility</li>
                                <li>Secure Boot support</li>
                                <li>Hardware detection</li>
                                <li>Memory management</li>
                            </ul>
                        </div>
                        <div className={styles.archCard}>
                            <h3 className={styles.archTitle}>💾 Storage Interface</h3>
                            <ul className={styles.archList}>
                                <li>SATA/NVMe drivers</li>
                                <li>USB mass storage</li>
                                <li>RAID controller support</li>
                                <li>Hardware encryption bypass</li>
                            </ul>
                        </div>
                        <div className={styles.archCard}>
                            <h3 className={styles.archTitle}>🧮 Wiping Engine</h3>
                            <ul className={styles.archList}>
                                <li>Multi-pass algorithms</li>
                                <li>Cryptographic randomization</li>
                                <li>Parallel processing</li>
                                <li>Progress monitoring</li>
                            </ul>
                        </div>
                        <div className={styles.archCard}>
                            <h3 className={styles.archTitle}>📊 Verification System</h3>
                            <ul className={styles.archList}>
                                <li>Forensic validation</li>
                                <li>Checksum verification</li>
                                <li>Compliance reporting</li>
                                <li>Certificate generation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.techSection}>
                    <h2 className={styles.sectionTitle}>Advanced Features</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <h4 className={styles.featureTitle}>🎯 Selective Wiping</h4>
                            <p className={styles.featureText}>
                                Target specific partitions, file types, or data patterns while 
                                preserving system recovery partitions if needed.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <h4 className={styles.featureTitle}>🔐 Encryption Bypass</h4>
                            <p className={styles.featureText}>
                                Direct hardware access bypasses software encryption, ensuring 
                                complete data destruction even on encrypted drives.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <h4 className={styles.featureTitle}>📡 Network Reporting</h4>
                            <p className={styles.featureText">
                                Real-time progress updates and completion reports sent to 
                                centralized management systems via network boot.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <h4 className={styles.featureTitle}>🔄 Batch Processing</h4>
                            <p className={styles.featureText">
                                Simultaneously wipe multiple drives connected to the same 
                                system with independent progress tracking.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <h4 className={styles.featureTitle}>🧪 Bad Sector Handling</h4>
                            <p className={styles.featureText">
                                Advanced algorithms to handle damaged sectors and ensure 
                                complete wiping even on failing drives.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <h4 className={styles.featureTitle}>📋 Compliance Modes</h4>
                            <p className={styles.featureText">
                                Pre-configured wiping profiles for different compliance 
                                standards (DoD, NIST, GDPR, etc.).
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.techSection}>
                    <h2 className={styles.sectionTitle}>Development Roadmap</h2>
                    <div className={styles.roadmapTimeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>Q1 2025 - Core Engine</h4>
                                <p className={styles.timelineText}>
                                    Complete bootloader and basic wiping algorithms. Support for 
                                    SATA and NVMe drives with standard wiping patterns.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>Q2 2025 - Beta Release</h4>
                                <p className={styles.timelineText}>
                                    Public beta with GUI interface, network reporting, and 
                                    compliance certification features.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>Q3 2025 - Enterprise Features</h4>
                                <p className={styles.timelineText}>
                                    Advanced features like selective wiping, batch processing, 
                                    and enterprise management integration.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>Q4 2025 - Full Release</h4>
                                <p className={styles.timelineText}>
                                    Production-ready release with full certification, 
                                    24/7 support, and global deployment capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Join Our Beta Program</h2>
                    <p className={styles.ctaText}>
                        Be among the first to experience the future of secure data destruction. 
                        Our beta program offers early access to WIPER OS and direct input into 
                        the development process.
                    </p>
                    <button className={styles.ctaButton}>Request Beta Access</button>
                </div>
            </div>
        </PageLayout>
    );
}

export default Technology;