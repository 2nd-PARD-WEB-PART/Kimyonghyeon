// 이름, 이메일 변경에 사용되는 context는 여기에 저장
// 파일의 구조가 커질수록 Context의 관리는 힘들어지기 때문에 외부에 저장하는 것이 좋음
// Provider를 App에 씌울지 index에 씌울지는 취향따라서 사용하기
/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

// 초기값 선언 (get에 필요)
const initialUserData = {
    name: '',
    age: 0,
    part: '',
    imgURL: '',
};

// 최초 post에서 불러올 사용자명
const id = "김용현";

const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
}

// 프로바이더 내부를 선언
export const UserProvider = ({ children }) => {
    const [data, setData] = useState(initialUserData);

    // 한 번만 가져오기
    useEffect(() => {
        // get을 사용해서 정보 불러오기
        axios
            .get(`http://3.35.236.83/pard/search/${id}`, {headers})
            .then((response) => {
                console.log("response: " + JSON.stringify(response.data.data));
                setData(response.data.data);
            })
            // 예외처리
            .catch((error) => console.log("error: " + error));
    }, []);

    return (
        <UserContext.Provider value={{ userData: data, setUserData: setData }}>
            {children}
        </UserContext.Provider>
    );
};

// 밖에서 사용하는 useUser
export const useUser = () => {
    const { userData, setUserData } = useContext(UserContext);
    return { userData, setUserData };
};
