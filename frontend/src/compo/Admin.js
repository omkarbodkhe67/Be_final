import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate('/usman'); // Navigate to the UsMan component
  };

  const handleResult = () => {
    navigate('/resultchart'); // Navigate to the ResultChart component
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <div style={styles.buttonContainer}>
        <div style={styles.buttonWrapper}>
          <button style={styles.button} onClick={handleAdmin}>
            Add Details of Student
          </button>
        </div>
        <div style={styles.buttonWrapper}>
          <button style={styles.button} onClick={handleResult}>
            Result Summary
          </button>
        </div>
      </div>
    </div>
  );
};

// Internal CSS styles for Admin Dashboard
const styles = {
  container: {
    height: '100vh', // Full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: '20px',
    backgroundColor: '#001f3f', // Navy blue background
    color: 'white', // White text color for contrast
    textAlign: 'center',
  },
  title: {
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack buttons vertically on smaller screens
    justifyContent: 'center', // Center buttons
    alignItems: 'center', // Center buttons
    width: '100%', // Ensure buttons take full width
  },
  buttonWrapper: {
    margin: '10px 0', // Add vertical margin between buttons
    width: '100%', // Make buttonWrapper take full width
  },
  button: {
    padding: '15px 25px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for buttons
    color: '#001f3f', // Dark text for buttons
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    width: '100%', // Full width button
    maxWidth: '300px', // Limit button width for better appearance
  },
};

export default Admin;
