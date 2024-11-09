import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/choose-user');
    // Implement your login functionality or redirect here
  };

  const handleGuestLogin = () => {
    navigate('/choose-user'); // Navigate to Choose User page
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.imageContainer}>
          <img 
              src="https://blog.darwinbox.com/hubfs/The%20Importance%20of%20an%20Attendance%20System%20Dashboard-%20Simplifying%20HR%20Management.jpg" 
              alt="Students" 
              style={styles.image} 
          />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.welcomeTitle}>Welcome to<br /> Attendance Management<br />System with Report </h1>
          <p style={styles.descriptionText}>
            Streamline management, class organization, and add students and faculty.
            Seamlessly track attendance, assess performance, and provide feedback.
            Access records, view marks, and communicate effortlessly.
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.loginButton} onClick={handleLogin}>Login</button>
            <button style={styles.guestButton} onClick={handleGuestLogin}>Login as Guest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#001f3f', // Navy blue background
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap', // Allow wrapping on smaller screens
  },
  imageContainer: {
    flex: '1 1 50%', // 50% width on larger screens
    maxWidth: '50%', // Limit max width to 50%
    overflow: 'hidden', // Ensure overflow is hidden
    padding: '10px', // Padding for spacing
  },
  image: {
    width: '100%',
    height: 'auto', // Ensure the aspect ratio is maintained
    objectFit: 'cover', // Makes sure the image covers the entire area without distortion
    borderRadius: '10px', // Optional: Add border radius
  },
  textContainer: {
    flex: '1 1 50%', // 50% width on larger screens
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  welcomeTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff', // White text for contrast
    textAlign: 'center',
    margin: '0 0 10px 0',
  },
  descriptionText: {
    fontSize: '1rem',
    color: '#dddddd', // Light gray text for contrast
    textAlign: 'center',
    margin: '10px 0 20px 0',
    padding: '0 20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  loginButton: {
    backgroundColor: '#7f56da',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '200px',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  guestButton: {
    backgroundColor: '#fff',
    color: '#7f56da',
    border: '2px solid #7f56da',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '200px',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  // Media queries for responsive design
  '@media (max-width: 768px)': {
    contentWrapper: {
      flexDirection: 'column', // Stack vertically on small screens
      alignItems: 'center', // Center content
    },
    imageContainer: {
      maxWidth: '100%', // Full width on smaller screens
      padding: '20px 0', // Add vertical padding
    },
    textContainer: {
      maxWidth: '100%', // Full width on smaller screens
      padding: '20px', // Add padding
    },
    welcomeTitle: {
      fontSize: '2rem', // Smaller title on mobile
    },
    descriptionText: {
      fontSize: '0.9rem', // Smaller text on mobile
    },
  },
};

export default HomePage;
