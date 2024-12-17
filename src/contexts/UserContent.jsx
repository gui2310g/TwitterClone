import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext()

export default function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [viewedUser, setViewedUser] = useState({})
    
    return ( 
    <UserContext.Provider value={{ user, setUser, viewedUser, setViewedUser }}>
        {children}
    </UserContext.Provider>)
}

UserProvider.propTypes = { children: PropTypes.node.isRequired }