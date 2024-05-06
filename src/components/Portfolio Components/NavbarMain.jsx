import { Link } from 'react-router-dom';

export const NavbarMain = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/Educational-History" style={linkStyle}>Educational History</Link>
        <Link to="/professional" style={linkStyle}>Professional Skills</Link>
        <Link to="/projects" style={linkStyle}>Professional Projects</Link>
        <Link to="/hobbies" style={linkStyle}>Hobbies</Link>
        <Link to="/ambitions" style={linkStyle}>Life Ambitions</Link>
        <Link to="/efforts-for-country" style={linkStyle}>Efforts for Country</Link>
        <Link style={{ float: 'right', ...linkStyle }} to="/contact">Contact Me</Link>
      </nav>
    </div>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333', 
  marginRight: '10px',
  fontWeight: 'bold', 
  fontSize: '16px', 
  transition: 'color 0.3s', 
};

export default NavbarMain;
