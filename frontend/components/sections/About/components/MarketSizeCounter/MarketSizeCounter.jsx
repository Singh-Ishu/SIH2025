import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MarketSizeCounter.module.css";

gsap.registerPlugin(ScrollTrigger);

function MarketSizeCounter() {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = counterRef.current;
        
        const scrollTrigger = ScrollTrigger.create({
            trigger: element,
            start: "top 80%",
            onEnter: () => {
                if (!hasAnimated.current) {
                    hasAnimated.current = true;
                    
                    // Animate the counter from 0 to 5000
                    gsap.to({ value: 0 }, {
                        value: 50000000000,
                        duration: 2.5,
                        ease: "power2.out",
                        onUpdate: function() {
                            setCount(Math.floor(this.targets()[0].value));
                        }
                    });
                }
            }
        });

        return () => {
            scrollTrigger.kill();
        };
    }, []);

    // Format number with commas
    const formatNumber = (num) => {
        return num.toLocaleString('en-IN');
    };

    return (
        <div className={styles.marketSizeCounter} ref={counterRef}>
            <div className={styles.counterContainer}>
                <div className={styles.counterNumber}>
                    ₹{formatNumber(count)}
                </div>
                <div className={styles.counterLabel}>
                    5,000 Crores
                </div>
                <div className={styles.counterSubtext}>
                    Total Market Size
                </div>
            </div>
        </div>
    );
}

export default MarketSizeCounter;