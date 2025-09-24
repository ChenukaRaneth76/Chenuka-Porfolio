import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Code, Palette, Monitor, ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "IT Intern",
    company: "Tabrane Pharmaceuticals",
    location: "Colombo, Sri Lanka",
    period: "Jan 2025 - Jul 2025",
    duration: "6 months",
    type: "Internship",
    status: "Completed",
    description: "Gained hands-on experience in web development and IT support while contributing to digital transformation initiatives.",
    responsibilities: [
      {
        icon: <Code className="w-5 h-5" />,
        title: "Web Development",
        description: "Developed and executed the official website using modern front-end technologies, guaranteeing responsiveness and compatibility across various browsers"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "IT Support",
        description: "Delivered comprehensive IT support and troubleshooting services for personnel in several departments"
      },
      {
        icon: <Monitor className="w-5 h-5" />,
        title: "System Integration",
        description: "Assisted in the company's SAP-related operations, including report creation, and system testing"
      },
      {
        icon: <Palette className="w-5 h-5" />,
        title: "UI/UX Design",
        description: "Worked in partnership with cross-functional teams to ensure that technological solutions met business needs"
      }
    ],
    skills: [
      { name: "Frontend Development", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-500" },
      { name: "SAP Systems", level: 75, color: "from-orange-500 to-red-500" },
      { name: "IT Support", level: 80, color: "from-green-500 to-emerald-500" },
      { name: "System Testing", level: 70, color: "from-yellow-500 to-orange-500" }
    ],
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)' }}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Professional <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey in technology and design, building innovative solutions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((experience, idx) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
                
                {/* Header */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-1">{experience.title}</h3>
                          <h4 className="text-xl text-orange-400 font-semibold">{experience.company}</h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Duration: {experience.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full">
                        {experience.status}
                      </span>
                      <span className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20">
                        {experience.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Tabs */}
                <div className="border-b border-white/10">
                  <div className="flex gap-1 p-2">
                    {[
                      { id: 'overview', label: 'Overview', icon: <Monitor className="w-4 h-4" /> },
                      { id: 'responsibilities', label: 'Responsibilities', icon: <Code className="w-4 h-4" /> },
                      { id: 'skills', label: 'Skills', icon: <Palette className="w-4 h-4" /> }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <Code className="w-5 h-5 text-orange-400" />
                              Key Focus Areas
                            </h4>
                            <ul className="space-y-3">
                              <li className="text-gray-300 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-orange-400" />
                                Frontend Development
                              </li>
                              <li className="text-gray-300 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-orange-400" />
                                UI/UX Design
                              </li>
                              <li className="text-gray-300 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-orange-400" />
                                System Integration
                              </li>
                              <li className="text-gray-300 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-orange-400" />
                                IT Support
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <Users className="w-5 h-5 text-orange-400" />
                              Impact
                            </h4>
                            <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-300">Website Performance</span>
                                <span className="text-green-400 font-semibold">99.9% Uptime</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-300">Support Efficiency</span>
                                <span className="text-green-400 font-semibold">+40% Faster</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-300">Team Collaboration</span>
                                <span className="text-green-400 font-semibold">5+ Departments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'responsibilities' && (
                      <motion.div
                        key="responsibilities"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {experience.responsibilities.map((responsibility, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl">
                                  {responsibility.icon}
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-white font-semibold mb-2">{responsibility.title}</h5>
                                  <p className="text-gray-300 text-sm leading-relaxed">{responsibility.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'skills' && (
                      <motion.div
                        key="skills"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="space-y-6">
                          {experience.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="space-y-2"
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-white font-medium">{skill.name}</span>
                                <span className="text-gray-300 text-sm">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how I can bring my experience in web development and UI/UX design to your next project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:from-orange-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
