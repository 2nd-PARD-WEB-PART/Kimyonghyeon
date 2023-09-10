import logo from './logo.svg';
import './App.css';

// APP 이라는 function이 나올 부분
function App() {
  // return()을 기준으로 JSX가 구분됩니다!
  return (
      // 전체 페이지를 감싸는 div를 선언하고, hw1이란느 classname을 지정해 css 관리
      <div className="hw1">
          {/* 왼쪽에는 이름과 사진, SNS 정보가 들어갑니다 */}
          <div className="left">
              {/* 사진 */}
              <div className="photo_box">
                  <img src="/img/profile.jpg" className="photo" alt="profile" />
              </div>

              {/* 이름 */}
              <div className="description">
                  <div className="name"> 김용현 </div>
                  <div className="position"> 2기_웹 </div>
              </div>

              <hr className={"bar"}/>

              {/* SNS */}
              <div className="sns">
                  <div className="name">Social</div>
                  <a href="https://www.instagram.com/cocomong_98/"><img src="/img/insta.png" className="icon"/></a>
                  <a href="https://github.com/Cocomong98"><img src="/img/github.png" className={"icon"}/></a>
              </div>
          </div>

          {/* 오른쪽에는 동아리, 지난 프로젝트와 간단한 인사말이 들어갑니다 */}
          <div className="right">
              {/* 기타 정보 */}
              <div className="about">
                  기타 정보
              </div>

              {/* 이번학기 목표 */}
              <div className="projects">
                  이번학기 목표
              </div>

              {/* 좋아하는 것 */}
              <div className="words">
                  좋아하는 것
              </div>
          </div>
    </div>
  );
}

export default App;
