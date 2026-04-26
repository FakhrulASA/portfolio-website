import React from 'react';

const About: React.FC = () => {
  const skills = [
    { category: 'Languages', items: ['Kotlin', 'Dart', 'Java', 'Swift', 'Python', 'SQL', 'C++', 'Groovy', 'Bash'] },
    { category: 'Mobile Development', items: ['Android SDK', 'Jetpack Compose', 'Flutter', 'KMP', 'SwiftUI', 'UIKit'] },
    { category: 'Architecture', items: ['Clean Architecture', 'MVVM', 'MVP', 'SOLID', 'BLoC Pattern', 'Modularization'] },
    { category: 'Libraries & Tools', items: ['Hilt/Dagger', 'Retrofit', 'Ktor', 'Dio', 'Google Maps SDK', 'Room DB', 'ExoPlayer', 'WebRTC'] },
    { category: 'Fintech & Security', items: ['PCI-DSS', 'e-KYC', 'Biometric Auth', 'Tokenization', 'NFC/QR Payments', 'AES-256', 'TLS 1.3'] },
    { category: 'Cloud & DevOps', items: ['Firebase', 'Supabase', 'Docker', 'Jenkins', 'GitHub Actions', 'AWS S3', 'AWS EC2'] },
    { category: 'Testing', items: ['JUnit', 'Mockito', 'UI Testing', 'Integration Testing', 'Postman', 'Crashlytics', 'Mixpanel'] },
  ];

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'MIAKI (Grameenphone)',
      period: 'Oct 2023 – Present',
      location: 'Dhaka, Bangladesh',
      points: [
        'Flagship project: MyGP — largest self-service telecom app in Bangladesh with 20M+ MAU.',
        'Spearheaded ecosystem development ensuring 99.9% uptime through robust modular architecture.',
        'Refactored 4,000+ lines of legacy code, improving app launch speed by 150%.',
        'Engineered dynamic deep link system; integrated bKash Payment Gateway, VMAX, and Mixpanel.',
        'Enforced TDD and automated testing, reducing regression bugs by 40% across release cycles.',
        'Enhanced data protection using AES-256 encryption and SSL Pinning against MITM attacks.',
      ],
    },
    {
      role: 'Mobile Application Developer',
      company: 'UCB Fintech Company Limited',
      period: 'Oct 2022 – Oct 2023',
      location: 'Dhaka, Bangladesh',
      points: [
        'Core project: upay — secure digital wallet serving 10 million users with P2P & Merchant capabilities.',
        'Implemented ML Kit for real-time face detection and liveness checks for e-KYC verification.',
        'Developed secure transaction lifecycles for QR Payments and Fund Transfers via Tokenization.',
        'Migrated legacy codebase to Clean Architecture, resolving 1,800+ deprecations.',
        'Achieved 99.8% crash-free rate using LeakCanary and rigorous error handling protocols.',
        'Built in-app OCR and server-driven UI framework using JSON for the Omnichannel feature.',
      ],
    },
    {
      role: 'Course Instructor (Part-Time)',
      company: 'Daffodil International University (HRDI)',
      period: 'Jun 2022 – Mar 2024',
      location: 'Dhaka, Bangladesh',
      points: [
        'Conducted advanced training in Android & Flutter development with industry best practices.',
        'Mentored 50+ students per cohort, achieving a 90% certification rate.',
        'Facilitated career placement for top-performing graduates.',
      ],
    },
    {
      role: 'Android Engineer',
      company: 'Ami Probashi (Bangla Trac Group)',
      period: 'Mar 2021 – Oct 2022',
      location: 'Dhaka, Bangladesh',
      points: [
        'Launched Ami Probashi — official government platform for migrant workers, scaling to 5M+ users.',
        'Developed automated identity verification using NID scanning, QR codes, and TensorFlow OCR.',
        'Introduced modular architecture, accelerating feature development velocity by 1.5x.',
        'Led integration of complex public sector APIs and Secure Payment Gateways.',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Artificial Soft',
      period: 'Nov 2019 – Mar 2021',
      location: 'Dhaka, Bangladesh',
      points: [
        'Engineered SPC Bus Finder using Google Maps API for real-time route planning.',
        'Built native Android applications for e-commerce clients using Java and XML.',
        'Integrated WebSocket for live data in ride-sharing solutions and Retrofit for REST APIs.',
      ],
    },
  ];

  const education = [
    {
      degree: 'M.Sc. in Computers & Information Technology',
      school: 'Bangladesh University of Professionals (BUP)',
      period: '2021 – 2023',
      cgpa: 'CGPA: 3.66 / 4.00',
    },
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      school: 'Daffodil International University (DIU)',
      period: '2016 – 2020',
      cgpa: 'CGPA: 3.93 / 4.00',
    },
  ];

  const certifications = [
    { name: 'AML & Fintech Security Compliance', issuer: 'UCB Fintech', year: '2023' },
    { name: 'Flutter Application Development', issuer: 'Google', year: '2020' },
    { name: 'Java Programming Masterclass', issuer: 'Udemy', year: '2019' },
  ];

  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Building Impactful<br />Mobile Experiences</h2>
          <p className="section-desc">
            Senior Software Engineer with 5+ years specializing in Android and Flutter for Digital Banking
            and Telecom. Expert in Clean Architecture, PCI-DSS Security, and Test-Driven Development.
            Passionate about reducing technical debt and leading high-performing engineering teams.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <div className="section-header">
          <div className="section-label">Core Skills</div>
          <h2 className="section-title">Technical Expertise</h2>
        </div>
        <div className="skills-section">
          {skills.map((group) => (
            <div className="skills-category" key={group.category}>
              <div className="skills-category-name">{group.category}</div>
              <div className="skills-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <div className="section-header">
          <div className="section-label">Work History</div>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-date">{exp.period} · {exp.location}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company"><span>{exp.company}</span></div>
              <ul className="timeline-points">
                {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <div className="section-header">
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-meta">{edu.period} · {edu.cgpa}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <div className="section-header">
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="cert-list">
          {certifications.map((cert, i) => (
            <div className="cert-item" key={i}>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
              <span className="cert-year">{cert.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;