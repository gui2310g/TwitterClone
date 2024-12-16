import { TweetButton } from "./TweetButtonStyled.jsx";
import PropTypes from "prop-types";
const TweetButtonComponent = ({primary, secondary, text}) => {
  return (
    <TweetButton $primary={primary} $secondary={secondary}>
      {text}
    </TweetButton>
  );
};

TweetButtonComponent.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default TweetButtonComponent;

