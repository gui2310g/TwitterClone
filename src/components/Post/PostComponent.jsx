import { Post, PostBody, PostFooter } from "./PostStyled.jsx";
import { FaHeart, FaComments } from "react-icons/fa";
import TweetUser from "../TweetUser/TweetUserComponent.jsx";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";


const PostComponent = ({ userAvatar, name, text, banner, tweetId, idUser, isActive}) => {

  const navigate = useNavigate();

  const handlePostClick = () => { if(isActive) navigate(`/tweets/${tweetId}`) };

  const handleLinkClick = (e) => { e.stopPropagation(); };
  return (
      <Post 
        onClick={handlePostClick} 
        $isActive={isActive} 
        className={!isActive ? "no-pointer-events" : ""}
      >
        <PostBody>
          <Link to={`/profile/${idUser}`} onClick={handleLinkClick}>
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
  isActive: PropTypes.bool,
  userAvatar: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  banner: PropTypes.string,
  tweetId: PropTypes.number,
  idUser: PropTypes.number
};

export default PostComponent;
