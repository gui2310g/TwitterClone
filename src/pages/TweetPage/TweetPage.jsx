import PostComponent from "../../components/Post/PostComponent.jsx"
import { useFormHook } from "../../hooks/useFormHook.jsx";
import { commentSchema } from "../../schemas/commentSchema.js";
import { TweetPage } from "./TweetPageStyled.jsx";
import { useTweetPage } from "./useTweetPage.jsx";

const TweetPageComponent = () => {
    const { 
        register: registerComment, 
        handleSubmit: handleComment,
        reset,
        errors: errorsComment
    } = useFormHook(commentSchema);
    
    const { tweet, comments, onSubmit } = useTweetPage(reset);
 
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

        <form onSubmit={handleComment(onSubmit)}>
            <h2>Insert a comment here</h2>
            <textarea
                placeholder="Insert a text"
                {...registerComment("text")}
            />
            {errorsComment.text && <span>{errorsComment.text.message}</span>}

            <label htmlFor="url">Image URL:</label>
            <input
                type="text"
                id="url"
                placeholder="Insert an image link here"
                {...registerComment("banner")}
            />
            {errorsComment.banner && <span>{errorsComment.banner.message}</span>}

            <input type="submit" value="Comment" id="submit" />
        </form>

        {comments.length === 0 && <h2>This tweet does not have a comment</h2>}

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