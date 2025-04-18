import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/pages/Home/Home';
import Courses from './views/pages/Courses/Courses';
import Upload from './views/pages/Upload/Upload';
import Dashboard from './views/pages/Dashboard/Dashboard';
import Admin from './views/pages/Admin/Admin';
import HelpAndSettings from './views/pages/HelpAndSettings/HelpAndSettings';
import Navbar from './views/components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> { }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/help" element={<HelpAndSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
