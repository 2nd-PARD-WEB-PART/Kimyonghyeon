import styled from "styled-components";
import React from "react";

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
                        <Btns src={"/img/HomeBtn.png"}/>
                        <Btns src={"/img/NewPosts.png"}/>
                        <Btns src={"/img/likeBtn.png"}/>
                        <Btns src={"/img/NewPosts.png"}/>
                    </BtnBox>
                </Header>
            </Top_back>
        </>
    );
}
