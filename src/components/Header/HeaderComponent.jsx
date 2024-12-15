import { FaXTwitter, FaMessage, FaGear } from "react-icons/fa6";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Header, Nav, UserLogged } from "./HeaderStyled.jsx";
import AuthButton from "../AuthButton/AuthButtonComponent.jsx";
import TweetUser from "../TweetUser/TweetUserComponent.jsx";
import { useHeader } from "./useHeader.jsx";

const HeaderComponent = () => {
  const { user, logout } = useHeader();

  return (
    <Header>
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

        {user && Cookies.get("token") ? (
          <>
            <UserLogged>
              <TweetUser
                secondary
                userAvatar={user.avatar}
                name={user.username}
              />
              <button id="logoutButton" onClick={logout}>
                <IoIosLogOut />
              </button>
            </UserLogged>
          </>
        ) : (
          <Link to="/auth">
            <AuthButton type="submit" text="Login" />
          </Link>
        )}
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
