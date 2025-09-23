import PageLayout from "../../components/shared/PageLayout/PageLayout";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <PageLayout 
            title="Contact Us" 
            subtitle="Get in touch for secure data destruction solutions"
        >
            <div className={styles.contactContent}>
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <h2 className={styles.infoTitle}>Get In Touch</h2>
                        <p className={styles.infoText}>
                            Ready to secure your data destruction needs? Our team of experts 
                            is here to help you choose the right solution for your requirements.
                        </p>
                        
                        <div className={styles.contactMethods}>
                            <div className={styles.contactMethod}>
                                <div className={styles.methodIcon}>📧</div>
                                <div className={styles.methodDetails}>
                                    <h4 className={styles.methodTitle}>Email</h4>
                                    <p className={styles.methodText}>contact@wiper.tech</p>
                                    <p className={styles.methodSubtext}>Response within 24 hours</p>
                                </div>
                            </div>
                            
                            <div className={styles.contactMethod}>
                                <div className={styles.methodIcon}>📞</div>
                                <div className={styles.methodDetails}>
                                    <h4 className={styles.methodTitle}>Phone</h4>
                                    <p className={styles.methodText}>+91 98765 43210</p>
                                    <p className={styles.methodSubtext}>Mon-Fri, 9 AM - 6 PM IST</p>
                                </div>
                            </div>
                            
                            <div className={styles.contactMethod}>
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
                            
                            <div className={styles.contactMethod}>
                                <div className={styles.methodIcon}>🚨</div>
                                <div className={styles.methodDetails}>
                                    <h4 className={styles.methodTitle}>Emergency</h4>
                                    <p className={styles.methodText}>+91 99999 00000</p>
                                    <p className={styles.methodSubtext}>24/7 Critical Data Breaches</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.socialLinks}>
                            <h3 className={styles.socialTitle}>Follow Us</h3>
                            <div className={styles.socialIcons}>
                                <a href="#" className={styles.socialIcon}>LinkedIn</a>
                                <a href="#" className={styles.socialIcon}>Twitter</a>
                                <a href="#" className={styles.socialIcon}>GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.contactForm}>
                        <h2 className={styles.formTitle}>Send Us a Message</h2>
                        <form className={styles.form}>
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
                                    <option value="emergency">Emergency Response</option>
                                    <option value="consultation">Consultation</option>
                                </select>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Number of Devices</label>
                                <select className={styles.formSelect}>
                                    <option value="">Select range</option>
                                    <option value="1-10">1-10 devices</option>
                                    <option value="11-50">11-50 devices</option>
                                    <option value="51-100">51-100 devices</option>
                                    <option value="100+">100+ devices</option>
                                </select>
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
                
                <div className={styles.additionalInfo}>
                    <div className={styles.infoCard}>
                        <h3 className={styles.cardTitle}>🔒 Security & Privacy</h3>
                        <p className={styles.cardText}>
                            All communications are encrypted and confidential. We never store 
                            or share your data. Our team signs strict NDAs for enterprise clients.
                        </p>
                    </div>
                    
                    <div className={styles.infoCard}>
                        <h3 className={styles.cardTitle}>⚡ Response Times</h3>
                        <p className={styles.cardText}>
                            Standard inquiries: 24 hours | Enterprise quotes: 48 hours | 
                            Emergency situations: Immediate response within 2 hours.
                        </p>
                    </div>
                    
                    <div className={styles.infoCard}>
                        <h3 className={styles.cardTitle}>🌍 Global Reach</h3>
                        <p className={styles.cardText}>
                            While based in India, we serve clients globally through our network 
                            of certified partners and remote wiping solutions.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default Contact;