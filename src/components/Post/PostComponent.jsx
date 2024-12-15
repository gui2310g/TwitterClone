import { Post, PostBody, PostFooter } from "./PostStyled.jsx";
import { FaHeart, FaComments } from "react-icons/fa";
import TweetUser from "../TweetUser/TweetUserComponent.jsx";
import PropTypes from "prop-types";

const PostComponent = ({ userAvatar, name, text, banner }) => {
  return (
    <Post>
      <PostBody>
        <TweetUser primary userAvatar={userAvatar} name={name} />

        <div id="description">
          <p>{text}</p>
          <img src={banner} alt="image post" />
        </div>
      </PostBody>

      <PostFooter>
        <section>
          <FaHeart />
        </section>

        <section>
          <FaComments />
        </section>
      </PostFooter>
    </Post>
  );
};

PostComponent.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};

export default PostComponent;
