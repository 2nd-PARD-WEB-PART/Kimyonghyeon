import styled from "styled-components";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import * as s from './TopStyle3';

export default function Top3() {
    return (
        <>
            <s.Top_back>
                <s.Header>
                    <s.Icon>
                        <s.Img src={"/img/insta.png"}/>
                    </s.Icon>
                    <s.SBox>
                        검색
                    </s.SBox>
                    <s.BtnBox>
                        <s.Btns src={"/img/likeBtn.png"}/>
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
