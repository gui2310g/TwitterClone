import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { Widget, Search } from "./WidgetsStyled.jsx";
import TweetButton from "../TweetButton/TweetButton.jsx";

import { GetAllUsers } from "../../../services/userServices.js";

import User from "../TweetUser/User.jsx";


const Widgets = () => {

    const [user, setUsers] = useState([])

    async function findAllUsers() {
        const response = await GetAllUsers();
        setUsers(response.data);
    }

    useEffect(() => {
        findAllUsers();
    }, []);

    return (
        <Widget>
            <Search>
                <form action="">
                    <FaSearch/>
                    <input type="text" placeholder="Search"/>
                    
                </form>
            </Search>

            <div id="following">
                <h2>Who Follows?</h2>

                {user && (
                    user.map((user, index) => {
                        return (
                            <div id="users" key={index._id}>
                                <User secondary userAvatar={user.avatar} name={user.username} />
                                <TweetButton text={"Follow"} />
                            </div>
                        )
                    })
                )}
            </div>
        </Widget>
    )
}

export default Widgets;