// ─────────────────────────────────────────────────────────────
// Edit this file to update your portfolio content.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Kanaya Lal Khatri",
  firstName: "Kanaya Lal",
  title: "Senior Mobile Application Developer",
  tagline: "Android · Kotlin · Jetpack Compose · Flutter · Multi-Platform",
  location: "Karachi, Pakistan",
  email: "kanayalal.khatri7@gmail.com",
  phone: "+92 336 3762106",
  linkedin: "https://www.linkedin.com/in/kanayalal-khatri", // update with your real URL
  github: "https://github.com/kanayalalkhatri", // update with your real URL
  resumeUrl: "/Kanaya_Lal_Khatri_Senior_Mobile_Developer.pdf",
  intro:
    "I build secure, scalable, production-grade mobile applications for banking, fintech, and digital onboarding. With 7+ years of experience, I specialize in biometric authentication, KYC, OCR, and on-device ML — delivering polished apps for enterprise clients across Pakistan, UAE, and Europe.",
  about: [
    "I'm a Senior Mobile Application Developer with 7+ years of experience designing, developing, and shipping high-performance Android and cross-platform apps. My core stack is Kotlin, Java, Jetpack Compose, Flutter, and Dart, backed by deep knowledge of Clean Architecture, MVVM, and modular design.",
    "I've led cross-functional mobile teams and delivered apps integrating biometric authentication, KYC, OCR, and machine-learning models. From Tier-1 banking apps to AI-powered digital onboarding, I focus on security, performance, and long-term maintainability.",
  ],
  stats: [
    { value: "7+", label: "Years Experience" },
    { value: "20+", label: "Apps Delivered" },
    { value: "3", label: "Regions (PK · UAE · EU)" },
    { value: "98%", label: "ID Verification Accuracy" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "DivDash LLC",
    role: "Senior Android Developer",
    period: "Sep 2025 – Present",
    points: [
      "Led end-to-end development of KYC and Digital Onboarding solutions — Face Liveness detection, OCR document scanning, and biometric authentication — reducing verification time by 35%.",
      "Architected production-grade Android apps from scratch using MVVM and Clean Architecture for scalability and maintainability.",
      "Built reusable SDK-based Android solutions enabling seamless third-party integrations across multiple client products.",
      "Integrated REST APIs and OAuth-based secure auth, optimizing real-time biometric and image-processing pipelines.",
    ],
  },
  {
    company: "Veripark",
    role: "Senior Mobile Developer (Android)",
    period: "Sep 2023 – Feb 2025",
    location: "Dubai, UAE (Remote)",
    points: [
      "Developed secure mobile banking features for Tier-1 banks with SSL Pinning, jailbreak/root detection, and biometric authentication.",
      "Implemented digital onboarding journeys with liveness detection and document verification for retail banking clients.",
      "Led modular MVVM development using Kotlin Coroutines, Flow, and Jetpack libraries across multiple banking products.",
      "Worked within the Veripark ES5 framework, customizing banking modules for clients in the MEA region.",
    ],
  },
  {
    company: "Love for Data",
    role: "Team Lead – Mobile App Development",
    period: "Jun 2022 – Sep 2023",
    points: [
      "Led Android and Flutter teams delivering AI-powered apps for digital identity and onboarding.",
      "Integrated and optimized YOLO object-detection models for real-time computer vision on Android.",
      "Implemented on-device image processing and ML inference optimizations, reducing latency by ~40% on mid-range hardware.",
      "Mentored junior developers and established coding standards and Git workflows.",
    ],
  },
  {
    company: "Symmetry Group",
    role: "Senior Android Developer",
    period: "Apr 2021 – Jun 2022",
    points: [
      "Led a cross-platform team building secure mobile banking apps for enterprise clients.",
      "Migrated legacy codebase from MVP (Java) to MVVM (Kotlin), improving architecture and testability.",
      "Implemented SEAL encryption, SSL pinning, jailbreak detection, and custom Cordova plugins.",
      "Drove CI/CD setup using Jenkins and Fastlane, and owned Play Store releases.",
    ],
  },
  {
    company: "Intersys",
    role: "Senior Android Developer",
    period: "Feb 2019 – Mar 2021",
    points: [
      "Optimized Android performance and integrated multiple third-party libraries.",
      "Conducted security and vulnerability testing to ensure compliance with industry standards.",
      "Contributed to Flutter cross-platform development with Clean Architecture and responsive UI.",
    ],
  },
  {
    company: "Celeritas",
    role: "Associate Android Developer",
    period: "Jan 2018 – Jan 2019",
    points: [
      "Developed native Android and Flutter apps with a focus on performance and clean code.",
      "Spearheaded coding standards and code reviews, improving code quality by 30% and reducing production bugs by 20%.",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  period?: string;
  description: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
  // Optional real screenshot. Drop a PNG into /public/projects/ and set the path,
  // e.g. image: "/projects/angle.png". If omitted, a styled mock screen is shown.
  image?: string;
  // Up to 3 real screenshots for the angled phone trio, e.g.
  // shots: ["/projects/angle/1.png", "/projects/angle/2.png", "/projects/angle/3.png"]
  shots?: string[];
  // Optional wide marketing banner (e.g. a Figma render) shown full-width
  // in the featured band instead of the phone trio.
  banner?: string;
  logo?: string; // real app launcher icon, shown as brand badge on the mock screen
  colors: [string, string]; // phone-mockup gradient [from, to]
  screenIcon: string; // emoji fallback shown on the mock app screen
  screenLabel: string; // short label on the mock app screen
};

export const projects: Project[] = [
  {
    name: "Yapı Kredi Nederland",
    category: "Mobile Banking App",
    period: "Nov 2023 – Feb 2025",
    featured: true,
    colors: ["#7c83ff", "#4f46e5"],
    screenIcon: "🏦",
    screenLabel: "Digital Onboarding",
    description:
      "Digital onboarding journey letting customers open bank accounts entirely from mobile, eliminating in-branch visits — fully compliant with European banking regulations.",
    highlights: [
      "End-to-end mobile account opening",
      "Biometric login & secure authentication",
      "Portfolio overview: accounts, deposits, transactions",
    ],
    tags: ["Kotlin", "MVVM", "Biometric", "REST API", "Veripark ES5"],
  },
  {
    name: "InstaScan",
    category: "Biometric Verification & Onboarding",
    featured: true,
    colors: ["#64ffda", "#0ea5a3"],
    screenIcon: "🔐",
    screenLabel: "Biometric Verify",
    description:
      "Biometric verification app integrating TensorFlow Lite models for fingerprint and NIC card detection with 98% identity-verification accuracy.",
    highlights: [
      "On-device TFLite fingerprint & NIC detection",
      "Streamlined onboarding via REST APIs (-30% time)",
      "Real-time biometric validation",
    ],
    tags: ["Kotlin", "TensorFlow Lite", "OCR", "Computer Vision"],
  },
  {
    name: "Angle",
    category: "Digital Wallet & Loyalty",
    logo: "/projects/icons/angle.png",
    period: "Dec 2021 – Feb 2023",
    featured: true,
    colors: ["#f59e0b", "#ef4444"],
    screenIcon: "💳",
    screenLabel: "Wallet & Loyalty",
    description:
      "Mobile commerce platform enabling users to purchase goods, redeem vouchers, and transfer money with 20–30% discounts.",
    highlights: [
      "Digital wallet — reduced cash reliance ~60%",
      "Vouchers & peer-to-peer money transfer",
      "Loyalty & discounts engine",
    ],
    tags: ["Android", "Kotlin", "Wallet", "Payments"],
  },
  {
    name: "Salaam-Nestlé (Frontier BNPL)",
    category: "Fintech Mobile App",
    period: "May 2022 – Dec 2022",
    colors: ["#10b981", "#059669"],
    screenIcon: "🛒",
    screenLabel: "Buy Now Pay Later",
    description:
      "Buy Now Pay Later (BNPL) fintech app for the Pakistani market — achieved 150% increase in customer engagement and doubled revenue in year one.",
    highlights: [
      "Full BNPL flow & credit journey",
      "150% engagement growth",
      "Doubled first-year revenue",
    ],
    tags: ["Android", "Kotlin", "Fintech", "REST API"],
  },
  {
    name: "Smart Attendance",
    category: "Face Recognition App",
    period: "Dec 2022 – Feb 2023",
    colors: ["#06b6d4", "#3b82f6"],
    screenIcon: "🙂",
    screenLabel: "Face Attendance",
    description:
      "Flutter employee-attendance app using ML Kit and on-device facial recognition, reducing manual attendance work by 40%.",
    highlights: [
      "On-device facial recognition (ML Kit)",
      "GPS-verified punch-ins",
      "10–20% accuracy improvement",
    ],
    tags: ["Flutter", "Dart", "ML Kit", "Face Recognition"],
  },
  {
    name: "KokTailz / Quiet Meets",
    category: "Location-Based Social App",
    period: "Jun 2019 – Dec 2019",
    colors: ["#ec4899", "#8b5cf6"],
    screenIcon: "📍",
    screenLabel: "Nearby Matches",
    description:
      "Flutter location-based social app letting users discover and connect with nearby matches using personalized preference-based matching.",
    highlights: [
      "Location-based discovery",
      "Preference matching (location, age, gender)",
      "Realtime connections",
    ],
    tags: ["Flutter", "Dart", "Maps", "Realtime"],
  },

  // ── Additional apps from my workspace ─────────────────────────
  {
    name: "Idenex IDP",
    category: "Digital Identity / Identity Provider",
    logo: "/projects/icons/idenex-idp.webp",
    colors: ["#6366f1", "#4338ca"],
    screenIcon: "🪪",
    screenLabel: "Identity Provider",
    description:
      "An Identity Provider (IdP) Android app for issuing and managing verifiable digital identities and mobile credentials, with secure OAuth-based authentication.",
    highlights: [
      "Issue & manage mobile digital IDs",
      "OAuth 2.0 secure authentication",
      "ISO mDoc credential support",
    ],
    tags: ["Kotlin", "OAuth 2.0", "mDoc", "Digital ID"],
  },
  {
    name: "Verifier App",
    category: "Credential Verification",
    logo: "/projects/icons/verifier.webp",
    colors: ["#22d3ee", "#0891b2"],
    screenIcon: "✅",
    screenLabel: "Credential Verify",
    description:
      "A verifier app that reads and validates mobile credentials / mDL (mobile driving licence) over NFC and BLE, confirming authenticity in real time.",
    highlights: [
      "Reads ISO 18013-5 mDoc / mDL",
      "NFC & BLE credential exchange",
      "Real-time authenticity validation",
    ],
    tags: ["Kotlin", "mDoc / mDL", "NFC", "BLE"],
  },
  {
    name: "Idenex KYC Agent",
    category: "KYC & Onboarding Platform",
    logo: "/projects/icons/kyc-agent.webp",
    colors: ["#14b8a6", "#0d9488"],
    screenIcon: "🧾",
    screenLabel: "KYC Onboarding",
    description:
      "A modular KYC agent platform powering customer onboarding — face liveness, document OCR, and identity verification — built with a multi-module clean architecture.",
    highlights: [
      "Face liveness & document OCR",
      "Multi-module clean architecture",
      "Reusable across multiple client products",
    ],
    tags: ["Kotlin", "Face Liveness", "OCR", "Multi-Module"],
  },
  {
    name: "Quepass",
    category: "Event Access & Ticketing",
    logo: "/projects/icons/quepass.webp",
    colors: ["#f43f5e", "#be123c"],
    screenIcon: "🎟️",
    screenLabel: "Event Access",
    description:
      "An event access and ticketing app enabling QR-based check-in, pass management, and real-time attendee validation for events.",
    highlights: [
      "QR-based event check-in",
      "Digital pass management",
      "Real-time attendee validation",
    ],
    tags: ["Kotlin", "Android", "QR Scan", "Realtime"],
  },
  {
    name: "Idenex VPN",
    category: "Security / VPN",
    logo: "/projects/icons/idenex-vpn.webp",
    colors: ["#0ea5e9", "#1d4ed8"],
    screenIcon: "🛡️",
    screenLabel: "Secure VPN",
    description:
      "A secure VPN Android app providing encrypted tunneling, server selection, and privacy-focused connection management.",
    highlights: [
      "Encrypted VPN tunneling",
      "Multi-server selection",
      "Privacy-first connection handling",
    ],
    tags: ["Kotlin", "Networking", "Security", "VPN"],
  },
  {
    name: "Finger Detection",
    category: "Biometrics / On-Device ML",
    featured: true,
    logo: "/projects/icons/finger-detection.webp",
    shots: [
      "/projects/finger-detection/1.png",
      "/projects/finger-detection/2.png",
      "/projects/finger-detection/3.png",
    ],
    colors: ["#a855f7", "#7c3aed"],
    screenIcon: "👆",
    screenLabel: "Fingerprint ML",
    description:
      "An on-device fingerprint detection app using TensorFlow Lite and computer vision to capture and validate fingerprints from the camera.",
    highlights: [
      "TFLite fingerprint detection",
      "Camera-based capture & validation",
      "On-device, offline inference",
    ],
    tags: ["Kotlin", "TensorFlow Lite", "Computer Vision", "Biometrics"],
  },
  {
    name: "Recovery Driver",
    category: "Ride / Field Service — Driver App",
    logo: "/projects/icons/recovery-driver.webp",
    colors: ["#f97316", "#ea580c"],
    screenIcon: "🚖",
    screenLabel: "Driver Dashboard",
    description:
      "The driver-side app for a vehicle recovery / roadside-assistance service — receive job requests, navigate to the rider, and update job status with live GPS location sharing.",
    highlights: [
      "Accept & manage job requests",
      "Turn-by-turn navigation to rider",
      "Live location sharing & status updates",
    ],
    tags: ["Kotlin", "Google Maps", "GPS", "Realtime"],
  },
  {
    name: "Recovery Rider",
    category: "Ride / Field Service — Client App",
    featured: true,
    logo: "/projects/icons/recovery-rider.webp",
    shots: [
      "/projects/recovery-rider/1.png",
      "/projects/recovery-rider/2.png",
      "/projects/recovery-rider/3.png",
    ],
    colors: ["#2563eb", "#1d4ed8"],
    screenIcon: "📱",
    screenLabel: "Request a Recovery",
    description:
      "The rider/client-side app for the recovery service — request roadside assistance, track the assigned driver live on the map, and follow the job from request to completion.",
    highlights: [
      "Request recovery / roadside help",
      "Live driver tracking on map",
      "Trip status & history",
    ],
    tags: ["Kotlin", "Google Maps", "GPS", "Realtime"],
  },
  {
    name: "PulseMatch",
    category: "Social / Matchmaking",
    featured: true,
    logo: "/projects/icons/pulsematch.webp",
    shots: [
      "/projects/pulse-match/1.png",
      "/projects/pulse-match/2.png",
    ],
    banner: "/projects/pulse-match/banner.png",
    colors: ["#f97316", "#e11d48"],
    screenIcon: "💜",
    screenLabel: "Find Matches",
    description:
      "A social matchmaking app that connects users based on shared interests and preferences, with real-time chat and discovery.",
    highlights: [
      "Preference-based matching",
      "Real-time chat & discovery",
      "Profile & interests management",
    ],
    tags: ["Kotlin", "Android", "Realtime", "Social"],
  },
  {
    name: "Online Library",
    category: "E-Learning / Books",
    logo: "/projects/icons/online-library.webp",
    colors: ["#10b981", "#047857"],
    screenIcon: "📚",
    screenLabel: "Read & Borrow",
    description:
      "A digital library app for browsing, borrowing, and reading books, with search, categories, and offline reading lists.",
    highlights: [
      "Browse & borrow catalog",
      "Search & category filters",
      "Offline reading list (Room)",
    ],
    tags: ["Kotlin", "Android", "REST API", "Room"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Kotlin", "Java", "Dart", "SQL", "XML"],
  },
  {
    category: "Mobile & UI",
    items: ["Android SDK", "Jetpack Compose", "Flutter", "Android Jetpack"],
  },
  {
    category: "Architecture",
    items: ["MVVM", "MVI", "Clean Architecture", "Multi-Module", "VIPER"],
  },
  {
    category: "Libraries",
    items: ["Hilt / Dagger 2", "Retrofit", "Room", "Coroutines", "Flow", "WorkManager", "GraphQL"],
  },
  {
    category: "Security & Auth",
    items: ["SSL Pinning", "Biometric Auth", "Root Detection", "OAuth 2.0", "JWT", "Encryption"],
  },
  {
    category: "AI / ML",
    items: ["TensorFlow Lite", "ML Kit", "YOLO", "OCR", "On-Device Inference"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Jenkins", "Fastlane", "Firebase", "Crashlytics", "Play Console"],
  },
];

export const education = [
  {
    school: "Hamdard University, Karachi",
    degree: "B.E. — Computer Systems Engineering",
    period: "2012 – 2016",
  },
];

export const awards = [
  "Prime Minister's ICT Scholarship Program (2012) — four-year merit-based scholarship for academic excellence in Computer Systems Engineering.",
];
