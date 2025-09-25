import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql } from "react-icons/si";

const projects = [

  {
    id: "Camp Ceylon",
    title: "Camp Ceylon",
    subtitle: "Automated Campsite Booking System for Sri Lanka",
    desc: " Camp Ceylon is a web-based platform designed to revolutionize Sri Lanka’s eco-tourism sector by digitalizing campsite discovery, bookings, weather updates, and automated permit management.",
    tools: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
    images: ["/project-images/camp.png"],
    github: "https://github.com/ChenukaRaneth76/Camp-Ceylon-",
    live: "https://supermart-demo.com",
    category: "Full Stack"
  },

  {
    id: "PETGO",
    title: "PETGO",
    subtitle: "Modern Pet Shop Frontend Application",
    desc: "Designed and developed a responsive frontend for a pet shop using React.js and Tailwind CSS. Implemented key features such as dynamic pet product displays and category-based filtering.",
    tools: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
    images: ["/project-images/pet1.png"],
    github: "https://github.com/ChenukaRaneth76/Petshop",
    live: "https://petgo-demo.com",
    category: "Frontend"
  },

  {
    id: "Fruit Fusion Puzzle",
    title: "Fruit Fusion Puzzle",
    subtitle: "Interactive Puzzle Game",
    desc: " Created an engaging web-based puzzle game that incorporates MathAPI for the dynamic generation of puzzles, Engineered with a modular architecture that guarantees low coupling and high cohesion between the frontend and backend elements.",
    tools: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
    images: ["/project-images/game.png"],
    github: "https://github.com/ChenukaRaneth76/Fruit-Fusion-Puzzle",
    live: "https://supermart-demo.com",
    category: "Full Stack"
  },

  {
    id: "SuperMart",
    title: "SuperMart",
    subtitle: "SuperMart Management System",
    desc: "Designed and implemented a full-stack web application for a grocery store, utilizing HTML, CSS, JavaScript, MySQL, and PHP. Performed usability analysis and restructured the user interface using Figma.",
    tools: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
    images: ["/project-images/dnk.png"],
    github: "https://github.com/yourproject",
    live: "https://github.com/ChenukaRaneth76/DNK-Super",
    category: "Full Stack"
  },

  {
    id: "RanHiru Delight Cake",
    title: "Ranhiru Delight Cake",
    subtitle: "RanhiruDelight Cakes Platform",
    desc: "Developed a responsive front-end using HTML, CSS, and JavaScript for an online cake order platform. Integrated PHP and MySQL for dynamic content management and order tracking.",
    tools: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
    images: ["/project-images/ranhiru.png"],
    github: "https://github.com/ChenukaRaneth76/RanhiruCake-Web-Application",
    live: "https://ranhiru-cakes.com",
    category: "Full Stack"
  },

];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 600 : -600,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 600 : -600,
      opacity: 0,
      scale: 0.98,
    }),
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 220, damping: 26, mass: 0.9 },
    opacity: { duration: 0.2 },
    scale: { duration: 0.2 },
  };

  const handleDragStart = (event, info) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (event, info) => {
    if (dragStartX == null) return;
    const delta = info.point.x - dragStartX;
    const threshold = 60;
    if (delta > threshold) {
      goToPrevious();
    } else if (delta < -threshold) {
      goToNext();
    }
    setDragStartX(null);
  };

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)' }}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development and UI/UX design
          </p>
        </motion.div>

        {/* Main Slideshow Container */}
        <div className="relative">
          {/* Slideshow Controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button
              onClick={goToPrevious}
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={goToNext}
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slideshow */}
          <div className="relative h-[560px] md:h-[600px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <motion.div
                      className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={projects[currentIndex].images[0]} 
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.a
                          href={projects[currentIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                          href={projects[currentIndex].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-center p-8">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium rounded-full">
                          {projects[currentIndex].category}
                        </span>
                        <span className="text-gray-400 text-sm">#{String(currentIndex + 1).padStart(2, '0')}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {projects[currentIndex].title}
                      </h3>
                      
                      <p className="text-xl text-orange-400 mb-6">
                        {projects[currentIndex].subtitle}
                      </p>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {projects[currentIndex].desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {projects[currentIndex].tools.map((tool, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                            >
                              {tool.icon}
                              {tool.name}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Link
                          to={`/project/${projects[currentIndex].id}`}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:from-orange-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                          View Details
                          <ExternalLink size={16} />
                        </Link>
                        
                        <a
                          href={projects[currentIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 scale-125 shadow-[0_0_0_4px_rgba(255,255,255,0.15)]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group cursor-pointer relative ${index === currentIndex ? 'ring-2 ring-orange-500/70' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-pink-500/10 to-purple-500/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/10 border border-white/20 text-white">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex gap-2">
                      {project.tools.slice(0,3).map((t, i) => (
                        <span key={i} className="w-8 h-8 rounded-full bg-white/10 border border-white/20 grid place-items-center text-white">
                          {t.icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-400">#{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-xs text-gray-300 group-hover:text-white transition">Tap to preview</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
