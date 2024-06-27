import Header from "../../assets/components/Header/Header"
import Post from "../../assets/components/Post/Post.jsx"
import TweetButton from "../../assets/components/TweetButton/TweetButton.jsx";
import Widgets from "../../assets/components/widget/Widgets.jsx";

import { Main } from "./HomeStyled.jsx"

import { GetAllTweets } from "../../services/TweetsServices.js";
import { useState, useEffect } from "react";

import defaultAvatar from "../../assets/imgs/defaultAvatar.png"

const Home = () => {

    const [Tweets, setTweets] = useState([]);

    async function findAllTweets() {
        const response = await GetAllTweets();
        setTweets(response.data.results);
    }

    useEffect(() => {
        findAllTweets();
    }, []);

  

    return ( 
        <Main>
            <section id='posts'>
                <div className="TweetBox">
                    <form action="">
                        <div className="TweetBoxInput">
                           
                            <img src={defaultAvatar} alt="Twitter userAvatar" />
                           

                            <input type="text" placeholder="What's Happening?"/>
                        </div>
                        
                        <div className="TweetBoxButton">
                            <TweetButton secondary text={"Tweet"}/>
                        </div>
                    </form>
                </div>
                
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
                    )
                )}
            </section>

        </Main>
    )
}

export default Home;