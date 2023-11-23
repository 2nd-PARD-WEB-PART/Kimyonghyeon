import {Link, Outlet} from "react-router-dom";

function Articles() {
    return(
        <div>
            <Outlet />
            <ul>
                <li>
                    <Link to={"/articles/1"}>Post 1</Link>
                </li>
                <li>
                    <Link to={"/articles/2"}>Post 2</Link>
                </li>
                <li>
                    <Link to={"/articles/3"}>Post 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Articles;