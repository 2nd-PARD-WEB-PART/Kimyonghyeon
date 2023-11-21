import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

function About() {
    // location으로 useLocation 사용할 예정
    const location = useLocation();
    // useLocation은 location 객체를 반환, 이 객체는 현재 페이지 정보를 담고 있음
    // hook을 사용하면 location이 담고있는 페이지의 정보를 출력할 수 있음

    return(
        <div>
            <h1>About</h1>
            <p>리액트 라우터를 사용해 본 페이지</p>
            <p>쿼리스트링 : {location.search}</p>
            {/*정확히 말하면, 이 페이지 기준으로 "../about" 다음에 오는 url을 출력한다*/}
            <Link to={"/"}>to Home Page</Link>
        </div>
    );
};

export default About;