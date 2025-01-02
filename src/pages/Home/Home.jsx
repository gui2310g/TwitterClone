import PostComponent from "../../components/Post/PostComponent.jsx";
import { useHome } from "./useHome.jsx";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent.jsx";
import { useFormHook } from "../../hooks/useFormHook.jsx";
import { TweetsSchema } from "../../schemas/TweetsSchema.js";
import CreateFormComponent from "../../components/CreateForm/CreateFormComponent.jsx";

const Home = () => {
  const { user } = useContext(UserContext);
  const { 
    register: registerPost, 
    handleSubmit: handlePost,
    reset,
    errors: errorsPost
    } = useFormHook(TweetsSchema);
  const { Tweets, onSubmit } = useHome(reset);

  return (
    <section style={{ border: "1px solid gray" }}>
      <CreateFormComponent
        handleSubmit={handlePost}
        onSubmit={onSubmit}
        register={registerPost}
        errors={errorsPost}
        title={`What happening ${user.username}? Create a post today`}
        value="Post"
      />
    
      {Tweets.map((tweet) => (
        <PostComponent  
          primary
          idUser={tweet.userId} 
          tweetId={tweet.id}   
          key={tweet.id}
          name={tweet.username}
          text={tweet.text}
          userAvatar={tweet.userAvatar}
          banner={tweet.banner}
          isActive={true}
          showComments={true}
        />
      ))}
    </section>
  );
};

export default Home;