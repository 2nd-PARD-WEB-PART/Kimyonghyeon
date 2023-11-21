import styled from "styled-components";

export const Body_Back = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;
export const Body_Center = styled.div`
  display: flex;
  width: 55%;
  height: 800px;
  flex-direction: column;
  align-items: center;
  //align-items: flex-start;
  flex-shrink: 0;
`;

export const Profile = styled.div`
  width: 100%;
  height: 230px;
  padding-bottom: 30px;
  align-items: flex-start;
  flex-shrink: 0;
  border-bottom: 2px solid lightgrey;
  display: flex;
`;
export const ProfileImg = styled.div`
  flex: 2;
  padding-left: 130px;
  margin: 50px 50px 50px 70px;
  height: 70%;
`;
export const ProfileText = styled.div`
    flex: 8;
  height: 70%;
  margin: 50px 50px 50px 50px;
  text-align: left;
`;
export const Img = styled.img`
    width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid gray;
`;

export const T = styled.div`
    display: flex;
  flex-direction: row;
`;
export const TBtn = styled.button`
  height: 30px;
  border: 1px solid lightgrey;
  background-color: transparent;
  border-color: gray;
  border-radius: 5px;
  margin-top: 7px;
  margin-left: 25px;
`;
export const TImg = styled.img`
    height: 25px;
  margin-left: 15px;
  margin-top: 9px;
`;
// ProfileText 안에 들어갈 내용들
export const T1 = styled.div`
    font-size: 30px;
  font-style: normal;
  color: var(--Black, #262626);
  padding-bottom: 25px;
`;
export const T2 = styled.div`
    font-size: 15px;
`;
export const T3 = styled.div`
    font-size: 15px;
  margin: 5px;
`;

export const NavBox = styled.div`
  display: flex;
    height: 50px;
  width: 30%;
  align-items: center;
  flex-direction: row;
  border-bottom:5px;
  padding-top: 20px;
  margin-left: 70px;
`;
export const Btn = styled.div`
  display: flex;
  flex-direction: row;
    width: fit-content;
  height: fit-content;
  margin : 0 auto;
`;
export const BtnImg = styled.img`
  height: 20px;
    width: 20px;
  padding-top: 5px;
`;
export const Posts = styled.div`
  padding-top: 10%;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  border-bottom:5px;
`;
export const PostImg = styled.img`
    width: 100%;
`;

export const Btns = styled.img`
  padding: 10px;
  margin: 2px;
`;

export const TopBox = styled.div`
  height: 10%;
  text-align: left;
  width: 100%;
  justify-content: left;
  border: 1px solid lightgrey;
`

export const Commnet = styled.button`
    width: 20px;
  border: 1px solid red;
`

export const CommentBox = styled.input`
  width: 70%;
  padding: 10px;
  margin-right: 10px;
`;

export const CommentButton = styled.button`
  width: fit-content;
  padding: 10px;
  border: 1px solid red;
`;

export const Mayo = styled.img`
  padding: 10px;
  margin: 2px;
  width: 25px;
  height: 25px;
  border-radius: 30px;
`

export const Pname = styled.text`
    margin-bottom: 10px;
    `;