import React, { useState } from "react";
import { Link } from "wouter";
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { accent, gray2, gray1, gray5 } from "./colors.js";

import arrow from "./assets/arrow-up.png";
import banner from "./assets/banner.png";
import postingAvatar from "./assets/postingAvatar.png";
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
  title: css`
    color: ${accent};
    font-size: 1.7rem;
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
      <h1 css={HeaderStyle.title}>잘가용 커뮤니티</h1>
    </header>
  );
}

const BannerStyle = {
  image: css`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    margin: 2rem 2rem;
    margin-top: -8rem;
    border-radius: 1rem;
  `,
  back: css`
    background-color: #66ce94;
    width: 100%;
    height: 10rem;
  `,
};
function Banner() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div css={BannerStyle.back}></div>
      <img src={banner} css={BannerStyle.image} />
    </div>
  );
}

const GreenBoxStyle = {
  box1: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background-color: #66ce94;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 1rem 2rem;
    padding-left: 3rem;
    margin: 0 2rem;
    margin-top: -2rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.3s background-color ease-in-out;
    &:hover {
      background-color: #1dba64;
    }
  `,
  icon: css`
    width: 3rem;
  `,
  text1: css`
    font-size: 1.5rem;
    font-weight: 800;
    margin-left: 0.5rem;
  `,
  text2: css`
    font-size: 1rem;
    font-weight: 500;
    margin-left: 0.5rem;
  `,
  highligh: css`
    color: #c7ec77;
    font-weight: 800;
    font-size: 1.2rem;
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
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <img src={postingAvatar} css={GreenBoxStyle.icon} />
          <div css={GreenBoxStyle.text1}>진로 상담 받으러가기</div>
        </div>
        <div css={GreenBoxStyle.text2}>
          아직 무슨 일을 해야 할지 모르겠나용?
          <br />
          <span css={GreenBoxStyle.highligh}>잘가용</span>에게 물어보세용!
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  image: css`
    width: 10rem;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
  `,
  title: css`
    font-weight: bolder;
    font-size: 1rem;
  `,
  box: css`
    display: flex;
    justify-content: space-between;
  `,
  detail: css`
    font-size: 0.8rem;
    margin-top: 0.4rem;
  `,
};

function Card({ value }) {
  return (
    <div>
      <img src={value.titleImg} css={cardStyle.image} />
      <div css={cardStyle.title}>{value.title}</div>
      <div css={cardStyle.box}>
        <div css={cardStyle.detail}>{value.date}</div>
        <div css={cardStyle.detail}>{value.place}</div>
      </div>
    </div>
  );
}

const slideBoxStyle = {
  title: css`
    font-weight: bold;
    color: #3aee8b;
    font-size: 1.5rem;
  `,
  moreBtn: css`
    text-align: right;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  `,
  sliderContainer: css`
    margin-bottom: 2rem;
    .slick-slide {
      display: flex !important;
      justify-content: center;
    }
  `,
};

function SlideBox1({ Card }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // 자동 슬라이드 설정
    autoplaySpeed: 1600, // 슬라이드 전환 속도 설정
  };
  const info1 = { job: "경찰", title: "견학 활동 1", titleImg: banner, date: "2024년 8월 13일", place: "처인구" };
  const info2 = { job: "경찰", title: "견학 활동 2", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info3 = { job: "경찰", title: "견학 활동 3", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info = [info1, info2, info3];

  return (
    <div
      css={css`
        margin: 0 1rem;
        margin-top: 2.5rem;
      `}
    >
      <div css={slideBoxStyle.title}>{info1.job} 관련 견학 활동</div>
      <div css={slideBoxStyle.moreBtn}>더보기</div>
      <div css={slideBoxStyle.sliderContainer}>
        <Slider {...settings}>
          {info.map((value, idx) => {
            return <Card value={value} key={idx} />;
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

function SlideBox2({ Card }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // 자동 슬라이드 설정
    autoplaySpeed: 2000, // 슬라이드 전환 속도 설정
  };
  const info1 = { job: "경찰", title: "견학 활동 1", titleImg: banner, date: "2024년 8월 13일", place: "처인구" };
  const info2 = { job: "경찰", title: "견학 활동 2", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info3 = { job: "경찰", title: "견학 활동 3", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info = [info1, info2, info3];

  return (
    <div
      css={css`
        margin: 0 1rem;
        margin-top: 2.5rem;
      `}
    >
      <div css={slideBoxStyle.title}>현재 모집중인 견학 활동</div>
      <div css={slideBoxStyle.moreBtn}>더보기</div>
      <div css={slideBoxStyle.sliderContainer}>
        <Slider {...settings}>
          {info.map((value, idx) => {
            return <Card value={value} key={idx} />;
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

function SlideBox3({ Card }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // 자동 슬라이드 설정
    autoplaySpeed: 1200, // 슬라이드 전환 속도 설정
  };
  const info1 = { job: "경찰", title: "견학 활동 1", titleImg: banner, date: "2024년 8월 13일", place: "처인구" };
  const info2 = { job: "경찰", title: "견학 활동 2", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info3 = { job: "경찰", title: "견학 활동 3", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info = [info1, info2, info3];

  return (
    <div
      css={css`
        margin: 0 1rem;
        margin-top: 2.5rem;
      `}
    >
      <div css={slideBoxStyle.title}>마감된 견학 활동</div>
      <div css={slideBoxStyle.moreBtn}>더보기</div>
      <div css={slideBoxStyle.sliderContainer}>
        <Slider {...settings}>
          {info.map((value, idx) => {
            return <Card value={value} key={idx} />;
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

function SlideBox4({ Card }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // 자동 슬라이드 설정
    autoplaySpeed: 2400, // 슬라이드 전환 속도 설정
  };
  const info1 = { job: "경찰", title: "견학 활동 1", titleImg: banner, date: "2024년 8월 13일", place: "처인구" };
  const info2 = { job: "경찰", title: "견학 활동 2", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info3 = { job: "경찰", title: "견학 활동 3", titleImg: banner, date: "2024년 8월 13일", place: "기흥구" };
  const info = [info1, info2, info3];

  return (
    <div
      css={css`
        margin: 0 1rem;
        margin-top: 2.5rem;
      `}
    >
      <div css={slideBoxStyle.title}>견학 활동 후기</div>
      <div css={slideBoxStyle.moreBtn}>더보기</div>
      <div css={slideBoxStyle.sliderContainer}>
        <Slider {...settings}>
          {info.map((value, idx) => {
            return <Card value={value} key={idx} />;
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

export function Posting() {
  return (
    <div>
      <Header />
      <Banner />
      <GreenBox />
      <SlideBox1 Card={Card} />
      <SlideBox2 Card={Card} />
      <SlideBox3 Card={Card} />
      <SlideBox4 Card={Card} />
      <div
        css={css`
          margin-bottom: 2rem;
        `}
      />
    </div>
  );
}
