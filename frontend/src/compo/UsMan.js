import React, { useState, useEffect } from 'react';

// Sample initial user data
const initialUsers = [
  { id: 1, name: 'JAY', role: 'student', email: 'jay@example.com', image: null },
  { id: 2, name: 'VEDANT', role: 'student', email: 'vedant@example.com', image: null },
];

const UsMan = () => {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null); // To store the image file
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    if (editUserId) {
      const userToEdit = users.find((user) => user.id === editUserId);
      if (userToEdit) {
        setName(userToEdit.name);
        setRole(userToEdit.role);
        setEmail(userToEdit.email);
        setImage(userToEdit.image); // Set the image for editing
      }
    } else {
      resetForm();
    }
  }, [editUserId, users]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Save the base64 string of the image
      };
      reader.readAsDataURL(file); // Convert image to base64 string
    }
  };

  const handleAddOrEditUser = () => {
    if (editUserId) {
      // Update existing user
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editUserId ? { ...user, name, role, email, image } : user
        )
      );
    } else {
      // Add new user
      const newUser = {
        id: users.length + 1,
        name,
        role,
        email,
        image, // Add the image to the new user
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
    resetForm();
  };

  const resetForm = () => {
    setEditUserId(null);
    setName('');
    setRole('student');
    setEmail('');
    setImage(null); // Reset the image field
  };

  const handleEditUser = (user) => {
    setEditUserId(user.id);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Management</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={styles.input}
        />
        {image && <img src={image} alt="User" style={styles.imagePreview} />} {/* Preview the uploaded image */}
        <button onClick={handleAddOrEditUser} style={styles.button}>
          {editUserId ? 'Update User' : 'Add User'}
        </button>
      </div>
      <h2 style={styles.userListTitle}>User List</h2>
      <ul style={styles.userList}>
        {users.map((user) => (
          <li key={user.id} style={styles.userListItem}>
            <span>{user.name} - {user.role} - {user.email}</span>
            {user.image && <img src={user.image} alt={user.name} style={styles.userImage} />} {/* Display user's image */}
            <button onClick={() => handleEditUser(user)} style={styles.editButton}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    minHeight: '100vh', // Ensures the container takes the full height of the viewport
    padding: '20px',
    backgroundColor: '#001f3f', // Navy blue background
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#fff', // White text color for contrast
  },
  title: {
    textAlign: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#7f56da',
    color: '#fff',
    cursor: 'pointer',
  },
  userListTitle: {
    textAlign: 'center',
  },
  userList: {
    listStyleType: 'none',
    padding: '0',
  },
  userListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  userImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginLeft: '10px',
  },
  imagePreview: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    marginTop: '10px',
  },
  editButton: {
    marginLeft: '10px',
    backgroundColor: '#ffc107',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  deleteButton: {
    marginLeft: '10px',
    backgroundColor: '#dc3545',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    color: '#fff',
  },
};

export default UsMan;
