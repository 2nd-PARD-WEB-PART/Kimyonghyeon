import logo from './logo.svg';
import './App.css';

// APP 이라는 function이 나올 부분
function App() {
  // return()을 기준으로 JSX가 구분됩니다!
  return (
      // 전체 페이지를 감싸는 div를 선언하고, hw1이라는 classname을 지정해 css 관리
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
                  <div className="position"> 010-3848-4755 </div>
              </div>

              {/* 구분용 선 */}
              <hr className={"bar"}/>

              {/* SNS */}
              <div className="sns">
                  <a href="https://www.instagram.com/cocomong_98/"><img src="/img/insta.png" className="icon"/></a>
                  <a href="https://github.com/Cocomong98"><img src="/img/github.png" className={"icon"}/></a>
                  <a href="https://www.acmicpc.net/user/cocomong98"><img src="/img/backjoon.png" className={"icon"}/></a>
              </div>
          </div>

          {/* 오른쪽에는 동아리, 지난 프로젝트와 간단한 인사말이 들어갑니다 */}
          <div className="right">
              <div className={"inside"}>
                  {/* 기타 정보 */}
                  <div className="etc">
                      <div className={"header"}>
                          TMI
                      </div>
                      <div className={"inside_text"}>
                          <div className={"text"}>
                              1. 퍼스널컬러는 가을 웜 딥 입니다
                          </div>
                          <div className={"text"}>
                              2. '아 옷 사야지'라고 하면 그냥 넘겨주시면 됩니다. 100번쯤 하면 하나 삽니다
                          </div>
                          <div className={"text"}>
                              3. 전산 하기 전부터 애플 팬보이였어서 웬만한건 다 써봤습니다 (살까말까 고민중이면 말씀주세요)
                          </div>
                      </div>
                  </div>

                  {/* 이번학기 목표 */}
                  <div className="goals">
                      <div className={"header"}>
                          GOALS
                      </div>
                      <div className={"inside_text"}>
                          <div className={"text"}>
                              1. 깃허브 잔디 빼곡하게 심기
                          </div>
                          <div className={"text"}>
                              2. 간단한 페이지는 하루 안에 만들 수 있도록 리액트 숙달하기
                          </div>
                          <div className={"text"}>
                              3. 다양한 전공 사람들과 친해지기
                          </div>
                      </div>
                  </div>

                  {/* 좋아하는 것 */}
                  <div className="favorites">
                      <div className={"header"}>
                          FAVORITES
                      </div>
                      <div className={"inside_text"}>
                          <div className={"text"}>
                              1. 축구 (대전 하나 시티즌 많은 사랑 부탁드립니다)
                          </div>
                          <div className={"text"}>
                              2. 강아지 (본가에 뚱돼지 포메라니안 하나 키우고 있습니다)
                              <a href={"https://www.instagram.com/mynameis_mayo"}><img src="/img/insta.png" className="icon"/></a>
                          </div>
                          <div className={"text"}>
                              3. 요리 (주말에는 꼭 하기도 하고, 친한 친구들이랑 같이 먹는 거 좋아합니다)
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer">
                  <p>Copyright © 2023 <b>PARD | Cocomong98</b> All rights reserved.</p>
              </div>
          </div>
      </div>
  );
}

export default App;
