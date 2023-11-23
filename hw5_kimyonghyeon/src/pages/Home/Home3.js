import styled from "styled-components";
import React, { createContext, useContext, useState } from "react";
import * as s from './HomeStyle3';

// 좋아요 수를 관리하기 위한 context 선언
const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [like, likeState] = useState(1);

    return(
        <LikeContext.Provider value={[like,likeState]}>
            {children}
        </LikeContext.Provider>
    );
};

export default function Body() {
    const [commentsList, setCommentsList] = useState([]);
    const [comment, setComment] = useState("");
    const [isCommentPosted, setIsCommentPosted] = useState(false);

    const handleCommentPost = () => {
        if (comment.trim() !== "") {
            setCommentsList([...commentsList, comment]);
            setComment("");
            setIsCommentPosted(true);
        }
    };

    return (
        <LikeProvider>
            <s.Body_Back>
                <s.Body_Center>
                    <s.Posts>
                        <s.TopBox>
                            <s.Mayo src={"/img/mayo.jpg"}/>
                            <s.Name>계정이름</s.Name>
                        </s.TopBox>
                        <s.PostImg src={"img/1.png"}></s.PostImg>
                        <s.TopBox>
                            <Buttons />
                            <s.Btns src={"/img/msg.png"}/>
                            <s.Btns src={"/img/plane.png"}/>
                        </s.TopBox>
                        <s.TopBox>
                            <Value />
                        </s.TopBox>
                        {commentsList.map((comment, index) => (
                            <s.TopBox key={index}>{comment}</s.TopBox>
                        ))}
                        <s.TopBox>
                            <s.CommentBox
                                placeholder="댓글을 입력하세요"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <s.CommentButton onClick={handleCommentPost}>게시</s.CommentButton>
                        </s.TopBox>
                        <s.UnderBox>
                            <s.Img src={"/img/HomeBtn.png"}/>
                            <s.Img src={"/img/NewPosts.png"}/>
                            <s.Img src={"/img/mayo.jpg"}/>
                        </s.UnderBox>
                    </s.Posts>
                </s.Body_Center>
            </s.Body_Back>
        </LikeProvider>
    );
}

function Value(){
    const[counter, ] = useContext(LikeContext);
    return<h5>좋아요 {counter} 개</h5>
}

function Buttons(){
    const [, setCounter] = useContext(LikeContext);
    const increase = () => setCounter(prev => prev+1);

    return (
        <s.Btns src={"/img/likeBtn.png"} onClick={increase}></s.Btns>
    );
}