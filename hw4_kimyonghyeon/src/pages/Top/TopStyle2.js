import styled from "styled-components";

// Top 부분 전체를 감싸는 div
export const Top_back = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: var(--Dark-white, #FAFAFA);
  box-shadow: 3px 3px 3px gray;
`;

// 아이콘을 담고 있는 div를 포함한 div
export const Header = styled.div`
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
export const Icon = styled.div`
    padding: 10px;
`;

export const Mayo = styled.img`
  padding: 10px;
  margin: 2px;
  width: 25px;
  height: 25px;
  border-radius: 30px;
`

export const BtnBox = styled.div`
    padding 10px;
`;

export const Btns = styled.img`
  padding: 10px;
  margin: 2px;
`;