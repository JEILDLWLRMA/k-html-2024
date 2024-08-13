import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiCallMaker } from "./apiRoot.js";
import { accent, gray2, gray1, gray5 } from "./colors.js";

import arrow from "./assets/arrow-up.png";
import banner from "./assets/banner.png";
import postingAvatar from "./assets/postingAvatar.png";
import { firstData, secondData, thirdData, fourthData } from "./api.js";

const goToPosting = (navigate) => (data) => {
  console.log(data);
  if (data.available || data.id[0] === "C") {
    navigate("/posting-open", { state: data });
  } else if (data.review) {
    navigate("/posting-review", { state: data });
  } else {
    navigate("/posting-close", { state: data });
  }
};

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
    height: 6rem; /* 고정된 높이 추가 */
    object-fit: cover; /* 이미지가 컨테이너를 덮으며 넘치는 부분 잘라내기 */
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
        <div css={cardStyle.detail}>{value.location}</div>
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

function SlideBox1({ Card, goToPosting }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    fetch(apiCallMaker("/api/field-trips/"), { method: "POST" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log("[1]: ", data);
      })
      .catch((error) => {
        setError(error);
        return <div>Error: {error.message}</div>;
      });
  }, []);

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

  return (
    <div
      css={css`
        margin: 0 1rem;
        margin-top: 2.5rem;
      `}
    >
      <div css={slideBoxStyle.title}>진로 관련 견학 활동</div>
      <div css={slideBoxStyle.moreBtn}>더보기</div>
      <div css={slideBoxStyle.sliderContainer}>
        <Slider {...settings}>
          {firstData.map((value, idx) => {
            return (
              <div key={idx} onClick={() => goToPosting(value)}>
                <Card value={value} />
              </div>
            );
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

function SlideBox2({ Card, goToPosting }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiCallMaker("/api/field-trips/current/"), { method: "POST" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log("[2]: ", data);
      })
      .catch((error) => {
        setError(error);
        return <div>Error: {error.message}</div>;
      });
  }, []);

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
          {secondData.map((value, idx) => {
            return (
              <div key={idx} onClick={() => goToPosting(value)}>
                <Card value={value} />
              </div>
            );
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

function SlideBox3({ Card, goToPosting }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiCallMaker("/api/field-trips/completed/"), { method: "POST" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log("[3]: ", data);
      })
      .catch((error) => {
        setError(error);
        return <div>Error: {error.message}</div>;
      });
  }, []);

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
          {thirdData.map((value, idx) => {
            return (
              <div key={idx} onClick={() => goToPosting(value)}>
                <Card value={value} />
              </div>
            );
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

function SlideBox4({ Card, goToPosting }) {
  const [data, setData] = useState(fourthData);

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
          {data.map((value, idx) => {
            return (
              <div key={idx} onClick={() => goToPosting(value)}>
                <Card value={value} />
              </div>
            );
          })}
        </Slider>
      </div>
      <hr />
    </div>
  );
}

export function Posting() {
  const [, navigate] = useLocation();

  return (
    <div>
      <Header />
      <Banner />
      <Link to="/counsel" asChild>
        <div>
          <GreenBox />
        </div>
      </Link>
      <SlideBox1 Card={Card} goToPosting={goToPosting(navigate)} />
      <SlideBox2 Card={Card} goToPosting={goToPosting(navigate)} />
      <SlideBox3 Card={Card} goToPosting={goToPosting(navigate)} />
      <SlideBox4 Card={Card} goToPosting={goToPosting(navigate)} />
      <div
        css={css`
          margin-bottom: 2rem;
        `}
      />
    </div>
  );
}
