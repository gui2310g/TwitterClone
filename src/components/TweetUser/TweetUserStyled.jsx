import styled from "styled-components";

export const TweetUser = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${props => (props.secondary ? '10px' : '0px')};
  gap: 10px;
  align-items: ${props => (props.secondary ? 'center' : '')};
  
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
  }

  #username {
    display: ${props => (props.secondary ? 'block' : 'flex')};
    gap: 5px;
  }
  
  #username span {
    font-size: 15px;
    font-weight: 600;
    color: gray;
  }
`;
