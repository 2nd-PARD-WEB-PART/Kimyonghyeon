/* eslint-disable */
import useEffect from 'react'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { UserProvider } from "./UserContext";
import useMediaQuery from 'react-responsive';

import Home1 from "./pages/Home/Home1";
import Home2 from "./pages/Home/Home2";
import Home3 from "./pages/Home/Home3";
import Top1 from "./pages/Top/Top1";
import Top2 from "./pages/Top/Top2";
import Top3 from "./pages/Top/Top3";
import Edit from "./pages/Edit";
import Body1 from "./pages/Body/Body1";
import Body2 from "./pages/Body/Body2";
import Body3 from "./pages/Body/Body3";

function App() {
    // 이것저것 다 하다가 결국 true = undefined / false = null 인 것까지만 확인함
    const isSmall = useMediaQuery({ maxWidth: 449 });
    const isMedium = useMediaQuery({ minWidth: 450, maxWidth: 749 });
    const isBig = useMediaQuery({ minWidth: 750 });

    // 변동값 확인을 위해 consloe.log 출력 (주석처리)
    // console.log("isSmall:", isSmall);
    // console.log("isMedium:", isMedium);
    // console.log("isBig:", isBig);

    let TopType = Top1;
    let BodyType = Body1;
    let HomeType = Home1;

    // 그래서 이렇게 if문 적용
    // 현재 화면 크기에 따라서 3가지 스타일을 따로 적용
    if (isSmall === undefined) {
        TopType = Top3;
        BodyType = Body3;
        HomeType = Home3;
    }
    else if (isMedium === undefined) {
        TopType = Top2;
        BodyType = Body2;
        HomeType = Home2;
    }
    else if (isBig === undefined) {
        TopType = Top1;
        BodyType = Body1;
        HomeType = Home1;
    }

    // 현재 화면 너비에 따라서 조건문이 적용되므로, 동적으로 변경됨
    return (
        <UserProvider>
            <div>
                <Routes>
                    <Route path="/" element={<TopType />}>
                        <Route path="/home" element={<HomeType />} />
                        <Route index element={<BodyType />} />
                        <Route path="/edit" element={<Edit />} />
                    </Route>
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
