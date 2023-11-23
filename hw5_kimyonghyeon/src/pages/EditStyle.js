import styled from "styled-components";

export const Back = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;
  background-color: gainsboro;
`;

export const CenterBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  width: 70%;
  height: 80%;
  border: 1px solid black;
  margin: 1%;
`;

export const Left = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  border-right: 1px solid black;
`;

export const LBox1 = styled.div`
  height: 70%;
  border-bottom: 1px solid black;
`;

export const LBox2 = styled.div`
  height: 30%;
`;

export const Right = styled.div`
  padding: 2%;
  width: 30%;
`;