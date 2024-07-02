import { FaXTwitter, FaMessage, FaGear } from "react-icons/fa6";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Headers, Nav } from "./HeaderStyled.jsx";

import TweetButton from "../TweetButton/TweetButton.jsx";

export const Header = () => {
  return (
    <Headers>
      <Nav>
        <Link to="/" id="Logo">
          <FaXTwitter />
        </Link>

        <Link to="/" className="headerLink">
          <FaHome className="HeaderIcon" />
          <span>Home</span>
        </Link>

        <Link to="/explore" className="headerLink">
          <FaSearch className="HeaderIcon" />
          <span>Explore</span>
        </Link>

        <Link to="/messages" className="headerLink">
          <FaMessage className="HeaderIcon" />
          <span>Messages</span>
        </Link>

        <Link to="/profile" className="headerLink">
          <FaUser className="HeaderIcon" />
          <span>Profile</span>
        </Link>

        <Link to="/settings" className="headerLink">
          <FaGear className="HeaderIcon" />
          <span>Configurations</span>
        </Link>

        <TweetButton primary text={"Tweet"} />
      </Nav>
    </Headers>
  );
};

export default Header;
