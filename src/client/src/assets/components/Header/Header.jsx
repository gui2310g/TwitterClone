import { FaXTwitter, FaMessage, FaGear } from "react-icons/fa6";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Headers, Nav, NavLink } from "./HeaderStyled.jsx";

import TweetButton from "../TweetButton/TweetButton.jsx";

export const Header = () => {
  return (
    <Headers>
      <Nav>
        <Link to="/">
          <FaXTwitter id="logo" />
        </Link>

        <NavLink to="/">
          <FaHome className="HeaderIcon" />
          <span>Home</span>
        </NavLink>

        <NavLink href="/search">
          <FaSearch className="HeaderIcon" />
          <span>Explore</span>
        </NavLink>

        <NavLink href="/messages">
          <FaMessage className="HeaderIcon" />
          <span>Messages</span>
        </NavLink>

        <NavLink href="/profile">
          <FaUser className="HeaderIcon" />
          <span>Profile</span>
        </NavLink>

        <NavLink href="/settings">
          <FaGear className="HeaderIcon" />
          <span>Configurations</span>
        </NavLink>

        <div className="TweetNavButton">
          <TweetButton primary text={"Tweet"} />
        </div>
      </Nav>
    </Headers>
  );
};

export default Header;
