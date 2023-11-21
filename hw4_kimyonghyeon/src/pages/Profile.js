import {useParams} from "react-router-dom";

// 사용자의 정보가 담긴 객체
const data = {
    Kyh: {
        name:"김용현",
        description:"파드 2기의 웹 파트 파디",
    },
    Kjs: {
        name:"김진서",
        description:"파드 2기의 웹 파트장",
    },
};

// 프로필 정보 표시용 컴포넌트
const Profile = () => {
    // useParams는 URL에서 전달된 username을 get해 오는 Hook이다
    const params = useParams();

    // username 파라미터에 해당하는 사용자 정보를 data 객체에서 get
    // 이제부터는 가져온 객체를 profile 이라는 이름으로 다룰 것이다.
    const profile = data[params.username];

    return(
        <div>
            <h1>사용자 프로필</h1>
            {/*profile 정보가 존재하는지 따라서 출력하기*/}
            {profile ?
                // 존재하면 이름과 설명 출력
                (<div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>)
                :
                // 없다면 오류 문구 출력
                (<p>Invalid Data!</p>)
            }
        </div>
    );
};

export default Profile;