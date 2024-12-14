import { Users } from "./UserStyled.jsx";


const TweetUser = (props) => {
    return (
        <Users primary={props.primary} secondary={props.secondary}>
            <img src={props.userAvatar} alt="user Avatar" id="userphoto"/>  
            
            <div id="username">
                <h3>{props.name}</h3>
                <span>@{props.name}</span>
            </div>
        </Users>
    )
}

export default TweetUser;