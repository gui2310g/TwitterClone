import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import { ProfileBody, ProfileHeader, ProfilePage } from "./ProfileStyled.jsx";
import TweetButton from "../../assets/components/TweetButton/TweetButton.jsx";
import { UserContext } from "../../Context/UserContent.jsx";
import { GetAllTweetsByUser } from "../../services/TweetsServices.js";
import Post from "../../assets/components/Post/Post.jsx";

const Profile = () => {
  const { user } = useContext(UserContext);

  const [tweets, setTweets] = useState([]);

  async function findAllTweetsByUser() {
    const response = await GetAllTweetsByUser();
    setTweets(response.data.TweetsByUser);
  }

  useEffect(() => {
    findAllTweetsByUser();
  }, []);

  return (
    <ProfilePage>
      <ProfileHeader>
        <Link to="/">
          <FaArrowLeft />
        </Link>

        <div id="userHeader">
          <h3>{user.username}</h3>
          <span>{tweets.length} posts</span>
        </div>
      </ProfileHeader>

      <ProfileBody>
        <img src={user.background} alt="User background" id="imgbackground" />

        <div id="user">
          <div id="userDescription">
            <img src={user.avatar} alt="User profile avatar" />
            <strong>{user.username}</strong>
            <span>@{user.username}</span>

            <div id="followers">
              <span>20 followers</span>
              <span>20 following</span>
            </div>
          </div>

          <TweetButton secondary text={"Edit Profile"} />
        </div>
      </ProfileBody>

      {tweets.length === 0 && <h2>This user doesn't have a tweet</h2>}
      
      {tweets.map((item) => (
        <Post
          primary
          key={item.id}
          name={item.username}
          text={item.text}
          userAvatar={item.userAvatar}
          banner={item.banner}
          likes={item.likes.length}
          comments={item.comments.length}
        />
      ))}
    </ProfilePage>
  );
};

export default Profile;
