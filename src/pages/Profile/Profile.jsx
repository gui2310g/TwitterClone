import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Modal, ProfileBody, ProfileHeader, ProfilePage } from "./ProfileStyled.jsx";
import TweetButton from "../../components/TweetButton/TweetButtonComponent.jsx";
import Post from "../../components/Post/PostComponent.jsx";
import { useProfile } from "./useProfile.jsx";
import Cookies from "js-cookie";
import { createPortal } from "react-dom";
const Profile = () => {
  const { viewedUser, tweets, user, modal, setModal } = useProfile();

  const isOwnProfile = Cookies.get("token") && viewedUser.id === user.id;

  return (
    <ProfilePage>
      <ProfileHeader>
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <div id="userHeader">
          <h3>{viewedUser.username}</h3>
          <span>{tweets.length} posts</span>
        </div>
      </ProfileHeader>

      <ProfileBody>
        <img
          src={viewedUser.background}
          alt="User background"
          id="imgbackground"
        />
        <div id="user">
          <div id="userDescription">
            <img src={viewedUser.avatar} alt="User profile avatar" />
            <strong>{viewedUser.username}</strong>
            <span>@{viewedUser.username}</span>
            <div id="followers">
              <span>20 followers</span>
              <span>20 following</span>
            </div>
          </div>
          {isOwnProfile ? (
            <>
              <TweetButton
                onClick={() => setModal(true)}
                secondary
                text={"Edit Profile"}
              />
              {modal &&
                createPortal(
                  <Modal>
                    <div
                      className="modal-backdrop"
                      onClick={() => setModal(false)}
                    >
                      <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <h2>Edit Profile</h2>
                        <button onClick={() => setModal(false)}>Close</button>
                      </div>
                    </div>
                  </Modal>,
                  document.body
                )}
            </>
          ) : (
            <TweetButton text={"Follow"} />
          )}
        </div>
      </ProfileBody>

      {tweets.length === 0 && <h2>This user doesnt have a tweet</h2>}

      {tweets.map((item) => (
        <Post
          primary
          key={item.id}
          id={item.userId}
          name={item.username}
          text={item.text}
          userAvatar={item.userAvatar}
          banner={item.banner}
        />
      ))}
    </ProfilePage>
  );
};

export default Profile;
