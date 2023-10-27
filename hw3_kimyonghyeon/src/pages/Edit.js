import styled from "styled-components";
import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

const Back = styled.div`
    display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;
  background-color: gainsboro;
`

const CenterBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  width: 70%;
  height: 80%;
  border: 1px solid black;
  margin: 1%;
  
`

const Left = styled.div`
  display: flex;
    width: 30%;
  flex-direction: column;
  border-right: 1px solid black;
`

const LBox1 = styled.div`
    height: 70%;
  border-bottom: 1px solid black;
`

const LBox2 = styled.div`
    height: 30%;
`

const Right = styled.div`
  padding: 2%;
    width: 30%;
`

function Edit(){
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state ? location.state : {};

    // console.log(location.state )
    // const [userData, setUserData] = React.useState({
    //     name: "Mayo",
    //     description: "Hello",
    // });

    const [editedData, setEditedData] = React.useState(userData);

    const placeholder = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const dataToBody = (e) => {
        e.preventDefault();
        navigate('/', { state: { userData: editedData } });
    };

    const isFormValid = () => {
        return editedData.name && editedData.description;
    };


    return(
        <Back>
            <CenterBox>
                <Left>
                    <LBox1></LBox1>
                    <LBox2></LBox2>
                </Left>
                <Right>
                    <form onSubmit={dataToBody}>
                        <label>
                            이름:
                            <input type="text" name="name"  placeholder={userData.name} onChange={placeholder} />
                        </label>
                        <br />
                        <label>
                            소개:
                            <input type="text" name="description" placeholder={userData.description} onChange={placeholder} />
                        </label>
                        <br />
                        <label>
                            웹사이트:
                            <input type="text" name="website" placeholder={"www.pard.co.kr"}/>
                        </label>
                        <br />
                        <label>
                            이메일:
                            <input type="email" name="email" placeholder={"1234@handong.ac,kr"}/>
                        </label>
                        <br />
                        <label>
                            성별:
                            <input type="text" name="sex" placeholder={"Male"}/>
                        </label>
                        <br />
                        <button type="submit" disabled={!isFormValid()}>수정완료!</button>
                    </form>
                </Right>

            </CenterBox>
        </Back>
    )
}

export default Edit;