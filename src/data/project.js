import axtraImg from "../assets/Axtra.png";
import colaImg from "../assets/Cola.png";
import TASImg from "../assets/TAS.png";

// Aligned project data with richer, consistent schema
export const project = [
  {
    id: "axtra-pos",
    title: "Axtra POS System",
    subtitle: "React + .NET Core POS with admin panel",
    description:
      "React-based POS system with real-time billing, inventory, and admin panel.",
    highlights: [
      "Real-time billing & receipt printing",
      "Role-based access control",
      "Inventory and sales analytics",
    ],
    tech: ["React", ".NET Core", "MSSQL"],
    role: "Full-Stack Developer",
    outcomes: { perfScore: 90 },
    image: {
      src: axtraImg,
      alt: "Axtra POS dashboard screenshot",
      width: 1600,
      height: 900,
    },
    links: {
      demo: "https://www.12zay.com/posdevadmin/landing",
      repo: "https://www.12zay.com/posdevadmin/landing",
    },
    tags: ["Featured", "Enterprise"],
    timeline: { start: "2024-02", end: "2024-07" },
    team: { size: 4 },
    status: "Live",
    featured: true,
    order: 1,
    confidential: false,
  },
  {
    id: "coke-rewards-admin",
    title: "Coke Rewards Admin Dashboard",
    subtitle: "Sales data visualization and management",
    description: "Admin dashboard for Coca-Cola sales data visualization.",
    highlights: ["Interactive charts", "User management", "Exportable reports"],
    tech: ["React", "ASP.NET", "MSSQL"],
    role: "Full-Stack Developer",
    outcomes: {},
    image: {
      src: colaImg,
      alt: "Coke admin dashboard screenshot",
      width: 1600,
      height: 900,
    },
    links: {
      demo: "https://12zay.com/Coke/CokeAdmin/login",
      repo: "https://12zay.com/Coke/CokeAdmin/login",
    },
    tags: ["Analytics", "Admin"],
    timeline: { start: "2023-10", end: "2024-01" },
    team: { size: 3 },
    status: "Live",
    featured: false,
    order: 2,
    confidential: true,
  },
  {
    id: "tas-auto",
    title: "TAS Auto",
    subtitle: "Second-hand cars sales admin",
    description: "Admin dashboard for Second-Hand Cars Sales",
    highlights: ["Listings management", "Lead tracking", "Pricing tools"],
    tech: ["React", "ASP.NET", "MSSQL"],
    role: "Frontend Developer",
    outcomes: {},
    image: {
      src: TASImg,
      alt: "TAS Auto admin screenshot",
      width: 1600,
      height: 900,
    },
    links: {
      demo: "https://12zay.com/CarBuySell/CarBuySellAdmin/login",
      repo: "https://12zay.com/CarBuySell/CarBuySellAdmin/login",
    },
    tags: ["Marketplace", "Admin"],
    timeline: { start: "2024-04", end: "2024-08" },
    team: { size: 2 },
    status: "Live",
    featured: false,
    order: 3,
    confidential: true,
  },
];
