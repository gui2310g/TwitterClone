import styled from "styled-components";

export const ProfilePage = styled.article`
  color: black;
  width: 100%;
  max-width: 600px;
  border: 1px solid gray;
`;
export const ProfileHeader = styled.section`
  display: flex;
  align-items: center;
  height: auto;
  gap: 40px;
  padding: 5px;

  span {
    font-size: 12px;
  }

  a:hover {
    color: blue;
    transition: 1s all;
  }
`;

export const ProfileBody = styled.section`
  border-bottom: 1px solid black;
  padding-bottom: 20px;

  #user {
    display: flex;
    justify-content: space-between;
  }

   img {
    width: 100%;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  #userDescription {
    display: flex;
    flex-direction: column;
    margin: -70px 0px 0px 17px;
  }

  #userDescription img {
    width: 130px;
    height: 130px;
    background-color: white;
    border-radius: 100px;
    border: 2px solid black;
    margin-bottom: 10px;
  }

  #followers {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

    .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }

  .modal::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-content {
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  border: 1px solid red;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
`;

export const Modal = styled.div`
   position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;

    .modal::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-content {
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid red;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
`