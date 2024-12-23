import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Cookies from "js-cookie";

import { useProfile } from "./useProfile.jsx";
import { 
  Modal, 
  ModalContent, 
  ProfileBody,
  ProfileHeader,
  ProfilePage, 
  Overlay 
} from "./ProfileStyled.jsx";

import TweetButton from "../../components/TweetButton/TweetButtonComponent.jsx";
import Post from "../../components/Post/PostComponent.jsx";
import { useFormHook } from "../../hooks/useFormHook.jsx";
import { UserSchema } from "../../schemas/UserSchema.js";

const Profile = () => {
  const { 
    register: registerUser, 
    handleSubmit: handleUser,
    reset,
    errors: errorsUser
  } = useFormHook(UserSchema); 
  const { viewedUser, tweets, user, modal, setModal, onSubmit } = useProfile(reset);
  const isOwnProfile = Cookies.get("token") && viewedUser.id === user.id;
  
  return (
    <ProfilePage>
      {modal && <Overlay $isVisible={modal} />}
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
                  <ModalContent>
                    <div className="modal-header">
                      <h2>Edit Profile</h2>
                      <button onClick={() => setModal(false)}>X</button>
                    </div>

                    <form className="modal-form" onSubmit={handleUser(onSubmit)}>
                      <label htmlFor="image">Image URL</label>
                      <input 
                        type="text" 
                        id="image" 
                        placeholder="Insert a image url"
                        {...registerUser("avatar")}
                      />
                      {errorsUser.avatar && <span>{errorsUser.avatar.message}</span>}

                      <label htmlFor="background">Background URL</label>
                      <input 
                        type="text" 
                        id="background" 
                        placeholder="insert a background-url" 
                        {...registerUser("background")}
                      />
                      {errorsUser.background && <span>{errorsUser.background.message}</span>}

                      <input type="submit" value="Submit" placeholder="Submit"/>
                    </form>
                  </ModalContent>
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
