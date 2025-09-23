import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
                    trigger: `.${styles.rustBenefits}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="technology" className={`${styles.technology} section`} ref={sectionRef}>
            <div className="container">
                <div className={styles.technologyHeader}>
                    <h2 className={styles.sectionTitle}>Technology</h2>
                    <p className={styles.sectionSubtitle}>
                        State-of-the-art Rust-powered bootable drive solution
                    </p>
                </div>

                <div className={styles.heroSection}>
                    <div className={`${styles.heroCard} glass-strong`}>
                        <h3 className={styles.heroTitle}>WIPER OS</h3>
                        <p className={styles.heroSubtitle}>
                            Revolutionary Rust-Based Bootable Solution
                        </p>
                        <p className={styles.heroDescription}>
                            We're developing a cutting-edge bootable drive
                            powered by Rust that can securely wipe any storage
                            device, regardless of the operating system or file
                            system. Our solution boots directly from USB,
                            bypassing all software protections and accessing
                            hardware at the lowest level.
                        </p>
                        <div className={styles.statusBadge}>
                            <span className={styles.statusDot}></span>
                            In Active Development - Beta Q2 2025
                        </div>
                    </div>
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
                    <div className={styles.rustBenefits}>
                        <div className={`${styles.benefitCard} glass`}>
                            <div className={styles.benefitIcon}>⚡</div>
                            <h4 className={styles.benefitTitle}>Zero-Cost Abstractions</h4>
                            <p className={styles.benefitText}>
                                Rust's zero-cost abstractions mean high-level code compiles to the same 
                                assembly as hand-optimized C, crucial for maximum performance in data wiping algorithms.
                            </p>
                            <div className={styles.benefitDetails}>
                                <span>• No runtime overhead</span>
                                <span>• Compile-time optimizations</span>
                                <span>• Predictable performance</span>
                            </div>
                        </div>
                        <div className={`${styles.benefitCard} glass`}>
                            <div className={styles.benefitIcon}>🛡️</div>
                            <h4 className={styles.benefitTitle}>Memory Safety Without GC</h4>
                            <p className={styles.benefitText}>
                                Prevents buffer overflows, use-after-free, and memory leaks at compile time, 
                                ensuring the wiping process cannot be compromised by memory corruption vulnerabilities.
                            </p>
                            <div className={styles.benefitDetails}>
                                <span>• No garbage collector</span>
                                <span>• Compile-time guarantees</span>
                                <span>• Zero memory leaks</span>
                            </div>
                        </div>
                        <div className={`${styles.benefitCard} glass`}>
                            <div className={styles.benefitIcon}>⚙️</div>
                            <h4 className={styles.benefitTitle}>Systems Programming</h4>
                            <p className={styles.benefitText}>
                                Direct hardware access, inline assembly, and bare-metal programming capabilities 
                                essential for bootable environments and low-level storage device control.
                            </p>
                            <div className={styles.benefitDetails}>
                                <span>• Direct hardware access</span>
                                <span>• Inline assembly support</span>
                                <span>• No runtime dependencies</span>
                            </div>
                        </div>
                        <div className={`${styles.benefitCard} glass`}>
                            <div className={styles.benefitIcon}>🔄</div>
                            <h4 className={styles.benefitTitle}>Fearless Concurrency</h4>
                            <p className={styles.benefitText}>
                                Rust's ownership system prevents data races at compile time, enabling safe 
                                parallel wiping of multiple drives with optimal multi-threaded performance.
                            </p>
                            <div className={styles.benefitDetails}>
                                <span>• No data races</span>
                                <span>• Thread-safe by default</span>
                                <span>• Efficient parallelism</span>
                            </div>
                        </div>
                        <div className={`${styles.benefitCard} glass`}>
                            <div className={styles.benefitIcon}>🔒</div>
                            <h4 className={styles.benefitTitle}>Security by Design</h4>
                            <p className={styles.benefitText}>
                                Rust's type system and borrow checker eliminate entire classes of security 
                                vulnerabilities, critical for tools handling sensitive data destruction.
                            </p>
                            <div className={styles.benefitDetails}>
                                <span>• Type safety</span>
                                <span>• No null pointer dereferences</span>
                                <span>• Safe error handling</span>
                            </div>
                        </div>
                        <div className={`${styles.benefitCard} glass`}>
                            <div className={styles.benefitIcon}>🚀</div>
                            <h4 className={styles.benefitTitle}>Modern Tooling</h4>
                            <p className={styles.benefitText}>
                                Cargo package manager, built-in testing, documentation generation, and 
                                excellent cross-compilation support streamline development and deployment.
                            </p>
                            <div className={styles.benefitDetails}>
                                <span>• Integrated toolchain</span>
                                <span>• Cross-compilation</span>
                                <span>• Rich ecosystem</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.roadmapSection}>
                    <h3 className={styles.subsectionTitle}>Development Roadmap</h3>
                    <div className={styles.roadmapTimeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={`${styles.timelineContent} glass`}>
                                <h4 className={styles.timelineTitle}>Q1 2025 - Core Engine</h4>
                                <p className={styles.timelineText}>
                                    Complete bootloader and basic wiping algorithms. Support for 
                                    SATA and NVMe drives with standard wiping patterns.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={`${styles.timelineContent} glass`}>
                                <h4 className={styles.timelineTitle}>Q2 2025 - Beta Release</h4>
                                <p className={styles.timelineText}>
                                    Public beta with GUI interface, network reporting, and 
                                    compliance certification features.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={`${styles.timelineContent} glass`}>
                                <h4 className={styles.timelineTitle}>Q3 2025 - Enterprise Features</h4>
                                <p className={styles.timelineText}>
                                    Advanced features like selective wiping, batch processing, 
                                    and enterprise management integration.
                                </p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={`${styles.timelineContent} glass`}>
                                <h4 className={styles.timelineTitle}>Q4 2025 - Full Release</h4>
                                <p className={styles.timelineText}>
                                    Production-ready release with full certification, 24/7 support, 
                                    and global deployment capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <div className={`${styles.ctaCard} glass-strong`}>
                        <h3 className={styles.ctaTitle}>Join Our Beta Program</h3>
                        <p className={styles.ctaText}>
                            Be among the first to experience the future of secure data destruction. 
                            Our beta program offers early access to WIPER OS and direct input into 
                            the development process.
                        </p>
                        <button className={styles.ctaButton}>Request Beta Access</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technology;