import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '2rem', lineHeight: '1.6' }}>
      
      <img
  src={`${process.env.PUBLIC_URL}/profile.png`}
  alt="Dania Ansari"
  style={{
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  }}
/>

      <h2 style={{ marginBottom: '1rem' }}>About This Project</h2>

      <p><strong>Project Title:</strong> DevOps Attendance Web App</p>
      <p><strong>Created By:</strong> Dania Ansari</p>
      <p><strong>Student ID:</strong> FA22-BSCS-0065</p>
      <p><strong>Date:</strong> 23rd May 2025</p>
      <p><strong>Course Instructor:</strong> Sir Aukasha Ahmed Khan</p>

      <hr style={{ margin: '1.5rem 0' }} />

      <p>
        This website is a simple, responsive attendance management system built using React.js. It features multiple pages
        connected through a navigation bar, including an Attendance page that fetches data using a fake API for demonstration purposes.
      </p>

      <p>
        The goal of the project is to demonstrate how to create a dynamic multi-page web application using core React concepts
        such as components, routing, and API integration — all without external styling libraries, to keep it lightweight and educational.
      </p>

      <p>
        Future improvements could include database integration, persistent attendance tracking, login authentication, and dashboard analytics.
      </p>
    </div>
  );
}
