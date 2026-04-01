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
                <h1 className="text-4xl font-bold text-black mb-4">JOHN PAUL GUEVARRA VISMONTE</h1>
                <p className="text-base text-black mb-2">
                  09971296951 | <a href="mailto:paulvismonte0@gmail.com" className="text-black hover:underline">📧 paulvismonte0@gmail.com</a> | <a href="https://my-portfolio-eight-eta-2jnpku4nco.vercel.app/" className="text-black hover:underline">🌐 Paul Portfolio</a> | <a href="https://github.com/Paul-Vismonte" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">💻 Paul-Vismonte</a> | <a href="https://linkedin.com/in/paul-vismonte-613966365/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">💼 Paul Vismonte</a>
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
                    <span className="font-semibold text-black">Creative & Media:</span> Adobe Creative Suite (Photoshop, Premiere Pro, After Effects), Video Editing, Photo Editing, Content Creation
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
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-black mb-4">Additional Projects</h3>
                    <ul className="text-black text-base space-y-1">
                      <li>• Built full-stack web applications with authentication and database integration</li>
                      <li>• Developed reusable UI components following modern design principles</li>
                      <li>• Integrated third-party APIs to deliver dynamic and responsive features</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="pb-12">
                <h2 className="text-2xl font-semibold text-black mb-6 border-b-2 border-gray-400 pb-2">EXPERIENCE</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black">Entry-Level Web Developer</h3>
                    <p className="text-black mb-2 text-base">Freelance & Personal Projects | 2024 – Present</p>
                    <ul className="text-black text-base space-y-1">
                      <li>• Developed responsive web applications with a focus on modern best practices and user experience</li>
                      <li>• Utilized version control with Git for collaborative development workflows</li>
                      <li>• Applied component-based architecture and modern frontend development practices</li>
                      <li>• Built full-stack applications using React, Node.js, and various database technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download Button */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => {
              // Create a new window with the resume content for PDF printing
              const printWindow = window.open('', '_blank');
              const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        @page {
            margin: 0.5in;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #000;
            max-width: 100%;
            margin: 0;
            padding: 20px;
            background: white;
            font-size: 12px;
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
            color: #000;
            margin: 0;
        }
        .title {
            font-size: 1.2em;
            color: #333;
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
            page-break-inside: avoid;
        }
        .section-title {
            font-size: 1.3em;
            font-weight: bold;
            color: #000;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        .skill-category h4 {
            margin: 0 0 10px 0;
            color: #000;
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
            page-break-inside: avoid;
        }
        .item-title {
            font-weight: bold;
            color: #000;
            margin: 0;
        }
        .item-subtitle {
            color: #333;
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
            body { 
                font-size: 12px;
                padding: 0;
            }
            .section { 
                page-break-inside: avoid;
                margin: 20px 0;
            }
            .header {
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="name">John Paul Guevarra Vismonte</h1>
        <p class="title">Entry-Level Web Developer</p>
        <div class="contact">
            <span>📞 09971296951</span>
            <span>📧 paulvismonte0@gmail.com</span>
            <span>🌐 my-portfolio-eight-eta-2jnpku4nco.vercel.app</span>
            <span>💻 github.com/Paul-Vismonte</span>
            <span>💼 linkedin.com/in/paul-vismonte-613966365/</span>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">About</h2>
        <p>Recently graduated Computer Science student with strong web development skills and a passion for building interactive, user-focused applications. Proficient in modern frontend and backend technologies with hands-on experience through personal projects and freelance work.</p>
    </div>

    <div class="section">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Programming</h4>
                <ul class="skill-list">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>PHP</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Frontend</h4>
                <ul class="skill-list">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>GSAP</li>
                    <li>Three.js</li>
                    <li>WebGL</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Backend</h4>
                <ul class="skill-list">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Tools & DevOps</h4>
                <ul class="skill-list">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Vercel</li>
                    <li>Firebase</li>
                    <li>CI/CD</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Creative & Media</h4>
                <ul class="skill-list">
                    <li>Adobe Creative Suite (Photoshop, Premiere Pro, After Effects)</li>
                    <li>Video Editing</li>
                    <li>Photo Editing</li>
                    
                </ul>
            </div>
            <div class="skill-category">
                <h4>Other</h4>
                <ul class="skill-list">
                    <li>REST APIs</li>
                    <li>Responsive Design</li>
                    <li>Web Performance Optimization</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="education-item">
            <h3 class="item-title">Bachelor of Science in Computer Science</h3>
            <p class="item-subtitle">Holy Cross College • Philippines</p>
            <p class="item-subtitle">2020 – 2024</p>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Projects</h2>
        <div class="project-item">
            <h3 class="item-title">EduSchedule</h3>
            <p>Developed a comprehensive web-based system for managing teacher accounts, class schedules, and student records with modern UI</p>
            <p><strong>Tech:</strong> JavaScript, PHP, MySQL</p>
            <ul class="item-details">
                <li>Implemented responsive user interfaces with intuitive navigation and data management</li>
                <li>Built scalable backend functionality using PHP and MySQL for efficient data handling</li>
                <li>Optimized performance through efficient database queries and asset management techniques</li>
            </ul>
        </div>
        <div class="project-item">
            <h3 class="item-title">Tourist Spots Web Platform</h3>
            <p>Developed an immersive travel platform showcasing local tourist attractions with interactive maps and real-time feedback</p>
            <p><strong>Tech:</strong> Next.js, Tailwind CSS, Drizzle ORM</p>
            <ul class="item-details">
                <li>Integrated modern web technologies to create dynamic and engaging visual experiences</li>
                <li>Designed responsive user interfaces using Tailwind CSS and implemented smooth animations</li>
                <li>Built scalable backend functionality using Drizzle ORM for efficient data handling</li>
                <li>Optimized performance through efficient asset management and lazy loading techniques</li>
            </ul>
        </div>
        <div class="project-item">
            <h3 class="item-title">Portfolio Website</h3>
            <p>Designed and developed a modern personal portfolio with interactive user interface elements</p>
            <p><strong>Tech:</strong> Next.js, Tailwind CSS, Vercel</p>
            <ul class="item-details">
                <li>Implemented dynamic animations, including mouse-follow lighting effects and smooth transitions</li>
                <li>Deployed the application using Vercel with optimized build performance and global content delivery</li>
                <li>Structured content to effectively present projects, technical skills, and professional profile</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Experience</h2>
        <div class="experience-item">
            <h3 class="item-title">Entry-Level Web Developer</h3>
            <p class="item-subtitle">Freelance & Personal Projects • 2024 – Present</p>
            <ul class="item-details">
                <li>Developed responsive web applications with a focus on modern best practices and user experience</li>
                <li>Utilized version control with Git for collaborative development workflows</li>
                <li>Applied component-based architecture and modern frontend development practices</li>
                <li>Built full-stack applications using React, Node.js, and various database technologies</li>
            </ul>
        </div>
    </div>
</body>
</html>
              `;
              
              printWindow.document.write(resumeHTML);
              printWindow.document.close();
              
              // Wait for content to load, then trigger print dialog
              setTimeout(() => {
                printWindow.print();
                // Close window after printing (or if user cancels)
                printWindow.onafterprint = () => {
                  printWindow.close();
                };
                // Fallback if onafterprint doesn't work
                setTimeout(() => {
                  printWindow.close();
                }, 1000);
              }, 500);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
