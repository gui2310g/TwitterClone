import { Posts, PostBody, PostFooter } from "./PostStyled.jsx"
import { FaHeart, FaComments } from "react-icons/fa";
import TweetUser from "../TweetUser/User.jsx";
const Post = (props) => {
    return (
        <Posts>
            <PostBody>
            <TweetUser primary userAvatar={props.userAvatar} name={props.name}/>

                <div id="description">
                    <p>{props.text}</p>
                    <img src={props.banner} alt="image post" />
                </div>   
            </PostBody>

            <PostFooter>
                <section><FaHeart /></section>

                <section><FaComments /></section>
            </PostFooter>
        </Posts>
    )
}

export default Post;