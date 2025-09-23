import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const [terminalLines, setTerminalLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const terminalCommands = [
        { type: "command", text: "wiper --scan /dev/sda", delay: 1000 },
        { type: "output", text: "Scanning drive: Samsung SSD 970 EVO 1TB", delay: 800 },
        { type: "output", text: "Partition table: GPT", delay: 600 },
        { type: "output", text: "Encrypted sectors detected: 45%", delay: 700 },
        { type: "command", text: "wiper --mode exterminate --target /dev/sda", delay: 1200 },
        { type: "output", text: "Initializing secure wipe protocol...", delay: 900 },
        { type: "output", text: "35-pass Gutmann algorithm engaged", delay: 800 },
        { type: "output", text: "Hardware secure erase: ENABLED", delay: 700 },
        { type: "progress", text: "Progress: [████████████████████] 100%", delay: 2000 },
        { type: "success", text: "Data destruction: COMPLETE", delay: 1000 },
        { type: "success", text: "Verification: PASSED", delay: 800 },
        { type: "output", text: "Certificate generated: wiper_cert_2025.pdf", delay: 1000 }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            
            tl.from(titleRef.current, {
                opacity: 0,
                y: 100,
                duration: 1.2,
                ease: "power4.out"
            })
            .from(subtitleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8")
            .from(ctaRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6");

            // Floating animation for background elements
            gsap.to(`.${styles.floatingElement}`, {
                y: -20,
                duration: 3,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.5
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (currentLineIndex >= terminalCommands.length) {
            // Reset animation after completion
            setTimeout(() => {
                setTerminalLines([]);
                setCurrentLineIndex(0);
                setCurrentText("");
            }, 3000);
            return;
        }

        const currentCommand = terminalCommands[currentLineIndex];
        setIsTyping(true);

        // Typing animation
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex <= currentCommand.text.length) {
                setCurrentText(currentCommand.text.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
                
                // Add completed line to terminal
                setTimeout(() => {
                    setTerminalLines(prev => [...prev, {
                        type: currentCommand.type,
                        text: currentCommand.text
                    }]);
                    setCurrentText("");
                    setCurrentLineIndex(prev => prev + 1);
                }, 500);
            }
        }, currentCommand.type === "command" ? 100 : 50);

        return () => clearInterval(typingInterval);
    }, [currentLineIndex]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className={`${styles.hero} hero-section section`} ref={heroRef}>
            <div className={styles.heroBackground}>
                <div className={`${styles.floatingElement} ${styles.element1}`}></div>
                <div className={`${styles.floatingElement} ${styles.element2}`}></div>
                <div className={`${styles.floatingElement} ${styles.element3}`}></div>
                <div className={styles.gridOverlay}></div>
            </div>
            
            <div className={`${styles.heroContent} container`}>
                <div className={styles.heroText}>
                    <h1 ref={titleRef} className={styles.heroTitle}>
                        <span className={styles.titleMain}>WIPER</span>
                        <span className={styles.titleSub}>Secure Data Destruction</span>
                    </h1>
                    
                    <p ref={subtitleRef} className={styles.heroSubtitle}>
                        Revolutionary Rust-powered bootable solution for complete data wiping.
                        Military-grade security meets cutting-edge technology.
                    </p>
                    
                    <div ref={ctaRef} className={styles.heroActions}>
                        <button 
                            className={styles.ctaPrimary}
                            onClick={() => scrollToSection('services')}
                        >
                            Explore Solutions
                        </button>
                        <button 
                            className={styles.ctaSecondary}
                            onClick={() => scrollToSection('technology')}
                        >
                            View Technology
                        </button>
                    </div>
                </div>
                
                <div className={styles.heroVisual}>
                    <div className={styles.terminalWindow}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.terminalButtons}>
                                <span className={styles.terminalButton}></span>
                                <span className={styles.terminalButton}></span>
                                <span className={styles.terminalButton}></span>
                            </div>
                            <span className={styles.terminalTitle}>wiper-os v2.0.1</span>
                        </div>
                        <div className={styles.terminalContent}>
                            {terminalLines.map((line, index) => (
                                <div key={index} className={styles.terminalLine}>
                                    {line.type === "command" && <span className={styles.prompt}>$</span>}
                                    <span className={styles[line.type]}>{line.text}</span>
                                </div>
                            ))}
                            {currentText && (
                                <div className={styles.terminalLine}>
                                    {terminalCommands[currentLineIndex]?.type === "command" && 
                                        <span className={styles.prompt}>$</span>
                                    }
                                    <span className={styles[terminalCommands[currentLineIndex]?.type || "output"]}>
                                        {currentText}
                                        {isTyping && <span className={styles.cursor}>|</span>}
                                    </span>
                                </div>
                            )}
                            {!currentText && !isTyping && terminalLines.length === 0 && (
                                <div className={styles.terminalLine}>
                                    <span className={styles.prompt}>$</span>
                                    <span className={styles.cursor}>|</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
}

export default Hero;