import type {
  PortfolioProject,
  ProjectFilterId,
  ProjectGalleryItem,
} from "@/types";

function productGallery(cover: string, title: string): ProjectGalleryItem[] {
  return [
    {
      src: cover,
      label: "Screenshot",
      alt: `${title} product screenshot`,
    },
  ];
}

/**
 * Single source of truth for portfolio projects.
 * Add a new entry here to surface it on the homepage and /projects/[slug].
 */
export const projects: PortfolioProject[] = [
  {
    id: "amana-tour",
    slug: "amana-tours",
    title: "Amana Tours & Travel",
    summary:
      "Travel booking platform for Hajj, Umrah, and custom tour packages.",
    description:
      "A production travel product that turns package discovery into confident booking — with clear itineraries, flexible plans, and a stack built for speed and maintainability.",
    category: "Full Stack",
    status: "Live",
    year: 2024,
    featured: true,
    coverImage: "/images/projects/amanatours.png",
    gallery: productGallery("/images/projects/amanatours.png", "Amana Tours & Travel"),
    liveUrl: "https://amanatoursandtravels.com/",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB"],
    filters: ["all", "full-stack", "frontend", "backend", "react", "nextjs", "nodejs"],
    trust: ["Production Ready", "Responsive", "Scalable Architecture"],
    stats: [
      { label: "Focus", value: "Booking UX" },
      { label: "Stack", value: "Next.js" },
      { label: "Type", value: "Full Stack" },
    ],
    meta: {
      role: "Full Stack Developer",
      industry: "Travel & Hospitality",
      teamSize: "Cross-functional product team",
      duration: "Ongoing product delivery",
      platform: "Web · Responsive",
    },
    caseStudy: {
      overview:
        "Amana Tours needed a digital product that could earn trust quickly — especially for high-intent travel decisions like Hajj, Umrah, and custom packages.",
      problem:
        "Package details were dense and unevenly presented, so visitors struggled to compare options and move toward enquiry with confidence.",
      difficulty:
        "The hard part was not rendering pages — it was compressing complex travel information into a calm, scannable experience without losing credibility or SEO reach.",
      approach:
        "I shaped a Next.js + TypeScript product surface with structured package presentation, enquiry-oriented CTAs, and Express/MongoDB services behind the UI.",
      approachWhy:
        "Next.js gave us SEO-friendly delivery and maintainable page composition, while a typed full-stack boundary reduced regressions as content and features expanded.",
      outcome:
        "The result is a clearer booking-oriented experience that presents packages as products — easier to scan, easier to trust, and easier to evolve.",
      responsibilities: [
        "Owned customer-facing UI architecture and package storytelling",
        "Implemented API-backed content and enquiry pathways",
        "Collaborated on launch priorities and iterative polish",
      ],
      features: [
        "Structured discovery for Hajj, Umrah, and tours",
        "Responsive decision-oriented package pages",
        "Clear service communication and enquiry CTAs",
        "Maintainable content structure for ongoing updates",
      ],
      challenges: [
        "Communicating dense itineraries without overwhelming users",
        "Keeping premium visuals fast on mobile networks",
        "Balancing marketing narrative with practical booking clarity",
      ],
      decisions: [
        {
          decision: "Next.js App-style composition",
          reason: "Needed SEO-ready pages and reusable section patterns for content growth.",
          tradeoff: "Slightly more framework structure than a static marketing site.",
        },
        {
          decision: "TypeScript across the product UI",
          reason: "Package and enquiry flows change often — type safety reduces silent breakage.",
          tradeoff: "Upfront typing cost for faster long-term iteration.",
        },
        {
          decision: "Separate Express + MongoDB services",
          reason: "Keeps content/ops concerns out of the presentation layer.",
          tradeoff: "Requires intentional API contracts and deployment coordination.",
        },
      ],
      architecture: [
        "Reusable page sections for package storytelling",
        "API-driven content and enquiry pathways",
        "MongoDB for flexible package and service data",
      ],
      architectureFlow: ["Client", "Next.js", "Express API", "MongoDB"],
      performance: [
        "Image-conscious layouts for large travel visuals",
        "Responsive-first structure to protect mobile experience",
        "Lean component patterns for snappy interaction",
      ],
      lessons: [
        "High-intent products need clarity more than decoration",
        "Type safety pays off quickly in content-heavy travel flows",
        "Reusable sections make marketing updates safer",
      ],
      impact: [
        {
          title: "User experience",
          description:
            "Visitors can compare packages with less friction and a clearer path to enquiry.",
        },
        {
          title: "Maintainability",
          description:
            "Section-based UI and typed boundaries make content and feature updates safer.",
        },
        {
          title: "Scalability",
          description:
            "The stack supports expanding package types and services without rewriting the shell.",
        },
        {
          title: "Business value",
          description:
            "A more trustworthy digital presence for high-consideration travel decisions.",
        },
      ],
    },
  },
  {
    id: "ubaky",
    slug: "ubaky",
    title: "Ubaky",
    summary: "Restaurant reservation product for Spain and Portugal.",
    description:
      "A food-tech booking experience focused on discoverability, availability, and a polished interface that feels ready for real diners — not just demos.",
    category: "Full Stack",
    status: "Live",
    year: 2024,
    featured: true,
    coverImage: "/images/projects/ubaky.png",
    gallery: productGallery("/images/projects/ubaky.png", "Ubaky"),
    liveUrl: "https://ubaky.com/home",
    stack: ["React", "TypeScript", "Redux Toolkit", "Ant Design", "Node.js"],
    filters: ["all", "full-stack", "frontend", "react", "nodejs", "dashboard"],
    trust: ["Production Ready", "Responsive", "Performance Focused"],
    stats: [
      { label: "Focus", value: "Reservations" },
      { label: "Region", value: "Iberia" },
      { label: "UI", value: "Product" },
    ],
    meta: {
      role: "Frontend / Full Stack Contributor",
      industry: "Food Tech",
      teamSize: "Product engineering team",
      duration: "Feature delivery cycles",
      platform: "Web · Mobile-first",
    },
    caseStudy: {
      overview:
        "Ubaky helps diners reserve tables across Spain and Portugal — a product where clarity in each booking step directly affects completion.",
      problem:
        "Reservation flows often feel cluttered or inconsistent, which increases drop-off before confirmation.",
      difficulty:
        "Multi-step booking state, availability feedback, and UI density had to stay understandable under real diner impatience.",
      approach:
        "I contributed React + TypeScript interfaces with Redux Toolkit for shared booking state and a design-system baseline for consistent actions.",
      approachWhy:
        "Predictable client state and reusable UI patterns reduce edge-case bugs in flows that users abandon quickly when confused.",
      outcome:
        "A more productized booking experience — clearer actions, more consistent screens, and safer state handling as features grew.",
      responsibilities: [
        "Implemented reservation-oriented interactive UI",
        "Structured shared client state with Redux Toolkit",
        "Supported frontend–backend integration for booking flows",
      ],
      features: [
        "Discovery and booking-oriented navigation",
        "Responsive layouts for mobile diner behavior",
        "Structured multi-step reservation interactions",
        "Polished product UI patterns",
      ],
      challenges: [
        "Keeping multi-step booking understandable",
        "Maintaining consistency across dense screens",
        "Handling API-driven state without brittle components",
      ],
      decisions: [
        {
          decision: "Redux Toolkit for shared booking state",
          reason: "Reservation steps need predictable, inspectable state transitions.",
          tradeoff: "More ceremony than local component state for simpler screens.",
        },
        {
          decision: "Design-system baseline (Ant Design)",
          reason: "Accelerates consistent UI without inventing every control.",
          tradeoff: "Requires discipline to avoid generic, overloaded interfaces.",
        },
        {
          decision: "TypeScript-first React UI",
          reason: "Protects complex booking props and API contracts as the product evolves.",
          tradeoff: "Slightly slower initial wiring for safer refactors later.",
        },
      ],
      architecture: [
        "Component-driven React UI with shared state slices",
        "API-integrated booking pathways",
        "Reusable form and feedback patterns",
      ],
      architectureFlow: ["Client", "React App", "Node API", "Data Services"],
      performance: [
        "Avoided unnecessary re-renders in interactive flows",
        "Kept screens focused to reduce cognitive and render cost",
      ],
      lessons: [
        "Reservation products succeed when each step feels obvious",
        "Shared state needs discipline as features grow",
        "Design-system reuse accelerates trustworthy UI",
      ],
      impact: [
        {
          title: "User experience",
          description:
            "Diners encounter clearer booking actions and less visual noise during reservation.",
        },
        {
          title: "Maintainability",
          description:
            "Shared state patterns make multi-step flows easier to extend safely.",
        },
        {
          title: "Scalability",
          description:
            "Consistent UI primitives support growth across restaurant and booking surfaces.",
        },
        {
          title: "Business value",
          description:
            "A more completeable booking journey supports the product’s core conversion path.",
        },
      ],
    },
  },
  {
    id: "big-bazar",
    slug: "amana-big-bazar",
    title: "Amana Big Bazar",
    summary: "E-commerce platform for category browsing, cart, and delivery.",
    description:
      "A commerce experience built for real catalog browsing — search, filters, cart flow, and delivery-oriented journeys that support everyday retail operations.",
    category: "E-Commerce",
    status: "Live",
    year: 2023,
    featured: true,
    coverImage: "/images/projects/bigBazar.png",
    gallery: productGallery("/images/projects/bigBazar.png", "Amana Big Bazar"),
    liveUrl: "https://amanabigbazar.com/",
    stack: ["Vue", "JavaScript", "Node.js", "Express", "Bootstrap", "SCSS"],
    filters: ["all", "full-stack", "frontend", "backend", "nodejs"],
    trust: ["Production Ready", "Responsive", "Scalable Architecture"],
    stats: [
      { label: "Type", value: "E-Commerce" },
      { label: "Flow", value: "Cart → Delivery" },
      { label: "Stack", value: "Vue + Node" },
    ],
    meta: {
      role: "Full Stack Developer",
      industry: "Retail / E-Commerce",
      teamSize: "Engineering + operations partners",
      duration: "Multi-phase delivery",
      platform: "Web · Responsive",
    },
    caseStudy: {
      overview:
        "Amana Big Bazar needed a storefront that could handle everyday retail browsing — categories, search, cart, and delivery-oriented journeys.",
      problem:
        "Without strong navigation and a dependable cart path, catalogs become unusable and purchase intent drops.",
      difficulty:
        "Commerce UI fails first at information architecture: finding products, trusting the cart, and understanding next steps.",
      approach:
        "I helped deliver a Vue storefront with Express-backed commerce workflows, focusing on category clarity and practical purchase flows.",
      approachWhy:
        "Separating storefront concerns from API responsibilities kept browsing UX iterative while backend operations stayed flexible.",
      outcome:
        "A production e-commerce experience oriented around real shopping behavior rather than decorative catalog pages.",
      responsibilities: [
        "Built category-driven browsing and filter experiences",
        "Implemented cart and delivery-oriented UI flows",
        "Supported backend integration for commerce operations",
      ],
      features: [
        "Category-based product display",
        "Search and filter experiences",
        "Add-to-cart and delivery-oriented pathways",
        "Responsive storefront layouts",
      ],
      challenges: [
        "Organizing large catalogs without burying products",
        "Keeping cart interactions clear and reliable",
        "Maintaining consistency across commerce pages",
      ],
      decisions: [
        {
          decision: "Category-first browsing model",
          reason: "Customers already think in categories — match mental models first.",
          tradeoff: "Requires careful taxonomy work to avoid dead-end paths.",
        },
        {
          decision: "Vue storefront + Express APIs",
          reason: "Allowed independent iteration of UI and operational data flows.",
          tradeoff: "Needs clear contracts between client and services.",
        },
        {
          decision: "Mobile-priority responsive layouts",
          reason: "Everyday shopping behavior is heavily mobile.",
          tradeoff: "Desktop density is intentionally simpler than a dense admin grid.",
        },
      ],
      architecture: [
        "Vue storefront with reusable commerce components",
        "Express APIs for catalog and operational data",
        "SCSS/Bootstrap foundation for rapid responsive UI",
      ],
      architectureFlow: ["Client", "Vue Storefront", "Express API", "Commerce Data"],
      performance: [
        "Lean page composition for catalog browsing",
        "Practical responsive treatment for product visuals",
      ],
      lessons: [
        "Commerce UX fails first at navigation, not checkout polish",
        "Reusable components reduce inconsistency across catalog pages",
        "Backend clarity makes storefront iteration safer",
      ],
      impact: [
        {
          title: "User experience",
          description:
            "Shoppers can browse by category and move through cart-oriented steps with less confusion.",
        },
        {
          title: "Maintainability",
          description:
            "Shared commerce components reduce duplicated storefront patterns.",
        },
        {
          title: "Scalability",
          description:
            "API separation supports catalog growth without rewriting the client shell.",
        },
        {
          title: "Business value",
          description:
            "A usable digital storefront for everyday retail discovery and purchase intent.",
        },
      ],
    },
  },
  {
    id: "amana-pos",
    slug: "amana-pos",
    title: "Amana POS System",
    summary: "Retail operations software for sales, inventory, and reporting.",
    description:
      "An internal-facing retail system focused on accuracy and speed — helping teams manage transactions, stock, and reporting from one operational surface.",
    category: "Dashboard",
    status: "Case Study",
    year: 2023,
    featured: true,
    coverImage: "/images/projects/pos-show.png",
    gallery: productGallery("/images/projects/pos-show.png", "Amana POS System"),
    liveUrl: "https://manahidbhuiyan.github.io/amana_admin-pannel_show/",
    stack: ["Vue", "Node.js", "Express", "MongoDB", "EJS", "JavaScript"],
    filters: ["all", "full-stack", "backend", "nodejs", "dashboard"],
    trust: ["Production Ready", "Scalable Architecture", "Performance Focused"],
    stats: [
      { label: "Type", value: "POS" },
      { label: "Users", value: "Internal" },
      { label: "Data", value: "MongoDB" },
    ],
    meta: {
      role: "Full Stack Developer",
      industry: "Retail Operations",
      teamSize: "POS / software collaboration",
      duration: "Multi-release delivery",
      platform: "Web · Admin / POS",
    },
    caseStudy: {
      overview:
        "The Amana POS System consolidates sales, inventory, and reporting into an operational tool built for daily accuracy.",
      problem:
        "Disconnected workflows create delays and errors when staff move between sales, stock, and reporting contexts.",
      difficulty:
        "Operational UI must stay dense enough to be useful and calm enough to prevent mistakes under pressure.",
      approach:
        "I contributed full-stack admin/POS surfaces oriented around real staff tasks, backed by Express services and MongoDB records.",
      approachWhy:
        "Task completion beats visual spectacle in internal tools — architecture and UI should follow the work, not a marketing template.",
      outcome:
        "A practical operational interface that supports retail day-to-day work with clearer ownership of sales and inventory concerns.",
      responsibilities: [
        "Implemented operational and admin UI surfaces",
        "Supported API and data flows for retail operations",
        "Collaborated with the POS team on feature delivery",
      ],
      features: [
        "Sales and transaction-oriented interfaces",
        "Inventory-aware operational views",
        "Reporting-oriented admin surfaces",
        "Practical dashboard navigation for staff use",
      ],
      challenges: [
        "Designing dense operational UI without overload",
        "Keeping data interactions trustworthy under daily use",
        "Balancing feature depth with interface speed",
      ],
      decisions: [
        {
          decision: "Task-first operational UI",
          reason: "Staff success is measured in speed and accuracy, not novelty.",
          tradeoff: "Less decorative polish than customer-facing marketing sites.",
        },
        {
          decision: "MongoDB for operational records",
          reason: "Flexible documents fit evolving retail workflows.",
          tradeoff: "Requires careful schema discipline for reporting consistency.",
        },
        {
          decision: "Modular sales / inventory / reporting views",
          reason: "Mirrors how teams already think about the work.",
          tradeoff: "Shared navigation and permissions need ongoing coordination.",
        },
      ],
      architecture: [
        "Vue/admin UI connected to Express services",
        "MongoDB-backed operational data",
        "Modular views for sales, inventory, and reporting",
      ],
      architectureFlow: ["Staff Client", "Vue Admin", "Express API", "MongoDB"],
      performance: [
        "Focused UI states for faster staff interaction",
        "Avoided unnecessary visual weight in dense dashboards",
      ],
      lessons: [
        "Internal tools succeed when every click saves time",
        "Operational clarity beats decorative UI",
        "Cross-team collaboration improves real-world fit",
      ],
      impact: [
        {
          title: "User experience",
          description:
            "Staff workflows stay closer to one coherent operational surface.",
        },
        {
          title: "Maintainability",
          description:
            "Modular views make it easier to extend sales, stock, or reporting without entanglement.",
        },
        {
          title: "Scalability",
          description:
            "API + document storage support evolving retail process needs.",
        },
        {
          title: "Business value",
          description:
            "Better operational clarity reduces friction in daily retail execution.",
        },
      ],
    },
  },
  {
    id: "gatekeeper",
    slug: "gatekeeper",
    title: "Gatekeeper Real Estate",
    summary: "Live property platform with search-driven listings.",
    description:
      "A responsive real-estate experience built to help buyers explore listings quickly — with search-first navigation and a clean, trustworthy presentation.",
    category: "Frontend",
    status: "Live",
    year: 2023,
    featured: true,
    coverImage: "/images/projects/gatekeeper.png",
    gallery: productGallery("/images/projects/gatekeeper.png", "Gatekeeper Real Estate"),
    liveUrl: "https://www.gatekeeper.co.uk/",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    filters: ["all", "frontend", "uiux"],
    trust: ["Production Ready", "Responsive", "Accessible"],
    stats: [
      { label: "Type", value: "Real Estate" },
      { label: "Focus", value: "Search UX" },
      { label: "Status", value: "Live" },
    ],
    meta: {
      role: "Frontend Developer",
      industry: "Real Estate",
      teamSize: "Client delivery collaboration",
      duration: "Project engagement",
      platform: "Web · Responsive",
    },
    caseStudy: {
      overview:
        "Gatekeeper presents property listings in a live experience where trust and scanability determine whether buyers continue exploring.",
      problem:
        "Property seekers abandon experiences that feel cluttered, slow, or hard to scan — especially on mobile.",
      difficulty:
        "Listing pages carry rich content; the engineering challenge is hierarchy, not just styling.",
      approach:
        "I focused on responsive listing presentation and search-oriented browsing with a clean Tailwind-driven layout system.",
      approachWhy:
        "Utility-first layout control made it faster to keep spacing and hierarchy consistent across breakpoints.",
      outcome:
        "A clearer, more trustworthy listing experience that prioritizes scanning and mobile usability.",
      responsibilities: [
        "Implemented responsive listing and marketing interfaces",
        "Refined visual hierarchy for property discovery",
        "Improved cross-device usability",
      ],
      features: [
        "Property listing presentation",
        "Search-oriented browsing patterns",
        "Responsive layouts for mobile-first visitors",
        "Clean visual system for trust and clarity",
      ],
      challenges: [
        "Presenting rich property content without visual noise",
        "Keeping mobile listing scans fast and readable",
      ],
      decisions: [
        {
          decision: "Scan-first listing hierarchy",
          reason: "Buyers decide in seconds whether a listing deserves attention.",
          tradeoff: "Less simultaneous detail above the fold.",
        },
        {
          decision: "Tailwind utility layout system",
          reason: "Keeps responsive spacing consistent and fast to adjust.",
          tradeoff: "Requires naming discipline to avoid messy class strings.",
        },
      ],
      architecture: [
        "Componentized frontend sections for listing surfaces",
        "Responsive layout system with Tailwind utilities",
      ],
      architectureFlow: ["Client", "Responsive Frontend", "Listing Content"],
      performance: [
        "Lightweight interaction model",
        "Image-aware listing presentation",
      ],
      lessons: [
        "Real-estate trust begins with clarity",
        "Mobile scanning behavior should drive listing layout",
      ],
      impact: [
        {
          title: "User experience",
          description:
            "Listings are easier to scan and evaluate across devices.",
        },
        {
          title: "Maintainability",
          description:
            "Consistent layout utilities reduce one-off responsive fixes.",
        },
        {
          title: "Scalability",
          description:
            "Section patterns support additional listing and marketing surfaces.",
        },
        {
          title: "Business value",
          description:
            "A clearer property presentation strengthens buyer confidence.",
        },
      ],
    },
  },
  {
    id: "amana-city",
    slug: "uttorayon-amana-city",
    title: "Uttorayon Amana City",
    summary: "Brand and services site for an Amana Group sister concern.",
    description:
      "An informative brand website that presents services, categories, and editorial content with a clear structure for visitors evaluating the business.",
    category: "Frontend",
    status: "Live",
    year: 2022,
    featured: true,
    coverImage: "/images/projects/amanaCity.png",
    gallery: productGallery(
      "/images/projects/amanaCity.png",
      "Uttorayon Amana City",
    ),
    liveUrl: "https://uttorayonamanacity.com/",
    stack: ["Vue.js", "Bootstrap", "JavaScript", "HTML", "CSS"],
    filters: ["all", "frontend", "uiux"],
    trust: ["Production Ready", "Responsive", "SEO Optimized"],
    stats: [
      { label: "Type", value: "Brand Site" },
      { label: "Focus", value: "Services" },
      { label: "Stack", value: "Vue" },
    ],
    meta: {
      role: "Frontend Developer",
      industry: "Corporate Brand / Real Estate",
      teamSize: "Client-facing delivery",
      duration: "Project delivery",
      platform: "Web · Responsive",
    },
    caseStudy: {
      overview:
        "Uttorayon Amana City needed a polished informative site to communicate brand credibility and services clearly.",
      problem:
        "Without a structured digital presence, offerings and brand trust were harder for new visitors to evaluate.",
      difficulty:
        "Brand sites often become brochure dumps — the challenge was organizing services around visitor questions.",
      approach:
        "I built a Vue-based marketing site with section composition for services, categories, and editorial content.",
      approachWhy:
        "Componentized sections keep marketing updates safer and make the information architecture easier to evolve.",
      outcome:
        "A scannable brand experience where services are easier to find and the business feels more credible online.",
      responsibilities: [
        "Implemented brand and service page layouts",
        "Organized category and content sections",
        "Delivered responsive behavior across devices",
      ],
      features: [
        "Brand storytelling surfaces",
        "Service and category presentation",
        "Editorial/content sections",
        "Responsive marketing layouts",
      ],
      challenges: [
        "Balancing brand presentation with practical service clarity",
        "Keeping multi-section marketing pages coherent",
      ],
      decisions: [
        {
          decision: "Visitor-question page structure",
          reason: "People look for services and trust signals, not org charts.",
          tradeoff: "Less room for purely decorative brand moments.",
        },
        {
          decision: "Vue section composition",
          reason: "Reusable blocks make content updates and expansion safer.",
          tradeoff: "Requires initial component boundaries instead of one-off pages.",
        },
      ],
      architecture: [
        "Section-based Vue page composition",
        "Bootstrap-assisted responsive foundation",
      ],
      architectureFlow: ["Client", "Vue Site", "Content Sections"],
      performance: [
        "Straightforward page weight for marketing content",
        "Responsive media treatment for brand visuals",
      ],
      lessons: [
        "Brand sites work best when services are easy to find",
        "Reusable sections keep marketing updates safer",
      ],
      impact: [
        {
          title: "User experience",
          description:
            "Visitors can locate services and brand context with less hunting.",
        },
        {
          title: "Maintainability",
          description:
            "Section composition reduces fragile one-off marketing pages.",
        },
        {
          title: "Scalability",
          description:
            "New service or content blocks can plug into the existing structure.",
        },
        {
          title: "Business value",
          description:
            "A clearer digital presence supports credibility and service discovery.",
        },
      ],
    },
  },
];

export const projectFilters: { id: ProjectFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "nodejs", label: "Node.js" },
  { id: "uiux", label: "UI/UX" },
  { id: "dashboard", label: "Dashboard" },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return { previous: previous ?? null, next: next ?? null };
}

export function filterProjects(
  list: PortfolioProject[],
  filterId: ProjectFilterId,
) {
  if (filterId === "all") return list;
  return list.filter((project) => project.filters.includes(filterId));
}
