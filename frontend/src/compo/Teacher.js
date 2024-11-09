import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Teacher = () => {
  // State to hold attendance data
  const [attendanceData, setAttendanceData] = useState([]);

  // Fetch live attendance data (from backend API)
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('http://localhost:5000/attendance'); // Replace with your backend URL
        setAttendanceData(response.data); // Store attendance data in state
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Teacher Page</h1>
      <p>This is the teacher's page. Here you can see the live attendance updates.</p>

      <div style={styles.attendanceSection}>
        <h2>Recent Attendance</h2>
        <ul>
          {attendanceData.length > 0 ? (
            attendanceData.map((record, index) => (
              <li key={index}>{record.name} - {record.timestamp}</li>
            ))
          ) : (
            <p>No attendance data available yet.</p>
          )}
        </ul>
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
  attendanceSection: {
    backgroundColor: '#e0e0e0', // Light gray background for attendance section
    padding: '15px',
    borderRadius: '8px',
    marginTop: '20px',
    maxWidth: '600px', // Limit max width
    marginLeft: 'auto',
    marginRight: 'auto', // Center the attendance section
  },
};

export default Teacher;
