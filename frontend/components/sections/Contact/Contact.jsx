import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionHeader, Grid, Card } from "../../shared";
import { ContactMethod, FAQCard } from "./components";
import { contactMethods, faqData } from "../../../utils/data";
import styles from "./Contact.module.css";

function Contact() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.${styles.contactMethod}`, {
                opacity: 0,
                x: -30,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: `.${styles.contactMethods}`,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(`.${styles.contactForm}`, {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className={`${styles.contact} section`} ref={sectionRef}>
            <div className="container">
                <SectionHeader 
                    title="Contact Us"
                    subtitle="Get in touch for secure data destruction solutions"
                />

                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.infoTitle}>Get In Touch</h3>
                        <p className={styles.infoText}>
                            Ready to secure your data destruction needs? Our team of experts 
                            is here to help you choose the right solution for your requirements.
                        </p>
                        
                        <div className={styles.contactMethods}>
                            {contactMethods.map((method, index) => (
                                <ContactMethod key={index} {...method} />
                            ))}
                        </div>
                    </div>
                    
                    <Card className={styles.contactForm} variant="glassStrong">
                        <h3 className={styles.formTitle}>Send Us a Message</h3>
                        <form className={styles.form}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Name *</label>
                                    <input 
                                        type="text" 
                                        className={styles.formInput}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Email *</label>
                                    <input 
                                        type="email" 
                                        className={styles.formInput}
                                        placeholder="your.email@company.com"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Company</label>
                                    <input 
                                        type="text" 
                                        className={styles.formInput}
                                        placeholder="Your company name"
                                    />
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Service Interest</label>
                                    <select className={styles.formSelect}>
                                        <option value="">Select a service</option>
                                        <option value="individual">Individual Wiping</option>
                                        <option value="business">Business Solutions</option>
                                        <option value="enterprise">Enterprise Services</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Message *</label>
                                <textarea 
                                    className={styles.formTextarea}
                                    placeholder="Tell us about your data wiping requirements, compliance needs, timeline, and any specific concerns..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.checkbox} required />
                                    I agree to the privacy policy and terms of service *
                                </label>
                            </div>
                            
                            <button type="submit" className={styles.submitButton}>
                                Send Message
                            </button>
                        </form>
                    </Card>
                </div>

                <div className={styles.faqSection}>
                    <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
                    <Grid minWidth="350px">
                        {faqData.map((faq, index) => (
                            <FAQCard key={index} {...faq} />
                        ))}
                    </Grid>
                </div>

                <div className={styles.supportSection}>
                    <Card className={styles.supportCard} variant="glassStrong">
                        <h3 className={styles.supportTitle}>24/7 Emergency Support</h3>
                        <p className={styles.supportText}>
                            Data breaches don't wait for business hours. Our emergency response team 
                            is available 24/7 to help with critical data destruction needs.
                        </p>
                        <div className={styles.supportFeatures}>
                            <div className={styles.supportFeature}>
                                <span className={styles.supportIcon}>⚡</span>
                                <span>Immediate response within 1 hour</span>
                            </div>
                            <div className={styles.supportFeature}>
                                <span className={styles.supportIcon}>🚁</span>
                                <span>On-site deployment within 4 hours</span>
                            </div>
                            <div className={styles.supportFeature}>
                                <span className={styles.supportIcon}>🔒</span>
                                <span>Secure chain of custody protocols</span>
                            </div>
                        </div>
                        <button className={styles.emergencyButton}>Call Emergency Hotline</button>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Contact;