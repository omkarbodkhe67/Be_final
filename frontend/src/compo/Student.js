// ./compo/Student.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const navigate = useNavigate();

  const handleViewResults = () => {
    // Navigate to the results page or implement functionality here
    navigate('/studentdashboard');
  };

  const handleViewAttendance = () => {
    // Navigate to the attendance report page or implement functionality here
    navigate('/student/attendance');
  };

  return (
    <div style={styles.container}>
      <h1>Student Page</h1>
      <p>This is the student page.</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleViewResults} style={styles.optionButton}>
           Dashboard
        </button>
        <button onClick={handleViewAttendance} style={styles.optionButton}>
          View Attendance Report
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh', // Ensure the content fills the screen height
    backgroundColor: '#f9f9f9', // Light background color
  },
  buttonContainer: {
    marginTop: '20px', // Space between the text and buttons
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px', // Space between buttons
  },
  optionButton: {
    backgroundColor: '#7f56da', // Button color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '200px', // Max width for larger screens
    fontSize: '1rem',
  },
};

export default Student;
