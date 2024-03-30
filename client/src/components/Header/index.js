import {Link} from "react-router-dom"
import "./index.css"

const Header = ({username, logout}) => (
  <div className="header-container">
    <ul className="header-list-container">
      <Link to="/" className="header-link-element"><li className="header-list-element">Home</li></Link>
      <Link to="/menu" className="header-link-element"><li className="header-list-element">Menu</li></Link>
      <Link to="/about" className="header-link-element"><li className="header-list-element">About</li></Link>
      <Link to="/contacts" className="header-link-element"><li className="header-list-element">Contact</li></Link>
    </ul>
    <div className="header-button-container">
      <p className="header-user-profile"> {username}</p>
      <button onClick={logout} className="header-logout-button">Logout</button>
    </div>
  </div>
);

export default Header;
