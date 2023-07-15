import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header style={{ height: "250px", overflow: 'hidden' }}>
      <nav className="nav">
        <nav className="nav-item">
          <nav className="nav-link">
            <Link to="/" className="centered-link">
              <img className="img-fluid img-thumbnail logo" src="https://plus.unsplash.com/premium_photo-1668902223894-053948883caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="connected-logo" />
              <div className="centered-text">ConnectEd</div>
            </Link>
          </nav>
        </nav>
        <nav className="nav-item">
          <nav className="nav-link">
            <Link to="/about">
              <div>About</div>
            </Link>
          </nav>
        </nav>
        <nav className="nav-end nav-item">
          <nav className="nav-link">
            <Link to="/login">
              <div>Log In</div>
            </Link>
          </nav>
        </nav>
      </nav>

      <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1504205271916-b063ac199484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="parent and kid" />
    </header>
  )
}

export default Header;
