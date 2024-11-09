// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './compo/HomePage';
import ChooseUser from './compo/ChooseUser'; // Import ChooseUser
import Admin from './compo/Admin';
import Student from './compo/Student';
import Teacher from './compo/Teacher';
import UsMan from './compo/UsMan';
import ResultChart from './compo/ResultChart';
import StudentDashboard from './compo/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/choose-user" element={<ChooseUser />} /> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/resultchart" element={<ResultChart/>} />
        <Route path="/usman" element={<UsMan />} />
        <Route path="/studentdashboard" element={<StudentDashboard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
