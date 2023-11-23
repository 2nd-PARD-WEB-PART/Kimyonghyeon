import styled from "styled-components";
import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from "../../UserContext";
import * as s from './BodyStyle2';


export default function Body2() {
    const navigate = useNavigate();
    const location = useLocation();

    const { userData, setUserData } = useUser();

    React.useEffect(() => {
        if (location.state && location.state.userData) {
            setUserData(location.state.userData);
        }
    }, [location.state, setUserData]);

    const [displayedUserData, setDisplayedUserData] = React.useState({
        name: "mayo",
        description: "pomeranian",
    });

    React.useEffect(() => {
        setDisplayedUserData(userData);
    }, [userData]);

    const goEdit = () => {
        return (
            <Link to="/edit" onClick={() => navigate('/edit', { state: { userData } })}>
                <s.Img src={"img/mayo.jpg"} alt="Mayo"></s.Img>
            </Link>
        );
    };

    return (
        <s.Body_Back>
            <s.Body_Center>
                <s.Profile>
                    <Link to="/edit" state={userData}>
                        <s.Img src={"img/mayo.jpg"}></s.Img>
                    </Link>
                    <s.ProfileText>
                        <s.T>
                            <s.T1>{displayedUserData.name}</s.T1>
                            <s.TBtn>프로필 편집</s.TBtn>
                            <s.TImg src={"/img/Options.png"}></s.TImg>
                        </s.T>
                        <s.T2>게시물 3 팔로우 20 팔로워 25</s.T2>
                        <s.T3>{displayedUserData.description}</s.T3>
                    </s.ProfileText>
                </s.Profile>
                <s.NavBox>
                    <s.Btn>
                        <s.BtnImg src={"img/Posts.png"}></s.BtnImg>
                        <s.T3>게시물</s.T3>
                    </s.Btn>
                    <s.Btn>
                        <s.BtnImg src={"img/Save.png"}></s.BtnImg>
                        <s.T3>저장됨</s.T3>
                    </s.Btn>
                    <s.Btn>
                        <s.BtnImg src={"img/Tagged.png"}></s.BtnImg>
                        <s.T3>태그됨</s.T3>
                    </s.Btn>
                </s.NavBox>
                <s.Posts>
                    <s.PostImg src={"img/1.png"}></s.PostImg>
                    <s.PostImg src={"img/2.png"}></s.PostImg>
                    <s.PostImg src={"img/1.png"}></s.PostImg>
                </s.Posts>
            </s.Body_Center>
        </s.Body_Back>
    );
}
