import styled from "styled-components";
import React from "react";
import {Link, Outlet} from "react-router-dom";

// Top 부분 전체를 감싸는 div
const Top_back = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: var(--Dark-white, #FAFAFA);
  box-shadow: 3px 3px 3px gray;
  
`;

// 아이콘을 담고 있는 div를 포함한 div
const Header = styled.div`
  display: flex;
  width: 55%;
  height: 55px;
  padding: 0px 0px 0px 0px;
  flex-direction: row; /*  */
  gap: 10px;
  flex-shrink: 0;
  margin: auto; /* 중앙 정렬을 위해 추가 */
  justify-content: space-between;
`;

// 인스타그램 로고를 담고 있는 div
const Icon = styled.div`
    padding: 10px;
`;

const Mayo = styled.img`
  padding: 10px;
  margin: 2px;
  width: 25px;
  height: 25px;
  border-radius: 30px;
`

const BtnBox = styled.div`
    padding 10px;
`;

const Btns = styled.img`
  padding: 10px;
  margin: 2px;
`;

export default function Top() {
    return (
        <>
            <Top_back>
                <Header>
                    <Icon>
                        <img src={"/img/insta_logo.png"}/>
                    </Icon>
                    <BtnBox>
                        <Link to="/home">
                            <Btns src={"img/HomeBtn.png"}></Btns>
                        </Link>
                        <Btns src={"/img/NewPosts.png"}/>
                        <Btns src={"/img/likeBtn.png"}/>
                        <Mayo src={"/img/mayo.jpg"}/>
                    </BtnBox>
                </Header>
            </Top_back>
            <main>
                <Outlet />
                {/*Outlet 컴포넌트를 활용해 header / main 컴포넌트의 구분을 주어 공통 레이아웃 컴포넌트 생성*/}
            </main>
        </>
    );
}
