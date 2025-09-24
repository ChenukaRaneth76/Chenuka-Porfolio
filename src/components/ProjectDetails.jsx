import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "PETGO",
    title: "PETGO",
    deliverables: "Modern Pet Shop Frontend Application Using React.js",
    desc: `Designed and developed a fully responsive and modern frontend application for a fictional pet shop using React.js and Tailwind CSS. The application focuses on delivering an engaging and seamless user experience by integrating dynamic product displays, category-based filtering, and a sleek interface.`,
    github: "https://github.com/ChenukaRaneth76/Petshop",
    image: "/project-images/pet1.png",
    image2: "/project-images/petshop.jpg", // second image
    features: [
      "Dynamic product rendering with filtering by category",
      "Clean, responsive layout with mobile-first design",
      "Optimized UI with Tailwind CSS for faster performance and consistency",
      "Emphasis on user experience with clear visuals and smooth navigation",
    ],
  },

    {
    id: "RanHiru Delight Cake",
    title: "RanHiru Delight Cake",
    deliverables: "Web Application for RanhiruDelight Cakes",
    desc: `Developed a responsive front-end using HTML, CSS, and JavaScript for an online cake order platform. Integrated PHP and MySQL for dynamic content management and order tracking.`,
    github: "https://github.com/ChenukaRaneth76/RanhiruCake-Web-Application",
    image: "/project-images/ranhiru.png",
    image2: "/project-images/ran3.png", // second image
    features: [
      "Responsive front-end design",
      "Dynamic content management",
      "Order tracking system",
    ],
  },

  {
    id: "SuperMart",
    title: "SuperMart",
    deliverables: "SuperMart Management System: Full Stack Web application",
    desc: `Designed and implemented a full-stack web application for a grocery store, utilizing HTML, CSS, JavaScript, MySQL, and PHP. Performed usability analysis and restructured the user interface using Figma.`,
    github: "https://github.com/ChenukaRaneth76/DNK-Super",
    image: "/project-images/dnk.png",
    image2: "/project-images/dnkmain.png", // second image
    features: [
      "User management: Efficient system for managing user accounts,including registration,authentication and role based access control. ",
      "Category Management: Dynamic management of product categories enabling easy addition,editing and deletion of categories to keep the product catalog up to date.",
      "Product management: Full CRUD operation for managing product information and adding updating and deleting products. ",
      "Promotions : Integrated promotion module to manage and display discount,special offers and other promotional activities also this include CRUD operation to adding,updating and deleting promotions admins can do that operation in dashboard. ",
      "Feedback section : Customer feedback management to collect,view and respond to customer inquiries and feedbacks",
      "Store location : customer can track and see the store location. ",
      "Order Management : User can place order,update the order and delete the order through the application to ensure smooth purchasing experience.",
    ],
  },
  
   {
    id: "Fruit Fusion Puzzle",
    title: "Fruit Fusion Puzzle",
    deliverables: "Interactive Puzzle Game",
    desc: `This project is a modular, event-driven puzzle game built with a clear focus on scalable software architecture.

Architecture: Designed with low coupling and high cohesion, the backend (PHP & MySQL) manages authentication, game sessions, and leaderboard data, while the frontend (HTML, CSS, JavaScript) controls interactivity, animations, and level progression.

Event-Driven System: Game logic responds to user inputs, backend responses, timers, and session changes—enabling dynamic features like puzzle generation, countdowns, and real-time leaderboard updates.

API Integration: Integrated the Banana API to deliver puzzles dynamically, ensuring varied and engaging challenges for players.`,
    github: "https://github.com/ChenukaRaneth76/Fruit-Fusion-Puzzle",
    image: "/project-images/game.png",
    image2: "/project-images/mode.png", // second image
    features: [
      "Secure login system with password hashing and session-based authentication",
      "Dynamic difficulty modes with unique time limits",
      "Leaderboards with unique player identifiers",
      "Three-attempt heart system for strategic gameplay",
      "Reward animations (banana rain) and background music for immersive engagement",
      "Player progress tracking stored in MySQL",
    ],
  },

  {
    id: "Camp Ceylon",
    title: "Camp Ceylon",
    deliverables: " Automated Campsite Booking System for Sri Lanka (Camp Ceylon)",
    desc: `Camp Ceylon is a web-based platform designed to revolutionize Sri Lanka’s eco-tourism sector by digitalizing campsite discovery, bookings, weather updates, and automated permit management.`,
    github: "https://github.com/yourproject",
    image: "/project-images/camp.png",
    image2: "/project-images/camp2.png", // second image
    features: [
      "Role-based access for travellers, campsite owners, and administrators",
      "Real-time availability with rule-based weather alert system",
      "Automated PDF permit generation with TCPDF",
      "Dual navigation with Google Maps API (online) + Leaflet.js + OpenStreetMap (offline)",
      "Secure authentication with JWT + Sessions",
      "Admin dashboard with approval workflows, analytics & contact notifications",
    ],
  },
  
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-white">Project not found</p>;

  return (
    <div className="text-white min-h-screen">
      {/* Hero with per-project background */}
      <div
        className="relative h-[42vh] min-h-[320px] w-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(${project.image2 || project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-24 h-full flex items-end pb-10">
            <div>
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {project.title}
              </motion.h1>
              <motion.p
                className="mt-3 text-orange-300 text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {project.deliverables}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-24 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              {/* Description */}
              <motion.p
                className="text-gray-200 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {project.desc}
              </motion.p>

              {/* First Image */}
              <motion.div
                className="overflow-hidden rounded-xl border border-white/10 shadow-2xl mx-auto mb-6"
                style={{ width: '100%', maxWidth: '960px' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              </motion.div>

              {/* Second Image */}
              {project.image2 && (
                <motion.div
                  className="overflow-hidden rounded-xl border border-white/10 shadow-2xl mx-auto"
                  style={{ width: '100%', maxWidth: '960px' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={project.image2} alt={`${project.title} 2`} className="w-full h-auto object-cover" />
                </motion.div>
              )}
            </motion.div>

            {/* Right: Meta / Features */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Deliverables</h3>
                <p className="text-orange-300">{project.deliverables}</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-200">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Links</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 transition-all shadow-lg hover:shadow-orange-500/30"
                >
                  Website <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>

    </div>
  );
}
