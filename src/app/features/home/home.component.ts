import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

interface Project {
  title: string;
  description: string;
  tags: string[];
  iconBgClass: string;
  iconPath: string; // SVG path d attribute
  link?: string;
  detailedDescription?: string;
  images?: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      title: 'TAQ Delivery Agent App',
      description: 'Real-time GPS tracking, route optimization, and live fleet monitoring for expedited logistics operations.',
      tags: ['Flutter', 'GPS', 'MQTT'],
      iconBgClass: 'from-blue-500 to-purple-600',
      iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      link: 'https://apps.apple.com/in/app/taq/id6473887751',
      detailedDescription: 'A comprehensive solution for logistics companies to track their delivery agents in real-time. Features include route optimization using Google Maps API, offline support, and MQTT-based live tracking updates.',
      images: ['assets/taq.png']
    },
    {
      title: 'MGB Health Plan App',
      description: '10K+ downloads. Healthcare app with digital ID cards, claims management, provider discovery, and telehealth.',
      tags: ['Flutter', 'Healthcare', 'Firebase'],
      iconBgClass: 'from-green-500 to-teal-600',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      link: 'https://play.google.com/store/apps/details?id=com.allways&hl=en_IN',
      detailedDescription: 'Empowering members to manage their health plan on the go. Users can view digital ID cards, search for providers, check claim status, and access telehealth services securely.',
      images: ['assets/mgb.png']
    },
    {
      title: 'Smart School & University',
      description: 'Flutter Web system with role-based dashboards for academic management, attendance, and exams for IRAQ Region.',
      tags: ['Flutter Web', 'Dashboard'],
      iconBgClass: 'from-orange-500 to-red-600',
      iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      link: 'https://smartuniversity.qi.iq/',
      detailedDescription: 'A comprehensive academic management system tailored for educational institutions in the Iraq region. It supports multiple user roles (Admin, Teacher, Student, Parent) and covers attendance, exam scheduling, and grade management.',
      images: []
    },
    {
      title: 'Code Reviewer AI Agent',
      description: 'Intelligent AI agent using Gemini, Vector database and RAG for precise, context-aware automated code reviews.',
      tags: ['Flutter', 'Genkit', 'AI'],
      iconBgClass: 'from-purple-500 to-pink-600',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      link: 'https://ai-code-reviewer-64703.web.app/',
      detailedDescription: 'An AI-powered tool that automates code reviews by leveraging Google\'s Gemini models and RAG (Retrieval-Augmented Generation). It provides context-aware feedback, suggests improvements, and detects potential bugs.',
      images: ['assets/code-reviewer.png']
    },
    {
      title: 'Expensely',
      description: 'Mobile expense tracking application with offline-first architecture using Hive local database.',
      tags: ['Flutter', 'Hive'],
      iconBgClass: 'from-green-500 to-orange-600',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      link: 'https://play.google.com/store/apps/details?id=com.shivam.expensely_app',
      detailedDescription: 'A personal finance manager designed for offline usage. It uses Hive for fast, local storage, allowing users to track expenses and view reports without an internet connection. Sync functionality is available when online.',
      images: ['assets/expensely.png']
    },
    {
      title: 'Quiz Veda',
      description: 'Interactive quiz application with real-time scoring and user analytics powered by Firebase.',
      tags: ['Flutter', 'Firebase'],
      iconBgClass: 'from-indigo-500 to-blue-600',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      link: 'https://play.google.com/store/apps/details?id=com.tushar.quiz_app',
      detailedDescription: 'A  quiz game. Features include various categories, live leaderboards',
      images: ['assets/quiz1.png', 'assets/quiz2.png']
    },
    {
      title: 'Calorie AI',
      description: 'AI-powered calorie calculator with offline-first architecture using Hive local database.',
      tags: ['Flutter', 'Hive'],
      iconBgClass: 'from-yellow-500 to-blue-600',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      link: 'https://play.google.com/store/apps/details?id=com.tushar.calori_ai',
      detailedDescription: 'Track your calories, protein, carbs, and fat with ease! Stay on top of your nutrition goals, monitor daily progress, and take charge of your health—all in one simple app.',
      images: ['assets/calorie1.png', 'assets/calorie2.png']
    },
    
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  ngAfterViewInit(): void {
    this.createParticles();
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  }

  createParticles(): void {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 80; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 6 + 2;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 15 + 10;
      const delay = Math.random() * 8;
      
      // Random colors with gradient effect
      const colors = [
        'rgba(102, 126, 234, 0.6)',
        'rgba(118, 75, 162, 0.6)',
        'rgba(240, 147, 251, 0.6)',
        'rgba(79, 172, 254, 0.6)',
        'rgba(0, 242, 254, 0.6)'
      ];
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.boxShadow = `0 0 ${size * 2}px ${colors[Math.floor(Math.random() * colors.length)]}`;
      
      particlesContainer.appendChild(particle);
    }
  }

}