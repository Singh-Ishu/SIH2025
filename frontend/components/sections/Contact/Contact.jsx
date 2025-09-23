import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
                <div className={styles.contactHeader}>
                    <h2 className={styles.sectionTitle}>Contact Us</h2>
                    <p className={styles.sectionSubtitle}>
                        Get in touch for secure data destruction solutions
                    </p>
                </div>

                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.infoTitle}>Get In Touch</h3>
                        <p className={styles.infoText}>
                            Ready to secure your data destruction needs? Our team of experts 
                            is here to help you choose the right solution for your requirements.
                        </p>
                        
                        <div className={styles.contactMethods}>
                            <div className={`${styles.contactMethod} glass`}>
                                <div className={styles.methodIcon}>📧</div>
                                <div className={styles.methodDetails}>
                                    <h4 className={styles.methodTitle}>Email</h4>
                                    <p className={styles.methodText}>contact@wiper.tech</p>
                                    <p className={styles.methodSubtext}>Response within 24 hours</p>
                                </div>
                            </div>
                            
                            <div className={`${styles.contactMethod} glass`}>
                                <div className={styles.methodIcon}>📞</div>
                                <div className={styles.methodDetails}>
                                    <h4 className={styles.methodTitle}>Phone</h4>
                                    <p className={styles.methodText}>+91 98765 43210</p>
                                    <p className={styles.methodSubtext}>Mon-Fri, 9 AM - 6 PM IST</p>
                                </div>
                            </div>
                            
                            <div className={`${styles.contactMethod} glass`}>
                                <div className={styles.methodIcon}>🏢</div>
                                <div className={styles.methodDetails}>
                                    <h4 className={styles.methodTitle}>Office</h4>
                                    <p className={styles.methodText}>
                                        Cyber City, Gurugram<br />
                                        Haryana, India 122002
                                    </p>
                                    <p className={styles.methodSubtext}>By appointment only</p>
                                </div>
                            </div>
                            
                            <div className={`${styles.contactMethod} glass`}>
                                <div className={styles.methodIcon}>🚨</div>
                                <div className={styles.methodDetails}>
                                    <h4 className={styles.methodTitle}>Emergency</h4>
                                    <p className={styles.methodText}>+91 99999 00000</p>
                                    <p className={styles.methodSubtext}>24/7 Critical Data Breaches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles.contactForm} glass-strong`}>
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;