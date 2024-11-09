// ./compo/ChooseUser.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseUser = () => {
  const navigate = useNavigate();

  const handleUserSelection = (userType) => {
    switch (userType) {
      case 'admin':
        navigate('/admin');
        break;
      case 'student':
        navigate('/student');
        break;
      case 'teacher':
        navigate('/teacher');
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Choose User</h1>
      <div style={styles.optionsContainer}>
        <div style={styles.option} onClick={() => handleUserSelection('admin')}>
          <img
            src="https://img.icons8.com/?size=100&id=114317&format=png&color=000000" // Admin logo
            alt="Admin Logo"
            style={styles.icon}
          />
          <h2 style={styles.optionTitle}>Admin</h2>
          <p style={styles.optionDescription}>
            Manage school operations, oversee staff, and monitor student performance.
          </p>
        </div>
        <div style={styles.option} onClick={() => handleUserSelection('student')}>
          <img
            src="https://img.icons8.com/?size=100&id=23319&format=png&color=000000" // Student logo
            alt="Student Logo"
            style={styles.icon}
          />
          <h2 style={styles.optionTitle}>Student</h2>
          <p style={styles.optionDescription}>
            Access your courses, view grades, and track your attendance.
          </p>
        </div>
        <div style={styles.option} onClick={() => handleUserSelection('teacher')}>
          <img
            src="https://img.icons8.com/?size=100&id=d5q9KF0l7VrO&format=png&color=000000" // Teacher logo
            alt="Teacher Logo"
            style={styles.icon}
          />
          <h2 style={styles.optionTitle}>Teacher</h2>
          <p style={styles.optionDescription}>
            Login as a teacher to create courses, assignments, and track student progress.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#001F3F', // Navy blue background
    color: '#ffffff', // White text color
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row', // Default to row for larger screens
    flexWrap: 'wrap', // Allow wrapping
    justifyContent: 'space-around', // Space between items
    width: '100%',
  },
  option: {
    backgroundColor: '#ffffff', // White background for cards
    color: '#000', // Black text color
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    width: '30%', // Adjust width for larger screens
    minWidth: '250px', // Minimum width for cards
    cursor: 'pointer',
    transition: 'transform 0.2s', // Add hover effect
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Optional: add shadow effect for depth
  },
  icon: {
    width: '50px', // Logo size
    height: '50px',
    marginBottom: '10px',
  },
  optionTitle: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  optionDescription: {
    fontSize: '1rem',
    margin: '10px 0',
  },
  // Media queries for responsive design
  '@media (max-width: 768px)': {
    optionsContainer: {
      flexDirection: 'column', // Stack vertically on small screens
      alignItems: 'center', // Center cards
    },
    option: {
      width: '80%', // Full width on smaller screens
      margin: '20px 0', // Add vertical margin between cards
    },
  },
};

export default ChooseUser;
