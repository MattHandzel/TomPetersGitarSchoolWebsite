// import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
    <header className="Header-header">
        <span id="">
          {
          /*Basically the Link object adds a link (like an a tag) 
          onto the elements that are inside of it, the to="" attribute
        is just where to go to in the router object in index.js*/}
          <Link to="home"><div>Home</div></Link>
          {/* <Link to="contact">Contact<</Link> */}
          <Link to="photos"><div>Photos</div></Link>
          <Link to="about"><div>About</div></Link>
          <Link to="contact"><div>Contact</div></Link>
        </span>
      </header>
    </div>
  );
}

export default Header;
