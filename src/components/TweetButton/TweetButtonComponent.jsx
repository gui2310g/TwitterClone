import { TweetButton } from "./TweetButtonStyled.jsx";
import PropTypes from "prop-types";
const TweetButtonComponent = ({primary, secondary, text, onClick}) => {
  return (
    <TweetButton $primary={primary} $secondary={secondary} onClick={onClick}>
      {text}
    </TweetButton>
  );
};

TweetButtonComponent.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default TweetButtonComponent;

