import Header from "../../assets/components/Header/Header"
import Post from "../../assets/components/Post/Post.jsx"
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

    console.log(Tweets);

    return ( 
        <Main>
            <Header/>


            <section id='posts'>
                <div className="TweetBox">
                    <form action="">
                        <div className="TweetBoxInput">
                           
                            <img src={defaultAvatar} alt="Twitter userAvatar" />
                           

                            <input type="text" placeholder="What's Happening?"/>
                        </div>
                        
                        <div>
                            <div>

                            </div>

                            <button className="TweetBoxButton">Tweet</button>
                        </div>
                    </form>
                </div>
                {
                Tweets.map((index) => (
                        <Post 
                            key={index.id}
                            username={index.username}
                            text={index.text}
                            userAvatar={index.userAvatar}
                            banner={index.banner}
                            likes={index.likes.length}
                            comments={index.comments.length}
                        />
                    )
                )}
            </section>
        </Main>
    )
}

export default Home;