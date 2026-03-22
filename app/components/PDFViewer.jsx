"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PDFViewer({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full max-w-7xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">Resume</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Resume Content */}
        <div className="flex-1 overflow-hidden bg-white">
          <div className="h-full overflow-y-auto overscroll-contain">
            <div className="max-w-6xl mx-auto p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-black mb-4">JOHN PAUL G. VISMONTE</h1>
                <p className="text-base text-black mb-2 flex items-center justify-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.836l-.74-4.435a1 1 0 00-1.059-.54l-1.548.773a11.037 11.037 0 01-6.105-6.105l1.548-.774a1 1 0 00.54-1.059l-.74-4.435a1 1 0 00-.836-.986L3 2a1 1 0 00-1 1z"/>
                    </svg>
                    09971296951
                  </span>
                  <a href="mailto:paulvismonte0@gmail.com" className="text-black hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    paulvismonte0@gmail.com
                  </a>
                  <a href="https://my-portfolio-eight-eta-2jnpku4nco.vercel.app/" className="text-black hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zM9.954 4.569c-.897.89-1.538 1.912-1.896 2.96h3.884c-.358-1.048-.999-2.07-1.896-2.96zM8.966 8h4.068c-.093-1.327-.348-2.547-.724-3.645a11.978 11.978 0 00-2.62 0c-.376 1.098-.631 2.318-.724 3.645zm3.624 4h-4.068c.093 1.327.348 2.547.724 3.645a11.978 11.978 0 002.62 0c.376-1.098.631-2.318.724-3.645zm-1.896 6.569c.897-.89 1.538-1.912 1.896-2.96H8.083c.358 1.048.999 2.07 1.896 2.96z" clipRule="evenodd"/>
                    </svg>
                    Paul Portfolio
                  </a>
                  <a href="https://github.com/Paul-Vismonte" target="_blank" rel="noopener noreferrer" className="text-black hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.754.33 1.909-1.756 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.926 0 1.39-.012 2.517-.012 2.851 0 .262.188.572.688.482A10.016 10.016 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                    Paul-Vismonte
                  </a>
                  <a href="https://linkedin.com/in/paul-vismonte-613966365/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm1.337 9.763H5.005V7.748h1.337v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                    Paul Vismonte
                  </a>
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-black mb-6 border-b-2 border-black pb-2">TECHNICAL SKILLS</h2>
                <div className="space-y-4 text-base">
                  <div className="text-black">
                    <span className="font-semibold text-black">Programming:</span> JavaScript, TypeScript, Python, Java, PHP
                  </div>
                  <div className="text-black">
                    <span className="font-semibold text-black">Frontend:</span> React.js, Next.js, HTML, CSS, Tailwind CSS, GSAP, Three.js, WebGL
                  </div>
                  <div className="text-black">
                    <span className="font-semibold text-black">Backend:</span> Node.js, Express.js, PHP, MySQL
                  </div>
                  <div className="text-black">
                    <span className="font-semibold text-black">Tools & DevOps:</span> Git, GitHub, Vercel, Firebase, CI/CD
                  </div>
                  <div className="text-black">
                    <span className="font-semibold text-black">Other:</span> REST APIs, Responsive Design, UI/UX, Web Performance Optimization
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-black mb-6 border-b-2 border-gray-400 pb-2">EDUCATION</h2>
                <div>
                  <h3 className="text-xl font-semibold text-black">Bachelor of Science in Computer Science</h3>
                  <p className="text-black mb-2 text-base">Holy Cross College — Philippines</p>
                  <p className="text-black text-base">2020 – 2024</p>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-black mb-6 border-b-2 border-gray-400 pb-2">PROJECTS</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-black">EduSchedule | JavaScript, PHP, MySQL</h3>
                    <p className="text-black text-base mt-2">
                      Developed a comprehensive web-based system for managing teacher accounts, class schedules, and student records with modern UI
                    </p>
                    <ul className="text-black text-base mt-2 space-y-1">
                      <li>• Implemented responsive user interfaces with intuitive navigation and data management</li>
                      <li>• Built scalable backend functionality using PHP and MySQL for efficient data handling</li>
                      <li>• Optimized performance through efficient database queries and asset management techniques</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black">Tourist Spots Web Platform | Next.js, Tailwind CSS, Drizzle ORM</h3>
                    <p className="text-black text-base mt-2">
                      Developed an immersive travel platform showcasing local tourist attractions with interactive maps and real-time feedback
                    </p>
                    <ul className="text-black text-base mt-2 space-y-1">
                      <li>• Integrated modern web technologies to create dynamic and engaging visual experiences</li>
                      <li>• Designed responsive user interfaces using Tailwind CSS and implemented smooth animations</li>
                      <li>• Built scalable backend functionality using Drizzle ORM for efficient data handling</li>
                      <li>• Optimized performance through efficient asset management and lazy loading techniques</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black">Portfolio Website | Next.js, Tailwind CSS, Vercel</h3>
                    <p className="text-black text-base mt-2">
                      Designed and developed a modern personal portfolio with interactive user interface elements
                    </p>
                    <ul className="text-black text-base mt-2 space-y-1">
                      <li>• Implemented dynamic animations, including mouse-follow lighting effects and smooth transitions</li>
                      <li>• Deployed the application using Vercel with optimized build performance and global content delivery</li>
                      <li>• Structured content to effectively present projects, technical skills, and professional profile</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-black mb-4">Additional Projects</h3>
                  <ul className="text-black text-base space-y-1">
                    <li>• Built full-stack web applications with authentication and database integration</li>
                    <li>• Developed reusable UI components following modern design principles</li>
                    <li>• Integrated third-party APIs to deliver dynamic and responsive features</li>
                  </ul>
                </div>
              </div>

              {/* Experience */}
              <div className="pb-12">
                <h2 className="text-2xl font-semibold text-black mb-6 border-b-2 border-gray-400 pb-2">EXPERIENCE</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black">Internship</h3>
                    <p className="text-black mb-2 text-base">AP Global IT Solutions Inc. — May 2025 – July 2025</p>
                    <ul className="text-black text-base space-y-1">
                      <li>• Developed responsive web applications with a focus on performance, scalability, and user experience</li>
                      <li>• Utilized Git for version control and collaborative development workflows</li>
                      <li>• Applied component-based architecture and modern frontend development practices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black">Personal Projects Developer</h3>
                    <p className="text-black mb-2 text-base">2024 – Present</p>
                    <ul className="text-black text-base space-y-1">
                      <li>• Designed and developed web applications with a focus on performance, scalability, and user experience</li>
                      <li>• Utilized Git for version control and collaborative development workflows</li>
                      <li>• Applied component-based architecture and modern frontend development practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download Button */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // Create and download a PDF-like HTML file
              const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Paul Vismonte - Resume</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: white;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #915eff;
            padding-bottom: 20px;
        }
        .name {
            font-size: 2.5em;
            font-weight: bold;
            color: #2c3e50;
            margin: 0;
        }
        .title {
            font-size: 1.2em;
            color: #7f8c8d;
            margin: 5px 0;
        }
        .contact {
            margin: 15px 0;
            font-size: 0.9em;
        }
        .contact span {
            margin: 0 15px;
        }
        .section {
            margin: 30px 0;
        }
        .section-title {
            font-size: 1.3em;
            font-weight: bold;
            color: #2c3e50;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        .skill-category h4 {
            margin: 0 0 10px 0;
            color: #34495e;
        }
        .skill-list {
            margin: 0;
            padding-left: 20px;
        }
        .skill-list li {
            margin: 5px 0;
        }
        .experience-item, .education-item, .project-item {
            margin-bottom: 20px;
        }
        .item-title {
            font-weight: bold;
            color: #2c3e50;
            margin: 0;
        }
        .item-subtitle {
            color: #7f8c8d;
            font-style: italic;
            margin: 5px 0;
        }
        .item-details {
            margin: 10px 0;
            padding-left: 20px;
        }
        .item-details li {
            margin: 5px 0;
        }
        @media print {
            body { padding: 20px; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="name">Paul Vismonte</h1>
        <p class="title">Full Stack Developer</p>
        <div class="contact">
            <span>📧 paul.vismonte@example.com</span>
            <span>📍 Philippines</span>
            <span>🌐 github.com/Paul-Vismonte</span>
            <span>💼 linkedin.com/in/paul-vismonte</span>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">About</h2>
        <p>Creative full-stack developer specializing in modern web applications with expertise in React, Next.js, and Three.js. Passionate about building interactive, performant solutions with clean code and exceptional user experiences.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Frontend</h4>
                <ul class="skill-list">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>Three.js</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Backend</h4>
                <ul class="skill-list">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>REST APIs</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Tools</h4>
                <ul class="skill-list">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Chrome DevTools</li>
                    <li>Terminal</li>
                    <li>npm</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Experience</h2>
        <div class="experience-item">
            <h3 class="item-title">Full Stack Developer</h3>
            <p class="item-subtitle">AP Global IT Solutions Inc. • May 2025 - July 2025</p>
            <ul class="item-details">
                <li>Developed responsive web applications using React and Node.js</li>
                <li>Implemented RESTful APIs for data management</li>
                <li>Collaborated with cross-functional teams for project delivery</li>
                <li>Optimized application performance and user experience</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="education-item">
            <h3 class="item-title">Bachelor of Science in Computer Science</h3>
            <p class="item-subtitle">Holy Cross College • 2020 - 2024</p>
            <p>Graduated with honors, specialized in web development and software engineering</p>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Featured Projects</h2>
        <div class="project-item">
            <h3 class="item-title">EduSchedule</h3>
            <p>Web-based system for managing teacher accounts, class schedules, and student records</p>
            <p><strong>Tech:</strong> JavaScript, PHP, MySQL</p>
        </div>
        <div class="project-item">
            <h3 class="item-title">Tourist Spots Web Platform</h3>
            <p>Immersive travel platform with interactive maps and real-time feedback</p>
            <p><strong>Tech:</strong> Next.js, Tailwind CSS, Drizzle ORM</p>
        </div>
        <div class="project-item">
            <h3 class="item-title">BarberHub</h3>
            <p>Marketing and POS application for barbershops</p>
            <p><strong>Tech:</strong> React, Node.js, MongoDB</p>
        </div>
    </div>
</body>
</html>
              `;
              
              const blob = new Blob([resumeHTML], { type: 'text/html' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'Paul-Vismonte-Resume.html';
              a.click();
              window.URL.revokeObjectURL(url);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
