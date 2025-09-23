import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./About.module.css";

function About() {
    const sectionRef = useRef(null);
    const counterRef = useRef(null);
    const [marketValue, setMarketValue] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.${styles.statCard}`, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(`.${styles.marketCard}`, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.${styles.marketCards}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(`.${styles.featureCard}`, {
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: `.${styles.featuresGrid}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Animated counter for market value
            gsap.to(counterRef.current, {
                innerHTML: 5000,
                duration: 3,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                scrollTrigger: {
                    trigger: counterRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    onStart: () => {
                        let startValue = 0;
                        const endValue = 5000;
                        const duration = 3000;
                        const startTime = Date.now();
                        
                        const updateCounter = () => {
                            const elapsed = Date.now() - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                            const currentValue = Math.floor(startValue + (endValue - startValue) * easeProgress);
                            
                            setMarketValue(currentValue);
                            
                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            }
                        };
                        
                        updateCounter();
                    }
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className={`${styles.about} section`} ref={sectionRef}>
            <div className="container">
                <div className={styles.aboutHeader}>
                    <h2 className={styles.sectionTitle}>About WIPER</h2>
                    <p className={styles.sectionSubtitle}>
                        Leading the revolution in secure data destruction technology
                    </p>
                </div>

                <div className={styles.missionSection}>
                    <div className={styles.missionContent}>
                        <h3 className={styles.missionTitle}>Our Mission</h3>
                        <p className={styles.missionText}>
                            WIPER is dedicated to providing the most advanced and secure data wiping solutions 
                            in the industry. We understand that in today's digital age, data security isn't just 
                            about protection—it's about complete and irreversible destruction when needed.
                        </p>
                    </div>
                </div>

                <div className={styles.marketSection}>
                    <h3 className={styles.subsectionTitle}>Market Opportunity in India</h3>
                    <div className={styles.statsGrid}>
                        <div className={`${styles.statCard} glass`}>
                            <div className={styles.statNumber}>₹2,400 Cr</div>
                            <div className={styles.statLabel}>Current Market Size</div>
                        </div>
                        <div className={`${styles.statCard} glass`}>
                            <div className={styles.statNumber}>45%</div>
                            <div className={styles.statLabel}>Annual Growth Rate</div>
                        </div>
                        <div className={`${styles.statCard} glass`}>
                            <div className={styles.statNumber}>500M+</div>
                            <div className={styles.statLabel}>Devices Requiring Secure Wiping</div>
                        </div>
                        <div className={`${styles.statCard} glass`}>
                            <div className={styles.statNumber}>85%</div>
                            <div className={styles.statLabel}>Enterprises Lacking Proper Data Destruction</div>
                        </div>
                    </div>
                    
                    <div className={styles.marketProjection}>
                        <div className={`${styles.projectionCard} glass-strong`}>
                            <h4 className={styles.projectionTitle}>Projected Market Value by 2027</h4>
                            <div className={styles.counterContainer}>
                                <span className={styles.currency}>₹</span>
                                <span ref={counterRef} className={styles.counterValue}>{marketValue.toLocaleString()}</span>
                                <span className={styles.unit}>Crores</span>
                            </div>
                            <p className={styles.projectionSubtext}>
                                Expected market growth driven by digital transformation and regulatory compliance
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.marketCards}>
                        <div className={`${styles.marketCard} glass`}>
                            <div className={styles.cardIcon}>🏢</div>
                            <h4 className={styles.cardTitle}>Enterprise Growth</h4>
                            <p className={styles.cardText}>
                                Over 63,000 startups and 1.3M+ SMEs in India generate massive amounts of 
                                sensitive data requiring secure destruction protocols.
                            </p>
                        </div>
                        <div className={`${styles.marketCard} glass`}>
                            <div className={styles.cardIcon}>⚖️</div>
                            <h4 className={styles.cardTitle}>Regulatory Compliance</h4>
                            <p className={styles.cardText}>
                                New Digital Personal Data Protection Act 2023 mandates secure data deletion, 
                                creating immediate market demand.
                            </p>
                        </div>
                        <div className={`${styles.marketCard} glass`}>
                            <div className={styles.cardIcon}>🌐</div>
                            <h4 className={styles.cardTitle}>Digital Transformation</h4>
                            <p className={styles.cardText}>
                                India's digital economy is projected to reach $1 trillion by 2025, 
                                exponentially increasing data destruction needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.featuresSection}>
                    <h3 className={styles.subsectionTitle}>Why Choose WIPER?</h3>
                    <div className={styles.featuresIntro}>
                        <p className={styles.featuresDescription}>
                            WIPER isn't just another data wiping tool. It's a revolutionary approach to data security 
                            that combines military-grade algorithms with modern technology to deliver unparalleled 
                            performance and security in the data destruction industry.
                        </p>
                    </div>
                    <div className={styles.featuresGrid}>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h4 className={styles.featureTitle}>Military-Grade Security</h4>
                            <p className={styles.featureText}>
                                Our algorithms exceed DoD 5220.22-M standards with 35-pass Gutmann method, 
                                ensuring complete data obliteration that meets the highest security requirements.
                            </p>
                            <div className={styles.featureDetails}>
                                <span>NSA-approved algorithms</span>
                                <span>Forensically unrecoverable</span>
                                <span>Hardware-level secure erase</span>
                            </div>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h4 className={styles.featureTitle}>Lightning Fast Performance</h4>
                            <p className={styles.featureText}>
                                Advanced multi-threading and hardware acceleration deliver rapid data destruction 
                                without compromising security, processing terabytes in hours not days.
                            </p>
                            <div className={styles.featureDetails}>
                                <span>Parallel processing engine</span>
                                <span>GPU acceleration support</span>
                                <span>Optimized for modern SSDs</span>
                            </div>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🔧</div>
                            <h4 className={styles.featureTitle}>Universal Compatibility</h4>
                            <p className={styles.featureText}>
                                Works seamlessly with HDDs, SSDs, NVMe drives, and all major storage technologies 
                                across different operating systems and hardware configurations.
                            </p>
                            <div className={styles.featureDetails}>
                                <span>Cross-platform bootable</span>
                                <span>UEFI & Legacy BIOS support</span>
                                <span>All storage interfaces</span>
                            </div>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>📋</div>
                            <h4 className={styles.featureTitle}>Compliance Ready</h4>
                            <p className={styles.featureText}>
                                Meets GDPR, HIPAA, SOX, and Indian IT Act requirements with detailed audit trails, 
                                certificates, and comprehensive reporting for regulatory compliance.
                            </p>
                            <div className={styles.featureDetails}>
                                <span>Automated compliance reports</span>
                                <span>Digital certificates</span>
                                <span>Audit trail logging</span>
                            </div>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🚀</div>
                            <h4 className={styles.featureTitle}>Next-Gen Innovation</h4>
                            <p className={styles.featureText}>
                                Built with cutting-edge Rust technology and modern development practices, 
                                WIPER represents the next generation of data security solutions for the hackathon era.
                            </p>
                            <div className={styles.featureDetails}>
                                <span>Memory-safe architecture</span>
                                <span>Zero-cost abstractions</span>
                                <span>Future-proof design</span>
                            </div>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.featureIcon}>🌟</div>
                            <h4 className={styles.featureTitle}>Enterprise Ready</h4>
                            <p className={styles.featureText}>
                                Scalable architecture supports everything from individual devices to 
                                enterprise data centers with centralized management and real-time monitoring.
                            </p>
                            <div className={styles.featureDetails}>
                                <span>Centralized dashboard</span>
                                <span>Batch processing</span>
                                <span>Real-time monitoring</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.teamSection}>
                    <h3 className={styles.subsectionTitle}>Our Team</h3>
                    <div className={`${styles.teamContent} glass`}>
                        <p className={styles.teamText}>
                            Founded by cybersecurity experts and systems engineers, WIPER combines years 
                            of experience in data security, low-level programming, and enterprise solutions. 
                            Our team has worked with leading technology firms to develop the most robust 
                            data destruction tools available for the modern hackathon era.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;