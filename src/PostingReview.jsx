import React, { useState } from "react";
import { Link } from "wouter";
import { css } from "@emotion/react";
import { accent, gray2, gray1, gray5 } from "./colors.js";

import arrow from "./assets/arrow-up.png";
import postingImg from "./assets/postingImg.png";
import hand from "./assets/hand.png";
import reviewAvatar from "./assets/reviewAvatar.png";
import heart from "./assets/heart.png";

const HeaderStyle = {
  header: css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${gray2};

    padding: 2rem 1rem;
  `,
  arrow: css`
    position: absolute;
    left: 2rem;
    height: 1.5rem;
    transform: rotate(-90deg);
  `,
};
function Header({ className }) {
  return (
    <header css={HeaderStyle.header} className={className}>
      <Link to="/" asChild>
        <img css={HeaderStyle.arrow} src={arrow} />
      </Link>
    </header>
  );
}

const PostingImgStyle = {
  image: css`
    opacity: 0.6;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    position: relative;
  `,
  titleBox: css`
    position: absolute;
    top: 12.5rem;
    left: 1.5rem;
  `,
  title: css`
    font-size: 2.5rem;
    font-weight: 1000;
  `,
  close: css`
    padding: 0.2rem 0.5rem;
    margin-right: 18rem;
    font-weight: 900;
    border-radius: 5rem;
  `,
  place: css`
    font-weight: 900;
  `,
};
function PostingImg() {
  return (
    <div>
      <img src={postingImg} css={PostingImgStyle.image} />
      <div>
        <div css={PostingImgStyle.titleBox}>
          <div css={PostingImgStyle.title}>견학 활동 1</div>
          <div
            css={css`
              display: flex;
            `}
          >
            <div css={PostingImgStyle.close}>글쓴이</div>
            <div css={PostingImgStyle.place}>처인구</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const GreenBoxStyle = {
  box1: css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3b7a57;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.5);
    width: 65%;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.3s background-color ease-in-out;
    &:hover {
      background-color: #2bbb6c;
    }
  `,
  icon: css`
    width: 6rem;
    margin-left: -1.5rem;
  `,
  text: css`
    font-size: 1.5rem;
    font-weight: 800;
    margin-left: -1rem;
  `,
};

function GreenBox() {
  return (
    <div
      css={css`
        margin-top: 2rem;
        display: flex;
        justify-content: center;
      `}
    >
      <div css={GreenBoxStyle.box1}>
        <img src={reviewAvatar} css={GreenBoxStyle.icon} />
        <div css={GreenBoxStyle.text}>
          견학 모집 게시물 <br /> 보러 가용
        </div>
      </div>
    </div>
  );
}

const GrayBoxStyle = {
  box: css`
    background-color: #656972;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.5);
    width: 90%;
  `,
};

function GrayBox() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div css={GrayBoxStyle.box}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet ad vitae animi deleniti, excepturi similique alias sequi ullam
        provident doloremque aspernatur voluptas ducimus, facere at veritatis perspiciatis assumenda. Accusantium. provident doloremque
        aspernatur voluptas ducimus, facere at veritatis perspiciatis assumenda. Accusantium. provident doloremque aspernatur voluptas
        ducimus, facere at veritatis perspiciatis assumenda. Accusantium. ipisicing elit. Impedit amet ad vitae animi deleniti, excepturi
        similique alias sequi ullam provident doloremque aspernatur voluptas ducimus, facere at veritatis perspiciatis assumenda.
        Accusantium. provident doloremque aspernatur voluptas ducimus, facere at veritatis perspiciatis assumenda. Accusantium. provident
        doloremque aspernatur voluptas ducimus, facere at veritatis perspiciatis assumenda. Accusantium.
      </div>
    </div>
  );
}

const BtnStyle = {
  box: css`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
    background-color: #f3754f;
    width: fit-content;
    padding: 0.8rem 1.2rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #ff3d00;
    }
  `,
  image: css`
    width: 1.5rem;
  `,
};

function Btn() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div css={BtnStyle.box}>
        <img src={heart} css={BtnStyle.image} />
        <div>추천해주세용</div>
      </div>
    </div>
  );
}

export function PostingReview() {
  return (
    <div>
      <Header />
      <PostingImg />
      <GreenBox />
      <GrayBox />
      <Btn />
    </div>
  );
}
