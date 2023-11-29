/* eslint-disable */

import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import axios from "axios";
import * as s from './EditStyle';

function Edit() {
    const navigate = useNavigate();
    const { userData, setUserData } = useUser();
    const [editedData, setEditedData] = React.useState({
        name: "mayo",
        age: "",
        part: "",
        imgURL: "",
    });

    const placeholder = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const [imageFile, setImageFile] = React.useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const uploadImage = async () => {
        try {
            const formData = new FormData();
            formData.append("file", imageFile);

            const response = await axios.post("http://3.35.236.83/image", formData);

            if (response.data) {
                console.log("이미지 업로드 성공 후 반환 값:", response.data); // 추가한 부분
                return response.data; // 이미지 업로드 성공 시 URL 반환
            }
        } catch (error) {
            console.log("이미지 업로드 실패 시 시도한 값:", imageFile); // 실패 시에도 시도한 값을 출력
            console.error("이미지 업로드 중 오류 발생:", error.message);
            throw error; // 오류를 호출자에게 다시 던집니다.
        }
    };

    const dataToBody = async (e) => {
        e.preventDefault();
    
        const userId = editedData.name;
        const apiUrl = `http://3.35.236.83/pard/update/${userId}`;
    
        try {
            let newImgURL = editedData.imgURL;

            // 이미지가 선택되었다면 업로드 진행
            if (imageFile) {
                newImgURL = await uploadImage();
            }

            // 서버로 PATCH 요청
            const response = await axios.patch(apiUrl, {
                name: editedData.name,
                age: editedData.age,
                part: editedData.part,
                imgURL: imageFile ? "" : newImgURL, // 이미지가 업로드되었다면 빈 문자열, 아니면 새로운 imgURL 사용
            });
    
            if (response.data.result) {
                // 성공 시의 로직
                console.log("데이터 수정 성공:", response.data.data);
                // 수정된 데이터를 state에 반영하거나 다른 작업 수행
                setUserData(response.data.data); // 예시: 수정된 데이터를 전역 상태에 반영
            } else {
                // 실패 시의 로직
                console.error("데이터 수정 실패:", response.data.message);
            }
        } catch (error) {
            // 에러 처리
            console.error("데이터 수정 중 오류 발생:", error.message);
        }
    
        navigate("/");
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
                            나이:
                            <input
                                type="text"
                                name="age"
                                placeholder={userData.age}
                                onChange={placeholder}
                            />
                        </label>
                        <br />
                        <label>
                            파트:
                            <input
                                type="text"
                                name="part"
                                placeholder={"파트를 입력하세요"}
                                onChange={placeholder}
                            />
                        </label>
                        <br />
                        <label>
                            이미지 선택:
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </label>
                        <br />
                        <button type="submit">
                            수정완료!
                        </button>
                    </form>
                </s.Right>
            </s.CenterBox>
        </s.Back>
    );
}

export default Edit;
