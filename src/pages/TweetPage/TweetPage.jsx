import PostComponent from "../../components/Post/PostComponent"
import { useTweetPage } from "./useTweetPage";

const TweetPage = () => {
    const { tweet } = useTweetPage();

    return (
    <>
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
    </>
    )
}

export default TweetPage;