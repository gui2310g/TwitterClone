import { Button } from "./TweetButtonStyled.jsx";

const TweetButton = (props) => {
  return (
    <Button primary={props.primary} secondary={props.secondary}>
      {props.text}
    </Button>
  );
};

export default TweetButton;
