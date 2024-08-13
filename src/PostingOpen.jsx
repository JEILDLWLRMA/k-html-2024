import React, { useState } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { css } from "@emotion/react";
import { accent, gray2, gray1, gray5 } from "./colors.js";

import arrow from "./assets/arrow-up.png";
import postingImg from "./assets/postingImg.png";
import check from "./assets/check.png";

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
    width: 100%;
    height: 15.5rem;
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
  open: css`
    background-color: green;
    padding: 0.2rem 0.5rem;
    margin-right: 18rem;
    font-weight: 900;
    border-radius: 5rem;
  `,
  place: css`
    font-weight: 900;
  `,
};
function PostingImg({ title, titleImg, place }) {
  return (
    <div>
      <img src={titleImg} css={PostingImgStyle.image} />
      <div>
        <div css={PostingImgStyle.titleBox}>
          <div css={PostingImgStyle.title}>{title}</div>
          <div
            css={css`
              display: flex;
            `}
          >
            <div css={PostingImgStyle.open}>모집중</div>
            <div css={PostingImgStyle.place}>{place}</div>
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
    background-color: #3b7a57;
    padding: 1rem 3rem;
    font-size: 1.1rem;
    font-weight: 500;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.5);
    width: 90%;
  `,
  box2: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3b7a57;
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 2rem;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.5);
    width: 90%;
  `,
  period: css`
    font-weight: bold;
    font-size: 1.3rem;
  `,
};

function GreenBox({ date, deadline }) {
  return (
    <div
      css={css`
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div css={GreenBoxStyle.box1}>
        <div>일시 {date} | 모집 인원 00명</div>
      </div>
      <div css={GreenBoxStyle.box2}>
        <div css={GreenBoxStyle.period}>모집 기간</div>
        <div>{deadline}</div>
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

function GrayBox({ content }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div css={GrayBoxStyle.box}>{content}</div>
    </div>
  );
}

const BtnStyle = {
  box: css`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
    background-color: #66ce94;
    width: fit-content;
    padding: 0.8rem 1.2rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: green;
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
        <img src={check} css={BtnStyle.image} />
        <div>신청하기</div>
      </div>
    </div>
  );
}

export function PostingOpen() {
  const { title, place, date, deadline, content, titleImg } = history.state;

  return (
    <div>
      <Header />
      <PostingImg title={title} titleImg={titleImg} place={place} />
      <GreenBox date={date} deadline={deadline} />
      <GrayBox content={content} />
      <Btn />
    </div>
  );
}
