import { Posts, PostBody, PostFooter } from "./PostStyled.jsx"
import { FaHeart, FaComments } from "react-icons/fa";
import User from "../TweetUser/User.jsx";
const Post = (props) => {
    return (
        <Posts>
            <PostBody>
                <User primary userAvatar={props.userAvatar} name={props.name}/>

                <div id="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa laudantium, natus earum sapiente libero soluta iure nisi sequi pariatur animi amet quasi aperiam neque sit voluptatum porro eos odit.</p>
                     <img src={props.banner} alt="image post" />
                </div>

               
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