import styled from "styled-components";
import React from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
// import Abel_Regular from 'src/assets/font/Abel_Regular.woff';



const Body_Back = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;
const Body_Center = styled.div`
  display: flex;
  width: 55%;
  height: 800px;
  flex-direction: column;
  align-items: center;
  //align-items: flex-start;
  flex-shrink: 0;
`;

const Profile = styled.div`
  width: 100%;
  height: 230px;
  padding-bottom: 30px;
  align-items: flex-start;
  flex-shrink: 0;
  border-bottom: 2px solid lightgrey;
  display: flex;
`;
const ProfileImg = styled.div`
  flex: 2;
  padding-left: 130px;
  margin: 50px 50px 50px 70px;
  height: 70%;
`;
const ProfileText = styled.div`
    flex: 8;
  height: 70%;
  margin: 50px 50px 50px 50px;
  text-align: left;
`;
const Img = styled.img`
    width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid gray;
`;

const T = styled.div`
    display: flex;
  flex-direction: row;
`;
const TBtn = styled.button`
  height: 30px;
  border: 1px solid lightgrey;
  background-color: transparent;
  border-color: gray;
  border-radius: 5px;
  margin-top: 7px;
  margin-left: 25px;
`;
const TImg = styled.img`
    height: 25px;
  margin-left: 15px;
  margin-top: 9px;
`;
// ProfileText 안에 들어갈 내용들
const T1 = styled.div`
    font-size: 30px;
  font-style: normal;
  color: var(--Black, #262626);
  padding-bottom: 25px;
`;
const T2 = styled.div`
    font-size: 15px;
`;
const T3 = styled.div`
    font-size: 15px;
  margin: 5px;
`;

const NavBox = styled.div`
  display: flex;
    height: 50px;
  width: 30%;
  align-items: center;
  flex-direction: row;
  border-bottom::5px;
  padding-top: 20px;
  margin-left: 70px;
`;
const Btn = styled.div`
  display: flex;
  flex-direction: row;
    width: fit-content;
  height: fit-content;
  margin : 0 auto;
`;
const BtnImg = styled.img`
  height: 20px;
    width: 20px;
  padding-top: 5px;
`;
const Posts = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: row;
  border-bottom::5px;
`;
const PostImg = styled.img`
    width: 30%;
  padding: 3%;
`;

export default function Body() {
    const navigate = useNavigate();
    const location = useLocation();

    const [userData, setUserData] = React.useState({
        name: "Mayo",
        description: "Hello",
    });

    React.useEffect(() => {
        if (location.state && location.state.userData) {
            setUserData(location.state.userData);
        }
    }, [location.state]);

    const [displayedUserData, setDisplayedUserData] = React.useState({
        name: userData.name,
        description: userData.description,
    });

    React.useEffect(() => {
        setDisplayedUserData(userData);
    }, [userData]);

    const goEdit = () => {
        return (
            <Link to="/edit" onClick={() => navigate('/edit', { state: { userData } })}>
                <Img src={"img/mayo.jpg"} alt="Mayo"></Img>
            </Link>
        );
    };


    return(
        <Body_Back>
            <Body_Center>
                <Profile>
                    <Link to="/edit" state={userData}>
                    {/*<ProfileImg>*/}
                    {/*    {goEdit()}*/}
                    {/*</ProfileImg>*/}
                        <Img src={"img/mayo.jpg"}></Img>
                    </Link>
                    <ProfileText>
                        <T>
                            <T1>{displayedUserData.name}</T1>
                            <TBtn>프로필 편집</TBtn>
                            <TImg src={"/img/Options.png"}></TImg>
                        </T>
                        <T2>게시물 3 팔로우 20 팔로워 25</T2>
                        <T3>{displayedUserData.description}</T3>
                    </ProfileText>
                </Profile>
                <NavBox>
                    <Btn>
                        <BtnImg src={"img/Posts.png"}></BtnImg>
                        <T3>게시물</T3>
                    </Btn>
                    <Btn>
                        <BtnImg src={"img/Save.png"}></BtnImg>
                        <T3>저장됨</T3>
                    </Btn>
                    <Btn>
                        <BtnImg src={"img/Tagged.png"}></BtnImg>
                        <T3>태그됨</T3>
                    </Btn>
                </NavBox>
                <Posts>
                    <PostImg src={"img/1.png"}></PostImg>
                    <PostImg src={"img/2.png"}></PostImg>
                    <PostImg src={"img/1.png"}></PostImg>
                </Posts>
            </Body_Center>
        </Body_Back>
    );
}