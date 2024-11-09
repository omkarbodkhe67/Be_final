import React from 'react';

const StudentDashboard = () => {
  // Sample data
  const studentData = {
    grades: [
      { subject: 'Math', grade: 'A' },
      { subject: 'Science', grade: 'B+' },
      { subject: 'English', grade: 'A-' },
    ],
    attendance: '95%',
    upcomingAssignments: [
      { title: 'Math Homework', dueDate: '2024-10-20' },
      { title: 'Science Project', dueDate: '2024-10-25' },
    ],
    announcements: ['Parent-Teacher Meeting on 2024-10-15', 'School Closure on 2024-10-18'],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Dashboard</h1>
      
      <div style={styles.overviewPanel}>
        <h2>Overview Panel</h2>
        <p><strong>Grades:</strong></p>
        <ul>
          {studentData.grades.map((item, index) => (
            <li key={index}>{item.subject}: {item.grade}</li>
          ))}
        </ul>
        <p><strong>Attendance:</strong> {studentData.attendance}</p>
        <p><strong>Upcoming Assignments:</strong></p>
        <ul>
          {studentData.upcomingAssignments.map((assignment, index) => (
            <li key={index}>{assignment.title} (Due: {assignment.dueDate})</li>
          ))}
        </ul>
        <p><strong>Announcements:</strong></p>
        <ul>
          {studentData.announcements.map((announcement, index) => (
            <li key={index}>{announcement}</li>
          ))}
        </ul>
      </div>

      <div style={styles.quickLinks}>
        <h2>Quick Links</h2>
        <div style={styles.linkButtons}>
          <button style={styles.linkButton}>Grades</button>
          <button style={styles.linkButton}>Attendance</button>
          <button style={styles.linkButton}>Course Materials</button>
        </div>
      </div>
    </div>
  );
};

// Internal CSS styles for Student Dashboard
const styles = {
  container: {
    backgroundColor: '#001f3f', // Navy blue background for the entire screen
    color: 'white', // White text for contrast
    padding: '20px',
    minHeight: '100vh', // Ensure it covers the full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'flex-start', // Start from the top
  },
  title: {
    marginBottom: '30px',
  },
  overviewPanel: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent white for contrast
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    width: '100%', // Full width
    maxWidth: '800px', // Limit max width
  },
  quickLinks: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent white for contrast
    padding: '20px',
    borderRadius: '8px',
    width: '100%', // Full width
    maxWidth: '800px', // Limit max width
  },
  linkButtons: {
    display: 'flex',
    justifyContent: 'space-between', // Space buttons evenly
  },
  linkButton: {
    padding: '15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for buttons
    color: '#001f3f', // Dark text for buttons
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    margin: '0 10px', // Margin between buttons
    flex: 1, // Allow buttons to grow
  },
};

export default StudentDashboard;
