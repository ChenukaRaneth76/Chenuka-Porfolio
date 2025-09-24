import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Star, ArrowRight } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "B.Sc. (Hons) Computer Science",
    institution: "University of Bedfordshire (UK)",
    collaboration: "in collaboration with SLIIT City Uni",
    period: "2022 - PRESENT",
    duration: "3 years",
    level: "Undergraduate",
    status: "In Progress",
    location: "Sri Lanka",
    description: "Comprehensive computer science program covering software engineering, data structures, algorithms, and modern web technologies.",
    courses: [
      "Software Engineering",
      "Data Structures & Algorithms", 
      "Web Development",
      "Database Systems",
      "Computer Networks",
      "Machine Learning",
      "UI/UX Design",
      "Project Management"
    ],
    skills: ["Programming", "Web Development", "Database Design", "UI/UX", "Project Management"]
  },
  {
    id: 2,
    degree: "GCE Advanced Level",
    institution: "St. Peter's College",
    period: "2018 - 2020",
    duration: "2 years",
    level: "Advanced Level",
    status: "Completed",
    location: "Colombo, Sri Lanka",
    specialization: "Physical Science Stream Including ICT",
    description: "Specialized in Physical Science stream with focus on Information and Communication Technology, Mathematics, and Physics.",
    courses: [
      "Advanced Level Mathematics",
      "Physics",
      "Information & Communication Technology",
      "English Language"
    ],
    skills: ["Mathematics", "Physics", "ICT", "Problem Solving", "Leadership"]
  },
  {
    id: 3,
    degree: "GCE Ordinary Level",
    institution: "Dharmapala College Panipitiya",
    period: "2016 - 2017",
    duration: "1 year",
    level: "Ordinary Level",
    status: "Completed",
    location: "Panipitiya, Sri Lanka",
    specialization: "With ICT",
    description: "Strong foundation in core subjects with excellent performance in Information and Communication Technology.",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Sinhala",
      "History",
      "Buddhism",
      "Information & Communication Technology",
      "Business Studies",
      "English Literature"
    ],
    skills: ["ICT", "Mathematics", "English", "Leadership", "Communication"]
  }
];

const Education = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden" 
             style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)' }}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
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
            Educational <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic path in computer science and technology
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-pink-500 to-blue-500"></div>
          
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Education Card */}
                <div className="ml-20">
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                    onClick={() => setActiveCard(activeCard === edu.id ? null : edu.id)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl">
                              <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                              <h4 className="text-lg text-orange-400 font-semibold">{edu.institution}</h4>
                              {edu.collaboration && (
                                <p className="text-sm text-gray-400">{edu.collaboration}</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {edu.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-end gap-3">
                          <span className={`px-4 py-2 text-white text-sm font-medium rounded-full ${
                            edu.status === 'Completed' 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          }`}>
                            {edu.status}
                          </span>
                          <span className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20">
                            {edu.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {activeCard === edu.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/10 overflow-hidden"
                        >
                          <div className="p-8 space-y-8">
                            {/* Courses */}
                            <div>
                              <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-orange-400" />
                                Key Courses & Subjects
                              </h5>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {edu.courses.map((course, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm text-center hover:bg-white/20 transition-all duration-300"
                                  >
                                    {course}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            {/* Skills Developed */}
                            <div>
                              <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5 text-orange-400" />
                                Skills Developed
                              </h5>
                              <div className="flex flex-wrap gap-3">
                                {edu.skills.map((skill, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium hover:from-orange-500/30 hover:to-pink-500/30 transition-all duration-300"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-6">
              I believe in lifelong learning and staying updated with the latest technologies and design trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20">
                Online Courses
              </span>
              <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20">
                Certifications
              </span>
              <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20">
                Workshops
              </span>
              <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20">
                Self-Study
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;