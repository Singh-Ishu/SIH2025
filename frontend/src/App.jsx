import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../components/layout/Navigation/Navigation";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Services from "../components/sections/Services/Services";
import Technology from "../components/sections/Technology/Technology";
import Contact from "../components/sections/Contact/Contact";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const appRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth scroll setup
            gsap.set("html", { scrollBehavior: "smooth" });
            
            // Initial page load animation
            gsap.from(".hero-section", {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "power3.out"
            });

            // Section animations on scroll
            gsap.utils.toArray(".section").forEach((section, index) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Parallax effect for background elements
            gsap.utils.toArray(".parallax-bg").forEach((bg) => {
                gsap.to(bg, {
                    yPercent: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: bg,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

        }, appRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="App" ref={appRef}>
            <Navigation />
            <main className="main-content">
                <Hero />
                <About />
                <Services />
                <Technology />
                <Contact />
            </main>
        </div>
    );
}
export default App;
