// 이름, 이메일 변경에 사용되는 context는 여기에 저장
// 파일의 구조가 커질수록 Context의 관리는 힘들어지기 때문에 외부에 저장하는 것이 좋음
// Provider를 App에 씌울지 index에 씌울지는 취향따라서 사용하기
/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

const initialUserData = {
    name: '',
    age: 0,
    part: '',
    imgURL: '',
};

const id = "김현중";

const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
}

export const UserProvider = ({ children }) => {
    const [data, setData] = useState(initialUserData);

    useEffect(() => {
        axios
            .get(`http://3.35.236.83/pard/search/${id}`, {headers})
            .then((response) => {
                console.log("response: " + JSON.stringify(response.data.data));
                setData(response.data.data);
            })
            .catch((error) => console.log("error: " + error));
    }, []);

    return (
        <UserContext.Provider value={{ userData: data, setUserData: setData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const { userData, setUserData } = useContext(UserContext);
    return { userData, setUserData };
};
