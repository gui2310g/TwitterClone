import PostComponent from "../../components/Post/PostComponent.jsx";
import { useFormHook } from "../../hooks/useFormHook.jsx";
import { commentSchema } from "../../schemas/commentSchema.js";
import { useTweetPage } from "./useTweetPage.jsx";
import CreateFormComponent from "../../components/CreateForm/CreateFormComponent.jsx";

const TweetPageComponent = () => {
    const { 
        register: registerComment, 
        handleSubmit: handleComment,
        reset,
        errors: errorsComment
    } = useFormHook(commentSchema);
    
    const { tweet, comments, onSubmit } = useTweetPage(reset);
 
    return (
        <section style={{ border: "1px solid gray" }}>
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

            <CreateFormComponent
                handleSubmit={handleComment}
                onSubmit={onSubmit}
                register={registerComment}
                errors={errorsComment}
                title="Insert a comment here"
                value="Comment"
            />

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
        </section>
    )
}

export default TweetPageComponent;