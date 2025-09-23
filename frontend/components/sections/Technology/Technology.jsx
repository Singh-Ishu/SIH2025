import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionHeader, Grid, Card } from "../../shared";
import { BenefitCard, TimelineItem } from "./components";
import { rustBenefits, roadmapData } from "../../../utils/data";
import styles from "./Technology.module.css";

function Technology() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.${styles.timelineItem}`, {
                opacity: 0,
                x: -50,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.${styles.roadmapTimeline}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(`.${styles.benefitCard}`, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: `.${styles.rustSection}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(`.${styles.archCard}`, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: `.${styles.architectureSection}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const architectureData = [
        {
            icon: "🔧",
            title: "Bootloader Layer",
            description: "Custom UEFI/BIOS bootloader written in Rust that initializes hardware and loads the WIPER OS kernel directly from USB.",
            features: ["UEFI & Legacy BIOS support", "Secure boot integration", "Hardware detection"]
        },
        {
            icon: "⚙️",
            title: "Kernel Layer",
            description: "Minimal kernel providing hardware abstraction, memory management, and device drivers for storage controllers and interfaces.",
            features: ["Memory-safe drivers", "Hardware abstraction", "Interrupt handling"]
        },
        {
            icon: "🔒",
            title: "Wiping Engine",
            description: "High-performance data destruction engine implementing multiple algorithms with parallel processing and hardware acceleration.",
            features: ["Multi-threaded processing", "Hardware acceleration", "Algorithm selection"]
        },
        {
            icon: "📊",
            title: "Reporting Layer",
            description: "Comprehensive logging and reporting system generating compliance certificates and audit trails for regulatory requirements.",
            features: ["Real-time logging", "Certificate generation", "Audit trail creation"]
        }
    ];

    const algorithmData = [
        {
            title: "DoD 5220.22-M (3-pass)",
            patterns: ["Pass 1: 0x00", "Pass 2: 0xFF", "Pass 3: Random"],
            description: "Standard US Department of Defense wiping method suitable for most commercial and government applications."
        },
        {
            title: "Gutmann Method (35-pass)",
            patterns: ["Passes 1-4: Random", "Passes 5-31: Specific patterns", "Passes 32-35: Random"],
            description: "Most comprehensive wiping method designed to defeat advanced forensic recovery techniques."
        },
        {
            title: "NIST SP 800-88 (1-pass)",
            patterns: ["Pass 1: Cryptographic erase", "+ Hardware secure erase", "+ Verification"],
            description: "Modern approach using cryptographic erasure combined with hardware secure erase commands for SSDs."
        }
    ];

    const benchmarkData = [
        { title: "Traditional HDD", value: "150 GB/hour", subtext: "7200 RPM SATA Drive" },
        { title: "SATA SSD", value: "500 GB/hour", subtext: "Standard SATA III Interface" },
        { title: "NVMe SSD", value: "2 TB/hour", subtext: "PCIe 4.0 Interface" },
        { title: "Enterprise Array", value: "10 TB/hour", subtext: "Parallel Processing" }
    ];

    return (
        <section id="technology" className={`${styles.technology} section`} ref={sectionRef}>
            <div className="container">
                <SectionHeader 
                    title="Technology"
                    subtitle="State-of-the-art Rust-powered bootable drive solution"
                />

                <div className={styles.heroSection}>
                    <Card className={styles.heroCard} variant="glassStrong">
                        <h3 className={styles.heroTitle}>WIPER OS</h3>
                        <p className={styles.heroSubtitle}>Revolutionary Rust-Based Bootable Solution</p>
                        <p className={styles.heroDescription}>
                            We're developing a cutting-edge bootable drive powered by Rust that can securely wipe any storage
                            device, regardless of the operating system or file system. Our solution boots directly from USB,
                            bypassing all software protections and accessing hardware at the lowest level.
                        </p>
                        <div className={styles.statusBadge}>
                            <span className={styles.statusDot}></span>
                            In Active Development - Beta Q2 2025
                        </div>
                    </Card>
                </div>

                <div className={styles.rustSection}>
                    <h3 className={styles.subsectionTitle}>Why Rust?</h3>
                    <div className={styles.rustIntro}>
                        <p className={styles.rustDescription}>
                            Rust is the perfect language for building secure, high-performance bootable systems. 
                            Its unique combination of memory safety, zero-cost abstractions, and systems programming 
                            capabilities makes it ideal for data destruction tools that must be both fast and secure.
                        </p>
                    </div>
                    <Grid minWidth="280px">
                        {rustBenefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </Grid>
                </div>



                <div className={styles.architectureSection}>
                    <h3 className={styles.subsectionTitle}>Technical Architecture</h3>
                    <Grid minWidth="280px">
                        {architectureData.map((arch, index) => (
                            <Card key={index} className={styles.archCard}>
                                <div className={styles.archIcon}>{arch.icon}</div>
                                <h4 className={styles.archTitle}>{arch.title}</h4>
                                <p className={styles.archText}>{arch.description}</p>
                                <div className={styles.archFeatures}>
                                    {arch.features.map((feature, idx) => (
                                        <span key={idx}>• {feature}</span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </Grid>
                </div>

                <div className={styles.algorithmsSection}>
                    <h3 className={styles.subsectionTitle}>Wiping Algorithms</h3>
                    <Grid minWidth="320px">
                        {algorithmData.map((algorithm, index) => (
                            <Card key={index} className={styles.algorithmCard}>
                                <h4 className={styles.algorithmTitle}>{algorithm.title}</h4>
                                <div className={styles.algorithmPattern}>
                                    {algorithm.patterns.map((pattern, idx) => (
                                        <span key={idx} className={styles.pass}>{pattern}</span>
                                    ))}
                                </div>
                                <p className={styles.algorithmText}>{algorithm.description}</p>
                            </Card>
                        ))}
                    </Grid>
                </div>

                <div className={styles.performanceSection}>
                    <h3 className={styles.subsectionTitle}>Performance Benchmarks</h3>
                    <Grid minWidth="200px">
                        {benchmarkData.map((benchmark, index) => (
                            <Card key={index} className={styles.benchmarkCard}>
                                <div className={styles.benchmarkTitle}>{benchmark.title}</div>
                                <div className={styles.benchmarkValue}>{benchmark.value}</div>
                                <div className={styles.benchmarkSubtext}>{benchmark.subtext}</div>
                            </Card>
                        ))}
                    </Grid>
                </div>

                <div className={styles.roadmapSection}>
                    <h3 className={styles.subsectionTitle}>Development Roadmap</h3>
                    <div className={styles.roadmapTimeline}>
                        {roadmapData.map((item, index) => (
                            <TimelineItem key={index} {...item} />
                        ))}
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <Card className={styles.ctaCard} variant="glassStrong">
                        <h3 className={styles.ctaTitle}>Join Our Beta Program</h3>
                        <p className={styles.ctaText}>
                            Be among the first to experience the future of secure data destruction. 
                            Our beta program offers early access to WIPER OS and direct input into 
                            the development process.
                        </p>
                        <button className={styles.ctaButton}>Request Beta Access</button>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Technology;