import styled from "styled-components";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../UserContext";
import * as s from './EditStyle';

function Edit() {
    const navigate = useNavigate();
    const location = useLocation();

    const { userData, setUserData } = useUser();

    const [editedData, setEditedData] = React.useState({
        name : "mayo",
        description : "pomearnian",
    });

    const placeholder = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const dataToBody = (e) => {
        e.preventDefault();
        navigate("/", { state: { userData: editedData } });
    };

    const isFormValid = () => {
        return editedData.name && editedData.description;
    };

    return (
        <s.Back>
            <s.CenterBox>
                <s.Left>
                    <s.LBox1></s.LBox1>
                    <s.LBox2></s.LBox2>
                </s.Left>
                <s.Right>
                    <form onSubmit={dataToBody}>
                        <label>
                            이름:
                            <input
                                type="text"
                                name="name"
                                placeholder={userData.name}
                                onChange={placeholder}
                            />
                        </label>
                        <br />
                        <label>
                            소개:
                            <input
                                type="text"
                                name="description"
                                placeholder={userData.description}
                                onChange={placeholder}
                            />
                        </label>
                        <br />
                        <label>
                            웹사이트:
                            <input type="text" name="website" placeholder={"www.pard.co.kr"} />
                        </label>
                        <br />
                        <label>
                            이메일:
                            <input type="email" name="email" placeholder={"1234@handong.ac,kr"} />
                        </label>
                        <br />
                        <label>
                            성별:
                            <input type="text" name="sex" placeholder={"Male"} />
                        </label>
                        <br />
                        <button type="submit" disabled={!isFormValid()}>
                            수정완료!
                        </button>
                    </form>
                </s.Right>
            </s.CenterBox>
        </s.Back>
    );
}

export default Edit;
