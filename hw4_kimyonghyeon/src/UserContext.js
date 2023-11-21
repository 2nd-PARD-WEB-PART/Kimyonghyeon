// 이름, 이메일 변경에 사용되는 context는 여기에 저장
// 파일의 구조가 커질수록 Context의 관리는 힘들어지기 때문에 외부에 저장하는 것이 좋음
// Provider를 App에 씌울지 index에 씌울지는 취향따라서 사용하기
// UserContext.js
// UserContext.js
import React, { createContext, useContext } from 'react';

// 생성할 context의 이름은 usercontext이다 (유저 정보를 담고 있으므로)
const UserContext = createContext();

// 초기값 설정 (둘 다 A로 설정함)
const initialUserData = { name: 'A', description: 'A' };

// 실제로 사용될  Provider (상태를 관리하기 때문에 Provider를 사용하는 것이 좋음)
export const UserProvider = ({ children }) => {
    // 사용할 Data와 이걸 설정할 변수를 만들고, 초기값을 넣어줌
    const [userData, setUserData] = React.useState(initialUserData);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    return context;
};
