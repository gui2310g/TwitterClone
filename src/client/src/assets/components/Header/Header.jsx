import { FaXTwitter, FaMessage, FaGear } from "react-icons/fa6";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoNotifications, IoListSharp } from "react-icons/io5";

import { Headers, Button, Nav, NavLink } from "./HeaderStyled.jsx";

export const Header = () => {
    return (
        <Headers>
            <Nav> 
                <FaXTwitter />
                <NavLink href=""><FaHome/>Home</NavLink>
                <NavLink href=""><FaSearch />Explore</NavLink>
                <NavLink href=""><IoNotifications />Notifications</NavLink>
                <NavLink href=""><FaMessage />Messages</NavLink>
                <NavLink href=""><IoListSharp />Lists</NavLink>
                <NavLink href=""><FaUser />Profile</NavLink>
                <NavLink href=""><FaGear />Configurations</NavLink>
                <Button>Postar</Button>
            </Nav>
        </Headers>
    )
}

export default Header;

