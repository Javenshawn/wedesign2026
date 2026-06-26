import type { BlogPost, PackageTier, PortfolioItem, Project } from "@/lib/types";

export const packages: PackageTier[] = [
  {
    id: "economy",
    name: "Economy",
    originalPrice: 299,
    price: 199,
    savings: "Save $100",
    delivery: "7-Day Delivery",
    features: [
      "3 Original Logo Concepts",
      "2 Revision Rounds",
      "High-Resolution Files (PNG, JPG)",
      "Basic Brand Guidelines",
      "7-Day Delivery",
      "Email Support"
    ]
  },
  {
    id: "business",
    name: "Business",
    originalPrice: 599,
    price: 399,
    savings: "Save $200",
    badge: "Most Popular",
    delivery: "3-Day Rush Delivery",
    features: [
      "5 Original Logo Concepts",
      "Unlimited Revisions",
      "High-Resolution Files (PNG, JPG, SVG, PDF)",
      "Complete Brand Guidelines",
      "Business Card Design",
      "Social Media Kit",
      "3-Day Rush Delivery",
      "Priority Support"
    ]
  },
  {
    id: "private-jet",
    name: "Private Jet",
    originalPrice: 1199,
    price: 799,
    savings: "Save $400",
    delivery: "24-Hour Rush Delivery",
    features: [
      "10 Original Logo Concepts",
      "Unlimited Revisions",
      "All File Formats + Source Files",
      "Premium Brand Guidelines",
      "Complete Stationery Suite",
      "Social Media & Web Kit",
      "Trademark Research",
      "24-Hour Rush Delivery",
      "Dedicated Account Manager",
      "1-on-1 Design Consultation"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "WD-2024-0855",
    client: "Sky Airlines",
    title: "Airline Identity",
    style: "Premium Motion",
    category: "Private Jet",
    status: "in progress",
    progress: 65,
    designer: "Emma Johnson",
    eta: "28h 15m",
    updated: "2 hours ago",
    description: "A polished aviation mark with speed, trust, and elevated service."
  },
  {
    id: "WD-2024-0856",
    client: "Fresh Mart",
    title: "Grocery Store Logo",
    style: "Organic Natural",
    category: "Economy",
    status: "completed",
    progress: 100,
    designer: "Alex Cooper",
    eta: "Delivered",
    updated: "30 minutes ago",
    description: "A friendly grocery identity using fresh color and rounded typography."
  },
  {
    id: "WD-2024-0857",
    client: "Digital Dynamics",
    title: "Tech Startup Brand",
    style: "Modern Minimalist",
    category: "Business",
    status: "review",
    progress: 88,
    designer: "Sophie Martinez",
    eta: "8h 33m",
    updated: "1 hour ago",
    description: "A clean AI startup identity system with scalable icon geometry."
  },
  {
    id: "WD-2024-0858",
    client: "Ocean View Resort",
    title: "Luxury Resort Logo",
    style: "Coastal Luxury",
    category: "Private Jet",
    status: "in progress",
    progress: 54,
    designer: "Ryan Taylor",
    eta: "41h 22m",
    updated: "3 hours ago",
    description: "A resort brand mark balancing calm hospitality and premium service."
  },
  {
    id: "WD-2024-0859",
    client: "Pure Wellness",
    title: "Spa & Wellness Brand",
    style: "Soft Trust",
    category: "Business",
    status: "revision",
    progress: 72,
    designer: "Maya Patel",
    eta: "19h 45m",
    updated: "4 hours ago",
    description: "A quiet wellness identity with warm neutrals and therapeutic calm."
  },
  {
    id: "WD-2024-0860",
    client: "Smart Home Pro",
    title: "IoT Company Logo",
    style: "Connected Utility",
    category: "Economy",
    status: "in progress",
    progress: 33,
    designer: "Chris Lee",
    eta: "44h 16m",
    updated: "1 hour ago",
    description: "A smart-home logo system designed for app icons and devices."
  },
  {
    id: "WD-2024-0861",
    client: "Apex Financial",
    title: "Investment Firm Brand",
    style: "Executive Trust",
    category: "Private Jet",
    status: "review",
    progress: 94,
    designer: "Isabella Garcia",
    eta: "2h 47m",
    updated: "10 minutes ago",
    description: "A financial identity designed to feel stable, precise, and premium."
  },
  {
    id: "WD-2024-0862",
    client: "Green Energy Co",
    title: "Renewable Energy Logo",
    style: "Sustainable Modern",
    category: "Business",
    status: "completed",
    progress: 100,
    designer: "Nathan Brooks",
    eta: "Delivered",
    updated: "1 day ago",
    description: "A renewable energy identity combining movement, growth, and clarity."
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Creative Studio",
    industry: "Design",
    color: "Warm",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Organic Restaurant",
    industry: "Hospitality",
    color: "Green",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Healthcare Clinic",
    industry: "Healthcare",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Marketing Strategy",
    industry: "Business",
    color: "Neutral",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Editorial Workspace",
    industry: "Design",
    color: "Light",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Luxury Accessories",
    industry: "Retail",
    color: "Dark",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Growth Analytics",
    industry: "Finance",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Financial Services",
    industry: "Finance",
    color: "Neutral",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
  }
];

export const posts: BlogPost[] = [
  {
    title: "The Psychology Behind Memorable Logo Design",
    category: "Design Psychology",
    date: "January 15, 2024",
    readTime: "5 min read",
    author: "Sarah Chen",
    excerpt: "Discover how colors, shapes, and typography influence customer perception and brand recognition in logo design.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "2024 Logo Design Trends: What's Hot This Year",
    category: "Trends",
    date: "January 10, 2024",
    readTime: "7 min read",
    author: "Marcus Rodriguez",
    excerpt: "Explore the latest logo design trends shaping brand identities, from minimal systems to bold gradients.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Building a Brand Identity: Beyond Just a Logo",
    category: "Brand Strategy",
    date: "January 5, 2024",
    readTime: "8 min read",
    author: "Emily Thompson",
    excerpt: "Learn why successful brands need more than a logo and how to create a cohesive identity system.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "The ROI of Professional Logo Design for Small Businesses",
    category: "Business",
    date: "December 28, 2023",
    readTime: "6 min read",
    author: "David Kim",
    excerpt: "Data-driven insight on how professional logo design impacts growth, trust, and customer recall.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Case Study: Rebranding TechStart Inc.",
    category: "Case Study",
    date: "December 20, 2023",
    readTime: "10 min read",
    author: "Lisa Wang",
    excerpt: "A detailed look at our complete rebranding process for TechStart Inc., from discovery to final delivery.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  }
];

export const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    detail: "12+ years in brand design, former Apple design team member.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Logo Designer",
    detail: "Award-winning designer specializing in minimalist and modern aesthetics.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emily Thompson",
    role: "Brand Strategist",
    detail: "Brand psychology expert helping businesses connect with their audience.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David Kim",
    role: "Digital Designer",
    detail: "Specializes in digital-first brand identities and scalable design systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Lisa Wang",
    role: "Client Success Manager",
    detail: "Ensures every client receives exceptional service and perfect results.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "James Foster",
    role: "Lead Illustrator",
    detail: "Creates custom illustrations and icons that bring brands to life.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  }
];

export const heroSlides = [
  {
    label: "Strategy workshop",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
  },
  {
    label: "Design review",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1600&q=80"
  },
  {
    label: "Brand delivery",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
  }
];
