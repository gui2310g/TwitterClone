import PostComponent from "../../components/Post/PostComponent.jsx"
import { TweetPage } from "./TweetPageStyled.jsx";
import { useTweetPage } from "./useTweetPage.jsx";

const TweetPageComponent = () => {
 
    const { tweet, comments } = useTweetPage();
 
    return (
    <TweetPage>
        {tweet && (
            <PostComponent 
                primary
                id={tweet.id}
                name={tweet.username}
                text={tweet.text}
                userAvatar={tweet.userAvatar}
                banner={tweet.banner}
                isActive={false}
                idUser={tweet.userId}
            /> 
        )}  
     
        {comments.length === 0 && <h2>This tweet doesnt have a comment</h2>}

        {
            comments.map((comment) => (
                <PostComponent 
                    key={comment.id}
                    name={comment.username}
                    text={comment.text}
                    userAvatar={comment.userAvatar}
                    banner={comment.banner}
                    isActive={false}
                    idUser={comment.userId}
                />
            ))
        }
    </TweetPage>
    )
}

export default TweetPageComponent;