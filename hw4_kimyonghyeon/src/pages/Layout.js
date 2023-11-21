import { Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontStyle: 24}}>
                Header
            </header>
            <main>
                <Outlet />
                {/*Outlet 컴포넌트를 활용해 header / main 컴포넌트의 구분을 주어 공통 레이아웃 컴포넌트 생성*/}
            </main>
        </div>
    );
};

export default Layout;