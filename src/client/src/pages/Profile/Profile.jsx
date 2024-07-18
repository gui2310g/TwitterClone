import { useEffect, useState } from "react";

import { ProfilePage } from "./ProfileStyled.jsx";

import BackgroundImage from "../../assets/imgs/TwitterBackground.png";
import BackgroundAvatar from "../../assets/imgs/defaultAvatar.png";
import Post from "../../assets/components/Post/Post.jsx";
import TweetButton from "../../assets/components/TweetButton/TweetButton.jsx";

import { GetAllTweets } from "../../services/TweetsServices.js";

const Profile = () => {
    const [Tweets, setTweets] = useState([]);

    async function findAllTweets() {
      try {
          const response = await GetAllTweets();
          setTweets(response.data.results);
      } catch (error) {
          setTweets([])
      }
    }

    useEffect(() => {
        findAllTweets()
    }, [])

  return (
    <ProfilePage>
      <section id="profile-name">
        <p>Nome de Perfil</p>
        <span>14 posts</span>
      </section>

      <section id="profile">
        <div id="background">
          <img src={BackgroundImage} alt="" />
        </div>

        <div id="fds">
          <div id="user">
            <img src={BackgroundAvatar} alt="" />
            <strong>The King Macho</strong>
            <span>@Guilher45105997</span>

            <div id="followers">
              <span>20 followers</span>
              <span>20 following</span>
            </div>
          </div>

          <TweetButton secondary text={"Edit Profile"} />
        </div>
      </section>

      {
        Tweets.map((user, index) => (
          <Post 
            primary
            key={index.id}
            name={user.username}
            text={user.text}
            userAvatar={user.userAvatar}
            banner={user.banner}
            likes={user.likes.length}
            comments={user.comments.length}
          />
        ))
      }
    </ProfilePage>
  );
};

export default Profile;
