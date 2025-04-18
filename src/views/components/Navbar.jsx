import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/help">Help & Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
