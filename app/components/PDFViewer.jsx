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
            <div className="max-w-6xl mx-auto p-8" style={{ fontFamily: 'Georgia, serif' }}>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-black mb-3" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>JOHN PAUL GUEVARRA VISMONTE</h1>
                <p className="text-base text-black font-medium mb-4" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.1em' }}>ENTRY-LEVEL WEB DEVELOPER</p>
                <div className="flex justify-center items-center gap-4 text-sm text-black flex-wrap" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <span>09971296951</span>
                  <span>|</span>
                  <span>paulvismonte0@gmail.com</span>
                  <span>|</span>
                  <span>my-portfolio-eight-eta-2jnpku4nco.vercel.app</span>
                  <span>|</span>
                  <span>github.com/Paul-Vismonte</span>
                  <span>|</span>
                  <span>linkedin.com/in/paul-vismonte-613966365/</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-black mb-4 border-b-2 border-gray-800 pb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>PROFESSIONAL SUMMARY</h2>
                <p className="text-base text-black leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                  Recently graduated Computer Science student with strong web development skills and a passion for building interactive, user-focused applications. Proficient in modern frontend and backend technologies with hands-on experience through personal projects and freelance work.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-black mb-4 border-b-2 border-gray-800 pb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>TECHNICAL SKILLS</h2>
                <div className="grid grid-cols-2 gap-6 text-base" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <div>
                    <span className="font-semibold text-black">Programming:</span> JavaScript, TypeScript, Python, Java, PHP
                  </div>
                  <div>
                    <span className="font-semibold text-black">Frontend:</span> React.js, Next.js, HTML, CSS, Tailwind CSS, GSAP, Three.js
                  </div>
                  <div>
                    <span className="font-semibold text-black">Backend:</span> Node.js, Express.js, PHP, MySQL, MongoDB, PostgreSQL
                  </div>
                  <div>
                    <span className="font-semibold text-black">Tools:</span> Git, GitHub, VS Code, npm, Chrome DevTools
                  </div>
                  <div>
                    <span className="font-semibold text-black">DevOps:</span> Vercel, Netlify, Firebase, Docker, CI/CD
                  </div>
                  <div>
                    <span className="font-semibold text-black">Creative:</span> Adobe Creative Suite, Video Editing, Photo Editing, Figma
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-black mb-4 border-b-2 border-gray-800 pb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>EDUCATION</h2>
                <div>
                  <h3 className="text-lg font-semibold text-black" style={{ fontFamily: 'Georgia, serif' }}>Bachelor of Science in Computer Science</h3>
                  <p className="text-base text-black" style={{ fontFamily: 'Arial, sans-serif' }}>Holy Cross College, Philippines | 2020 - 2024</p>
                  <p className="text-sm text-black mt-2 italic" style={{ fontFamily: 'Arial, sans-serif' }}>Graduated with honors, specialized in web development and software engineering</p>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-black mb-4 border-b-2 border-gray-800 pb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>PROJECTS</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black" style={{ fontFamily: 'Georgia, serif' }}>EduSchedule</h3>
                    <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>JavaScript, PHP, MySQL</p>
                    <p className="text-base text-black mb-3" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                      Developed a comprehensive web-based system for managing teacher accounts, class schedules, and student records with modern UI
                    </p>
                    <ul className="text-sm text-black space-y-2 ml-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
                      <li>Implemented responsive user interfaces with intuitive navigation and data management</li>
                      <li>Built scalable backend functionality using PHP and MySQL for efficient data handling</li>
                      <li>Optimized performance through efficient database queries and asset management techniques</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black" style={{ fontFamily: 'Georgia, serif' }}>Tourist Spots Web Platform</h3>
                    <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>Next.js, Tailwind CSS, Drizzle ORM</p>
                    <p className="text-base text-black mb-3" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                      Developed an immersive travel platform showcasing local tourist attractions with interactive maps and real-time feedback
                    </p>
                    <ul className="text-sm text-black space-y-2 ml-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
                      <li>Integrated modern web technologies to create dynamic and engaging visual experiences</li>
                      <li>Designed responsive user interfaces using Tailwind CSS and implemented smooth animations</li>
                      <li>Built scalable backend functionality using Drizzle ORM for efficient data handling</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black" style={{ fontFamily: 'Georgia, serif' }}>Portfolio Website</h3>
                    <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>Next.js, Tailwind CSS, Vercel</p>
                    <p className="text-base text-black mb-3" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                      Designed and developed a modern personal portfolio with interactive user interface elements
                    </p>
                    <ul className="text-sm text-black space-y-2 ml-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
                      <li>Implemented dynamic animations, including mouse-follow lighting effects and smooth transitions</li>
                      <li>Deployed the application using Vercel with optimized build performance and global content delivery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="pb-8">
                <h2 className="text-xl font-semibold text-black mb-4 border-b-2 border-gray-800 pb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>EXPERIENCE</h2>
                <div>
                  <h3 className="text-lg font-semibold text-black" style={{ fontFamily: 'Georgia, serif' }}>Entry-Level Web Developer</h3>
                  <p className="text-base text-gray-700 mb-3" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>Freelance & Personal Projects | 2024 - Present</p>
                  <ul className="text-sm text-black space-y-2 ml-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
                    <li>Developed responsive web applications with a focus on modern best practices and user experience</li>
                    <li>Utilized version control with Git for collaborative development workflows</li>
                    <li>Applied component-based architecture and modern frontend development practices</li>
                    <li>Built full-stack applications using React, Node.js, and various database technologies</li>
                  </ul>
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
    <title>Paul Vismonte - Resume</title>
    <style>
        @page {
            margin: 0.3in;
            size: A4;
        }
        body {
            font-family: 'Georgia', serif;
            line-height: 1.5;
            color: #000;
            max-width: 100%;
            margin: 0;
            padding: 14px;
            background: white;
            font-size: 13px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
        .header {
            text-align: center;
            margin-bottom: 16px;
            border-bottom: 2px solid #915eff;
            padding-bottom: 8px;
        }
        .name {
            font-family: 'Georgia', serif;
            font-size: 2.6em;
            font-weight: bold;
            color: #000;
            margin: 0;
            letter-spacing: 0.05em;
        }
        .title {
            font-family: 'Arial', sans-serif;
            font-size: 1.3em;
            color: #000;
            margin: 5px 0;
            font-weight: 500;
            letter-spacing: 0.1em;
        }
        .contact {
            font-family: 'Arial', sans-serif;
            margin: 6px 0;
            font-size: 1em;
        }
        .contact span {
            margin: 0 4px;
        }
        .section {
            margin: 12px 0;
            page-break-inside: avoid;
        }
        .section-title {
            font-family: 'Georgia', serif;
            font-size: 1.4em;
            font-weight: bold;
            color: #000;
            border-bottom: 2px solid #333;
            padding-bottom: 3px;
            margin-bottom: 6px;
            letter-spacing: 0.05em;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
            margin-bottom: 10px;
        }
        .skill-item {
            font-family: 'Arial', sans-serif;
            font-size: 1em;
        }
        .skill-item strong {
            color: #000;
        }
        .education-item h3 {
            font-family: 'Georgia', serif;
            font-weight: bold;
            color: #000;
            margin: 0;
            font-size: 1.1em;
        }
        .education-item p {
            font-family: 'Arial', sans-serif;
            margin: 2px 0;
            font-size: 1em;
            color: #000;
        }
        .project-item {
            margin-bottom: 8px;
            page-break-inside: avoid;
        }
        .project-item h3 {
            font-family: 'Georgia', serif;
            font-weight: bold;
            color: #000;
            margin: 0;
            font-size: 1.1em;
        }
        .project-item .tech {
            font-family: 'Arial', sans-serif;
            font-size: 0.9em;
            color: #666;
            margin: 2px 0;
            font-style: italic;
        }
        .project-item p {
            font-family: 'Arial', sans-serif;
            margin: 3px 0;
            font-size: 0.95em;
            line-height: 1.5;
        }
        .project-item ul {
            font-family: 'Arial', sans-serif;
            margin: 3px 0;
            padding-left: 14px;
            line-height: 1.4;
        }
        .project-item li {
            margin: 1px 0;
            font-size: 0.9em;
        }
        .experience-item h3 {
            font-family: 'Georgia', serif;
            font-weight: bold;
            color: #000;
            margin: 0;
            font-size: 1.1em;
        }
        .experience-item .subtitle {
            font-family: 'Arial', sans-serif;
            font-size: 1em;
            color: #666;
            margin: 2px 0;
            font-style: italic;
        }
        .experience-item ul {
            font-family: 'Arial', sans-serif;
            margin: 3px 0;
            padding-left: 14px;
            line-height: 1.4;
        }
        .experience-item li {
            margin: 1px 0;
            font-size: 0.9em;
        }
        @media print {
            body { 
                font-size: 11px;
                padding: 8px;
            }
            .section { 
                page-break-inside: avoid;
                margin: 8px 0;
            }
            .header {
                margin-bottom: 12px;
            }
            .skills-grid {
                gap: 4px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="name">JOHN PAUL GUEVARRA VISMONTE</h1>
        <p class="title">ENTRY-LEVEL WEB DEVELOPER</p>
        <div class="contact">
            <span>09971296951</span>
            <span>|</span>
            <span>paulvismonte0@gmail.com</span>
            <span>|</span>
            <span>github.com/Paul-Vismonte</span>
            <span>|</span>
            <span>linkedin.com/in/paul-vismonte-613966365/</span>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
        <p style="font-family: 'Arial', sans-serif;">
            Computer Science graduate with strong web development skills and passion for building interactive applications. Proficient in modern frontend and backend technologies with hands-on project experience.
        </p>
    </div>

    <div class="section">
        <h2 class="section-title">TECHNICAL SKILLS</h2>
        <div class="skills-grid">
            <div class="skill-item">
                <strong>Programming:</strong> JavaScript, TypeScript, Python, PHP
            </div>
            <div class="skill-item">
                <strong>Frontend:</strong> React.js, Next.js, HTML, CSS, Tailwind
            </div>
            <div class="skill-item">
                <strong>Backend:</strong> Node.js, Express.js, PHP, MySQL
            </div>
            <div class="skill-item">
                <strong>Tools:</strong> Git, GitHub, VS Code, npm
            </div>
            <div class="skill-item">
                <strong>DevOps:</strong> Vercel, Netlify, Firebase, Docker
            </div>
            <div class="skill-item">
                <strong>Creative:</strong> Adobe Creative Suite, Figma
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">EDUCATION</h2>
        <div class="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Holy Cross College, Philippines | 2020 - 2024</p>
            <p style="font-family: 'Arial', sans-serif; font-size: 0.9em; font-style: italic;">Graduated with honors, web development specialization</p>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">PROJECTS</h2>
        <div class="project-item">
            <h3>EduSchedule</h3>
            <p class="tech">JavaScript, PHP, MySQL</p>
            <p>Web-based system for managing teacher accounts, class schedules, and student records with modern UI</p>
            <ul>
                <li>Implemented responsive user interfaces with intuitive navigation</li>
                <li>Built scalable backend using PHP and MySQL</li>
                <li>Optimized performance through efficient database queries</li>
            </ul>
        </div>
        
        <div class="project-item">
            <h3>Tourist Spots Web Platform</h3>
            <p class="tech">Next.js, Tailwind CSS, Drizzle ORM</p>
            <p>Travel platform showcasing local attractions with interactive maps and real-time feedback</p>
            <ul>
                <li>Integrated modern web technologies for dynamic visual experiences</li>
                <li>Designed responsive UI with Tailwind CSS and animations</li>
                <li>Built scalable backend using Drizzle ORM</li>
            </ul>
        </div>
        
        <div class="project-item">
            <h3>Portfolio Website</h3>
            <p class="tech">Next.js, Tailwind CSS, Vercel</p>
            <p>Modern personal portfolio with interactive user interface elements</p>
            <ul>
                <li>Implemented dynamic animations and smooth transitions</li>
                <li>Deployed on Vercel with optimized performance</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">EXPERIENCE</h2>
        <div class="experience-item">
            <h3>Entry-Level Web Developer</h3>
            <p class="subtitle">Freelance & Personal Projects | 2024 - Present</p>
            <ul>
                <li>Developed responsive web applications with modern best practices</li>
                <li>Utilized Git for collaborative development workflows</li>
                <li>Applied component-based architecture and frontend development practices</li>
                <li>Built full-stack applications using React, Node.js, and databases</li>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
