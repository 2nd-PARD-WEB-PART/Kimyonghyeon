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

    // 무엇을 입력해야 하는 빈칸인지 알려주는 플레이스홀더
    const placeholder = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    // 사용할 값들을 선언하고 기본값을 넣어줌
    const [imageFile, setImageFile] = React.useState(null);
    const [uploadedImgURL, setUploadedImgURL] = React.useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    // 이미지를 선택하고, 이걸 url로 바꿔주는 기능
    const uploadImage = async () => {
        try {
            const formData = new FormData();
            formData.append("image", imageFile);  
    
            const response = await axios.post("http://3.35.236.83/image", formData);
    
            if (response.data) {
                console.log("이미지 업로드 성공 후 반환 값:", response.data);
                setUploadedImgURL(response.data); // 업로드 성공 시 URL 상태에 저장
                setEditedData((prevData) => ({ ...prevData, imgURL: response.data }));  // imgURL에도 저장
                return response.data;
            }
        } catch (error) {
            console.log("이미지 업로드 실패 시 시도한 값:", imageFile);
            console.error("이미지 업로드 중 오류 발생:", error.message);
        }
    };
    
    // post 기능. 이후에는 이전 화면 (루트) 로 돌아가게 한다
    const dataToBody = async (e) => {
        e.preventDefault();
    
        const userId = editedData.name;
        const apiUrl = `http://3.35.236.83/pard/update/${userId}`;
    
        try {
            let imageUrl = "";  // 이미지 URL 변수 추가
    
            // 이미지가 선택되었다면 업로드 진행
            if (imageFile) {
                imageUrl = await uploadImage();  // 이미지 업로드 함수 호출
            }
    
            // 서버로 PATCH 요청
            const response = await axios.patch(apiUrl, {
                name: editedData.name,
                age: editedData.age,
                part: editedData.part,
                imgURL: imageUrl || "",  // 이미지가 선택되었다면 imageUrl, 아니면 빈 문자열
            });
    
            if (response.data.result) {
                console.log("데이터 수정 성공:", response.data.data);
                setUserData(response.data.data);
            } else {
                console.error("데이터 수정 실패:", response.data.message);
            }
        } catch (error) {
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