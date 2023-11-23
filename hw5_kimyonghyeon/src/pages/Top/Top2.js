import styled from "styled-components";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import * as s from './TopStyle2';

export default function Top2() {
    return (
        <>
            <s.Top_back>
                <s.Header>
                    <s.Icon>
                        <img src={"/img/insta_logo.png"}/>
                    </s.Icon>
                    <s.BtnBox>
                        <Link to="/home">
                            <s.Btns src={"img/HomeBtn.png"}></s.Btns>
                        </Link>
                        <s.Btns src={"/img/NewPosts.png"}/>
                        <s.Btns src={"/img/likeBtn.png"}/>
                        <s.Mayo src={"/img/mayo.jpg"}/>
                    </s.BtnBox>
                </s.Header>
            </s.Top_back>
            <main>
                <Outlet />
                {/*Outlet 컴포넌트를 활용해 header / main 컴포넌트의 구분을 주어 공통 레이아웃 컴포넌트 생성*/}
            </main>
        </>
    );
}
