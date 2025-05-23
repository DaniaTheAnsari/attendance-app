import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Attendance() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const formatted = res.data.map((user) => ({
          name: user.name,
          present: false,
        }));
        setStudents(formatted);
      })
      .catch(err => console.error(err));
  }, []);

  const toggleAttendance = (index) => {
    const updated = [...students];
    updated[index].present = !updated[index].present;
    setStudents(updated);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Today's Attendance of class</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {students.map((student, index) => (
          <li key={index} style={{
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>{student.name}</span>
            <button
              onClick={() => toggleAttendance(index)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                border: 'none',
                color: 'white',
                backgroundColor: student.present ? '#16a34a' : '#dc2626',
                cursor: 'pointer'
              }}
            >
              {student.present ? 'Present' : 'Absent'}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
