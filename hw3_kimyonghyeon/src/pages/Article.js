import {useParams} from "react-router-dom";

function Article() {
    const {id} = useParams();

    return(
        <div>
            <h2>Welcome to {id} post</h2>
        </div>
    );
};

export default Article;