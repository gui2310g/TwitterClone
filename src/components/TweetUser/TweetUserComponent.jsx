import { TweetUser } from "./TweetUserStyled.jsx";
import PropTypes from "prop-types";

const TweetUserComponent = ({primary, secondary, userAvatar, name}) => {
    return (
        <TweetUser $primary={primary} $secondary={secondary}>
            <img src={userAvatar} alt="user Avatar" id="userphoto"/>  
            
            <div id="username">
                <h3>{name}</h3>
                <span>@{name}</span>
            </div>
        </TweetUser>
    )
}

TweetUserComponent.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    userAvatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default TweetUserComponent;

