import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionHeader, Grid, Card } from "../../shared";
import { MethodCard, ProcessStep } from "./components";
import { methodsData, processSteps } from "../../../utils/data";
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

    const complianceData = [
        {
            icon: "🇮🇳",
            title: "Indian IT Act 2000",
            description: "Fully compliant with Indian Information Technology Act and Digital Personal Data Protection Act 2023 requirements."
        },
        {
            icon: "🏥",
            title: "HIPAA Compliant",
            description: "Meets Healthcare Insurance Portability and Accountability Act standards for medical data destruction."
        },
        {
            icon: "🌍",
            title: "GDPR Ready",
            description: "European General Data Protection Regulation compliant with \"Right to Erasure\" implementation."
        },
        {
            icon: "📊",
            title: "SOX Compliant",
            description: "Sarbanes-Oxley Act compliant for financial data destruction and audit trail requirements."
        }
    ];

    return (
        <section id="services" className={`${styles.services} section`} ref={sectionRef}>
            <div className="container">
                <SectionHeader 
                    title="Our Services"
                    subtitle="Comprehensive data destruction solutions for every need"
                />

                <div className={styles.methodsSection}>
                    <h3 className={styles.subsectionTitle}>Data Wiping Methods</h3>
                    <Grid minWidth="320px">
                        {methodsData.map((method, index) => (
                            <MethodCard key={index} {...method} />
                        ))}
                    </Grid>
                </div>

                <div className={styles.complianceSection}>
                    <h3 className={styles.subsectionTitle}>Compliance & Certifications</h3>
                    <Grid minWidth="280px">
                        {complianceData.map((compliance, index) => (
                            <Card key={index} className={styles.complianceCard}>
                                <div className={styles.complianceIcon}>{compliance.icon}</div>
                                <h4 className={styles.complianceTitle}>{compliance.title}</h4>
                                <p className={styles.complianceText}>{compliance.description}</p>
                            </Card>
                        ))}
                    </Grid>
                </div>

                <div className={styles.processSection}>
                    <h3 className={styles.subsectionTitle}>Our Process</h3>
                    <div className={styles.processSteps}>
                        {processSteps.map((step, index) => (
                            <ProcessStep key={index} {...step} />
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Services;