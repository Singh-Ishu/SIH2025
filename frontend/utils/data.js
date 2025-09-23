// About Section Data
export const industryData = [
    {
        icon: "🏥",
        title: "Healthcare",
        description: "HIPAA-compliant data destruction for patient records, medical imaging, and sensitive healthcare data across hospitals and clinics.",
        stats: ["2,000+ Healthcare facilities in India", "₹500 Cr market potential"]
    },
    {
        icon: "🏦",
        title: "Banking & Finance",
        description: "Secure destruction of financial records, transaction data, and customer information meeting RBI and international banking standards.",
        stats: ["46 Scheduled Commercial Banks", "₹800 Cr market potential"]
    },
    {
        icon: "🏛️",
        title: "Government",
        description: "Military-grade data destruction for classified information, citizen data, and sensitive government operations across central and state agencies.",
        stats: ["28 States + 8 Union Territories", "₹600 Cr market potential"]
    },
    {
        icon: "🏭",
        title: "Manufacturing",
        description: "Protection of intellectual property, trade secrets, and proprietary manufacturing data for India's growing industrial sector.",
        stats: ["64,000+ Manufacturing units", "₹400 Cr market potential"]
    },
    {
        icon: "💻",
        title: "IT & Software",
        description: "Secure data wiping for software companies, data centers, and IT service providers handling client data and proprietary code.",
        stats: ["50,000+ IT companies", "₹700 Cr market potential"]
    },
    {
        icon: "🎓",
        title: "Education",
        description: "Protection of student records, research data, and academic information across universities, schools, and educational institutions.",
        stats: ["1,000+ Universities", "₹300 Cr market potential"]
    }
];

export const certificationData = [
    {
        badge: "DoD 5220.22-M",
        title: "US Department of Defense",
        description: "Meets and exceeds DoD standards for secure data sanitization with multiple overwrite passes and verification."
    },
    {
        badge: "NIST SP 800-88",
        title: "NIST Guidelines",
        description: "Compliant with NIST Special Publication 800-88 Rev. 1 for media sanitization guidelines."
    },
    {
        badge: "Common Criteria",
        title: "ISO/IEC 15408",
        description: "Evaluated under Common Criteria for IT Security Evaluation ensuring international security standards."
    },
    {
        badge: "GDPR Ready",
        title: "EU Data Protection",
        description: "Fully compliant with GDPR Article 17 \"Right to Erasure\" requirements for permanent data deletion."
    }
];

export const teamData = [
    {
        avatar: "👨‍💻",
        name: "Ishaan Singh",
        role: "Team Leader",
        bio: "15+ years in cybersecurity and systems programming. Former security architect at major tech firms with expertise in low-level data security."
    },
    {
        avatar: "👩‍💼",
        name: "Niharika G. Khopade",
        role: "Female Member Zaruri tha",
        bio: "MBA from IIM with 12+ years in enterprise software. Led multiple successful product launches in the cybersecurity domain."
    },
    {
        avatar: "👨‍🔬",
        name: "Ashutosh Mittal",
        role: "Head of Research",
        bio: "PhD in Computer Science specializing in cryptography and data security. Published researcher with 20+ papers in top-tier security conferences."
    },
    {
        avatar: "👩‍💻",
        name: "Viju",
        role: "Lead Rust Developer",
        bio: "Systems programming expert with deep knowledge of Rust, bootloader development, and hardware-level programming for secure applications."
    },
    {
        avatar: "👩‍💻",
        name: "Ayushman",
        role: "Lead Rust Developer",
        bio: "Systems programming expert with deep knowledge of Rust, bootloader development, and hardware-level programming for secure applications."
    },
    {
        avatar: "👩‍💻",
        name: "Rachit Gupta",
        role: "Ex-Tau",
        bio: "Systems programming expert with deep knowledge of Rust, bootloader development, and hardware-level programming for secure applications."
    },
];

// Services Section Data
export const methodsData = [
    {
        title: "Clean",
        badge: "Standard",
        description: "Standard secure deletion using DoD 5220.22-M protocols. Perfect for routine data cleanup and file removal with 3-pass overwriting.",
        features: [
            "3-pass overwrite algorithm",
            "Suitable for personal use",
            "Fast processing time",
            "Basic compliance standards"
        ]
    },
    {
        title: "Purge",
        badge: "Advanced",
        description: "Advanced multi-pass wiping with cryptographic randomization. Ideal for sensitive corporate data requiring higher security levels.",
        features: [
            "7-pass overwrite with random data",
            "Cryptographic verification",
            "Enterprise-grade security",
            "GDPR & HIPAA compliant"
        ]
    },
    {
        title: "Exterminate",
        badge: "Military",
        description: "Military-grade destruction with 35-pass Gutmann method plus hardware-level secure erase commands. Maximum security guaranteed.",
        features: [
            "35-pass Gutmann algorithm",
            "Hardware secure erase",
            "Military & government grade",
            "Forensically unrecoverable"
        ]
    }
];

export const processSteps = [
    {
        number: 1,
        title: "Assessment",
        description: "Comprehensive analysis of your storage devices, data types, and compliance requirements to determine optimal wiping strategy."
    },
    {
        number: 2,
        title: "Preparation",
        description: "Device cataloging, backup verification, and preparation of bootable WIPER OS media customized for your specific needs."
    },
    {
        number: 3,
        title: "Execution",
        description: "Secure data wiping using selected algorithms with real-time monitoring and progress tracking throughout the process."
    },
    {
        number: 4,
        title: "Verification",
        description: "Post-wipe verification using advanced forensic techniques to ensure complete data destruction and compliance."
    },
    {
        number: 5,
        title: "Certification",
        description: "Digital certificate generation with detailed audit trails, compliance reports, and legal documentation."
    }
];

// Technology Section Data
export const rustBenefits = [
    {
        icon: "⚡",
        title: "Zero-Cost Abstractions",
        description: "Rust's zero-cost abstractions mean high-level code compiles to the same assembly as hand-optimized C, crucial for maximum performance in data wiping algorithms.",
        details: [
            "No runtime overhead",
            "Compile-time optimizations",
            "Predictable performance"
        ]
    },
    {
        icon: "🛡️",
        title: "Memory Safety Without GC",
        description: "Prevents buffer overflows, use-after-free, and memory leaks at compile time, ensuring the wiping process cannot be compromised by memory corruption vulnerabilities.",
        details: [
            "No garbage collector",
            "Compile-time guarantees",
            "Zero memory leaks"
        ]
    },
    {
        icon: "⚙️",
        title: "Systems Programming",
        description: "Direct hardware access, inline assembly, and bare-metal programming capabilities essential for bootable environments and low-level storage device control.",
        details: [
            "Direct hardware access",
            "Inline assembly support",
            "No runtime dependencies"
        ]
    },
    {
        icon: "🔄",
        title: "Fearless Concurrency",
        description: "Rust's ownership system prevents data races at compile time, enabling safe parallel wiping of multiple drives with optimal multi-threaded performance.",
        details: [
            "No data races",
            "Thread-safe by default",
            "Efficient parallelism"
        ]
    },
    {
        icon: "🔒",
        title: "Security by Design",
        description: "Rust's type system and borrow checker eliminate entire classes of security vulnerabilities, critical for tools handling sensitive data destruction.",
        details: [
            "Type safety",
            "No null pointer dereferences",
            "Safe error handling"
        ]
    },
    {
        icon: "🚀",
        title: "Modern Tooling",
        description: "Cargo package manager, built-in testing, documentation generation, and excellent cross-compilation support streamline development and deployment.",
        details: [
            "Integrated toolchain",
            "Cross-compilation",
            "Rich ecosystem"
        ]
    }
];

export const roadmapData = [
    {
        title: "Q1 2025 - Core Engine",
        description: "Complete bootloader and basic wiping algorithms. Support for SATA and NVMe drives with standard wiping patterns."
    },
    {
        title: "Q2 2025 - Beta Release",
        description: "Public beta with GUI interface, network reporting, and compliance certification features."
    },
    {
        title: "Q3 2025 - Enterprise Features",
        description: "Advanced features like selective wiping, batch processing, and enterprise management integration."
    },
    {
        title: "Q4 2025 - Full Release",
        description: "Production-ready release with full certification, 24/7 support, and global deployment capabilities."
    }
];

// Contact Section Data
export const contactMethods = [
    {
        icon: "📧",
        title: "Email",
        text: "contact@wiper.tech",
        subtext: "Response within 24 hours"
    },
    {
        icon: "📞",
        title: "Phone",
        text: "+91 98765 43210",
        subtext: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
        icon: "🏢",
        title: "Office",
        text: "Cyber City, Gurugram\nHaryana, India 122002",
        subtext: "By appointment only"
    },
    {
        icon: "🚨",
        title: "Emergency",
        text: "+91 99999 00000",
        subtext: "24/7 Critical Data Breaches"
    }
];

export const faqData = [
    {
        question: "How long does the wiping process take?",
        answer: "Wiping time depends on drive size and method. A 1TB SSD takes 2-4 hours with standard methods, while HDDs may take 6-12 hours for complete wiping."
    },
    {
        question: "Is the data really unrecoverable?",
        answer: "Yes, our military-grade algorithms ensure data is forensically unrecoverable. We provide verification certificates and guarantee complete data destruction."
    },
    {
        question: "Do you support all drive types?",
        answer: "WIPER supports HDDs, SSDs, NVMe drives, USB drives, and enterprise storage arrays across all major interfaces (SATA, PCIe, SAS, etc.)."
    },
    {
        question: "What compliance standards do you meet?",
        answer: "We meet DoD 5220.22-M, NIST SP 800-88, GDPR, HIPAA, SOX, and Indian IT Act requirements with full documentation and certificates."
    },
    {
        question: "Can I wipe multiple drives simultaneously?",
        answer: "Yes, our enterprise solutions support batch processing and parallel wiping of multiple drives with centralized monitoring and reporting."
    },
    {
        question: "Do you provide on-site services?",
        answer: "Enterprise customers can request on-site data destruction services with certified technicians and witnessed destruction processes."
    }
];