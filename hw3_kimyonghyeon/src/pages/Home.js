import styled from "styled-components";
import React, { useState } from "react";

import Top from "./Top";
// import Abel_Regular from 'src/assets/font/Abel_Regular.woff';



const Body_Back = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;
const Body_Center = styled.div`
  display: flex;
  width: 55%;
  height: 800px;
  flex-direction: column;
  align-items: center;
  //align-items: flex-start;
  flex-shrink: 0;
`;

const Profile = styled.div`
  width: 100%;
  height: 230px;
  padding-bottom: 30px;
  align-items: flex-start;
  flex-shrink: 0;
  border-bottom: 2px solid lightgrey;
  display: flex;
`;
const ProfileImg = styled.div`
  flex: 2;
  padding-left: 130px;
  margin: 50px 50px 50px 70px;
  height: 70%;
`;
const ProfileText = styled.div`
    flex: 8;
  height: 70%;
  margin: 50px 50px 50px 50px;
  text-align: left;
`;
const Img = styled.img`
    width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid gray;
`;

const T = styled.div`
    display: flex;
  flex-direction: row;
`;
const TBtn = styled.button`
  height: 30px;
  border: 1px solid lightgrey;
  background-color: transparent;
  border-color: gray;
  border-radius: 5px;
  margin-top: 7px;
  margin-left: 25px;
`;
const TImg = styled.img`
    height: 25px;
  margin-left: 15px;
  margin-top: 9px;
`;
// ProfileText 안에 들어갈 내용들
const T1 = styled.div`
    font-size: 30px;
  font-style: normal;
  color: var(--Black, #262626);
  padding-bottom: 25px;
`;
const T2 = styled.div`
    font-size: 15px;
`;
const T3 = styled.div`
    font-size: 15px;
  margin: 5px;
`;

const NavBox = styled.div`
  display: flex;
    height: 50px;
  width: 30%;
  align-items: center;
  flex-direction: row;
  border-bottom::5px;
  padding-top: 20px;
  margin-left: 70px;
`;
const Btn = styled.div`
  display: flex;
  flex-direction: row;
    width: fit-content;
  height: fit-content;
  margin : 0 auto;
`;
const BtnImg = styled.img`
  height: 20px;
    width: 20px;
  padding-top: 5px;
`;
const Posts = styled.div`
  padding-top: 20%;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  border-bottom::5px;
`;
const PostImg = styled.img`
    width: 100%;
`;

const Btns = styled.img`
  padding: 10px;
  margin: 2px;
`;

const TopBox = styled.div`
    height: 20%;
  text-align: left;
  width: 100%;
  justify-content: left;
  border: 1px solid blue;
`

const Commnet = styled.button`
    width: 20px;
  border: 1px solid red;
`

const CommentBox = styled.input`
  width: 80%;
  padding: 10px;
  margin-right: 10px;
`;

const CommentButton = styled.button`
  width: fit-content;
  padding: 10px;
  border: 1px solid red;
`;

export default function Body() {
    const [like, setLike] = useState(2);
    const nickname = "asdf";
    const [commentsList, setCommentsList] = useState([]);
    const [comment, setComment] = useState("");
    const [isCommentPosted, setIsCommentPosted] = useState(false);

    const likeAdd = () => {
        setLike(like + 1);
    };

    const handleCommentPost = () => {
        if (comment.trim() !== "") {
            setCommentsList([...commentsList, comment]);
            setComment(""); // 댓글을 추가한 후 입력 창 비우기
            setIsCommentPosted(true);
        }
    };

    return (
        <Body_Back>
            <Body_Center>
                <Posts>
                    <TopBox>
                        <Btns src={"/img/NewPosts.png"}/>
                        Hello World!
                    </TopBox>
                    <PostImg src={"img/1.png"}></PostImg>
                    <TopBox>
                        <Btns src={"/img/likeBtn.png"} onClick={likeAdd} />
                        <Btns src={"/img/NewPosts.png"}/>
                        <Btns src={"/img/NewPosts.png"}/>
                    </TopBox>
                    <TopBox>
                        좋아요 {like} 개
                    </TopBox>
                    {commentsList.map((comment, index) => (
                        <TopBox key={index}>{comment}</TopBox>
                    ))}
                    <TopBox>
                        <CommentBox
                            placeholder="댓글을 입력하세요"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <CommentButton onClick={handleCommentPost}>게시</CommentButton>
                    </TopBox>
                </Posts>
            </Body_Center>
        </Body_Back>
    );
}