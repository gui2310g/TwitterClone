import { Posts, PostBody, PostFooter } from "./PostStyled.jsx"
import { FaHeart, FaComments } from "react-icons/fa";

const Post = (props) => {
    return (
        <Posts>
            <PostBody>
                <div id="user">
                    <div id="photo">
                    <img src={props.userAvatar} alt="user Avatar" id="userphoto"/>  
                    </div>
                
                    <h2>{props.username}</h2>
                    </div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>

                <img src={props.banner} alt="image post" />
            </PostBody>

            <PostFooter>
                <section>
                    <FaHeart />
                    <span>{props.likes}</span>
                </section>

                <section>
                    <FaComments />
                    <span>{props.comments}</span>
                </section>
            </PostFooter>
        </Posts>
    )
}

export default Post;