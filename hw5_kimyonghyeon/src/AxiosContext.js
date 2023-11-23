import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';

//프로필 편집 context 생성
const ProfileContext = createContext();

// 서버에서 데이터를 불러올 대상의 이름
const id = "김용현";

const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
}

// Provider 선언
function ProfileProvider({ children }) {

    const [profileInfo, setProfileInfo] = useState({
        post: 1,
        follower: 2,
        follow: 3,
        greeting: "Pay it forward",
        profileImage: "/images/my.jpg",
        postImage1: "/images/image1.jpg",
        postImage2: "/images/image2.jpg",
        postImage3: "/images/image3.jpg",
        website: "https://www.naver.com/",
        age: "",
        part: "",
        postLikes: 0,
        postLikeState: false,
        commentLike: []
    });

    useEffect(() => {
        //GET 요청 보내기
        axios
            // 위에서 선언한 id인 이름으로 불러오기
            .get(`http://3.35.236.83/pard/search/${id}`, {headers})
            .then((response) => {
                // 미리 공지된 대로 stringify 사용
                console.log("response: " + JSON.stringify(response.data.data));

                //서버에서 받은 데이터 추출
                const Sname = response.data.data.name;
                const Simg = response.data.data.imgURL;
                const Sage = JSON.stringify(response.data.data.age);
                const Spart = response.data.data.part;

                //서버에서 불러온 데이터를 profileInfo에 업데이트
                setProfileInfo((prevProfileInfo) => ({
                    ...prevProfileInfo,
                    id: Sname,
                    profileImage: Simg,
                    age: Sage,
                    part: Spart,
                }));
            })
            .catch((error) => console.log("error: " + error));
    }, []);

    return (
        <ProfileContext.Provider value={{ profileInfo, setProfileInfo }}>
            {children}
        </ProfileContext.Provider>
    );
}

export { ProfileContext, ProfileProvider };