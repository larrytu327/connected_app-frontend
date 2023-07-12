import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="footer nav navbar" style={{ height: "200px", overflow: 'hidden' }}>
        <Link to="/contact" className="nav-link" >
            <div className="footer">Contact</div>
        </Link>
        <Link to="/about" className="nav-link" >
            <div className="footer">About</div>
        </Link>
    </footer>
  )
}

export default Footer;