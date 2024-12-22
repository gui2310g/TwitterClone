import { Post, PostBody, PostFooter } from "./PostStyled.jsx";
import { FaHeart, FaComments } from "react-icons/fa";
import TweetUser from "../TweetUser/TweetUserComponent.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const PostComponent = ({ userAvatar, name, text, banner, id }) => {
  return (
    <Post>
      <PostBody>
        <Link to={`/profile/${id}`}>
          <TweetUser primary userAvatar={userAvatar} name={name} />
        </Link>
        
        <div id="description">
          <p>{text}</p>
          {banner && <img src={banner} alt="image post" />}
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
  id: PropTypes.number.isRequired,
};

export default PostComponent;
