import './HeaderBar.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
    <header className="Header-header">
        <span id="header-bar">
          {
          /*Basically the Link object adds a link (like an a tag) 
          onto the elements that are inside of it, the to="" attribute
        is just where to go to in the router object in index.js*/}
          <span className="title navElement">TPGS</span>
          <Link to="/" className="navElement">Home</Link>
          <Link to="photos" className="navElement">Photos</Link>
          <Link to="about" className="navElement">About</Link>
          <Link to="contact" className="navElement">Contact</Link>
        </span>
      </header>
    </div>
  );
}

export default Header;
