import { MascotAvatar } from "./MascotAvatar.jsx";
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "wouter";

import header from './assets/header.png'
import rocket from './assets/rocket.png'
import actions from './assets/actions.png'
import banner from './assets/banner.png'
import community from './assets/community.png'
import hi from './assets/hi.png'
import desktopHeader from './assets/desktop-header.png'
import { accent, white } from './colors.js'
import { useLocation } from 'wouter'

const CardStyle = {
  card: css`
    display: grid;
    grid-template-columns: 1.2rem 1fr;
    grid-template-rows: 1.2rem 1fr;
    grid-template-areas:
      "icon title"
      "description description";

    align-items: center;

    padding: 1rem;

    border: 1.5px solid ${white};
    border-radius: 20px;
  `,
  icon: css`
    grid-area: icon;

    height: 1.2rem;
    width: 1.2rem;
  `,
  title: css`
    grid-area: title;

    font-size: 1.2rem;

    margin-left: 0.5rem;
  `,
  description: css`
    grid-area: description;

    align-self: start;

    margin-top: 1rem;
  `,
};

function Card({ icon, title, description, className }) {
  return (
    <div css={CardStyle.card} className={className}>
      <img src={icon} css={CardStyle.icon} />
      <h3 css={CardStyle.title}>{title}</h3>
      <p css={CardStyle.description}>{description}</p>
    </div>
  );
}

const EntryStyle = {
  page: css`
    height: 100vh;
    height: 100dvh;
  `,
  header: css`
    height: 20%;

    overflow-x: hidden;
  `,
  headerGraphic: css`
    height: 100%;
    min-width: 100%;
  `,
  main: css`
    height: 80%;

    padding: 1rem 1.5rem 0 1.5rem;
  `,
  titleBox: css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  mascot: css`
    height: 4rem;
  `,
  title: css`
    color: ${accent};
    font-size: 4rem;
  `,
  catchphrase: css`
    font-weight: 600;
    font-size: 1.3rem;
  `,
  actionList: css`
    display: flex;
    align-items: stretch;
    gap: 0.8rem;

    padding-left: 0;

    margin-top: 0.6rem;

    list-style-type: none;
  `,
  action: css`
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
  `,
  card: css`
    height: 100%;
  `,
  banner: css`
    width: 100%;
    max-height: 30%;
    object-fit: cover;

    border: 1.5px solid ${accent};
    border-radius: 20px;

    margin-top: 1rem;
  `,
  community: css`
    margin-top: 1rem;
  `,
  slide: css`
    @media (max-height: 700px) {
      display: none;
    }
  `,
};

function EntryMobile({ className }) {
  const banners = [banner, banner, banner];
  const catchphrases = [
    "당신의 꿈을 향한 여정, 잘가용이 함께합니다.",
    "막막한 진로 고민, 잘가용과 함께 해결하세요.",
    "미래를 바꾸는 작은 시작, 잘가용과 함께하세요.",
  ];
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    autoplay: true, // 자동 슬라이드 설정
    autoplaySpeed: 2000, // 슬라이드 전환 속도 설정
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // 자동 슬라이드 설정
    autoplaySpeed: 2500, // 슬라이드 전환 속도 설정
  };
  const [, navigate] = useLocation()

  return (
    <div css={EntryStyle.page} className={className}>
      <header css={EntryStyle.header}>
        <img src={header} css={EntryStyle.headerGraphic} />
      </header>
      <main css={EntryStyle.main}>
        <div css={EntryStyle.titleBox}>
          <MascotAvatar css={EntryStyle.mascot} />
          <h1 css={EntryStyle.title}>잘가용</h1>
        </div>
        <Slider {...settings1}>
          {catchphrases.map((value, index) => {
            return (
              <h2 css={EntryStyle.catchphrase} key={index}>
                {value}
              </h2>
            );
          })}
        </Slider>
        <ul css={EntryStyle.actionList}>
          <Link to="/counsel" asChild>
            <li css={EntryStyle.action}>
              <Card icon={rocket} title="진로 상담" description="잘가용에게 진로 상담 받으러 가용" css={EntryStyle.card} />
            </li>
          </Link>

          <Link to="/analysis" asChild>
            <li css={EntryStyle.action}>
              <Card
                icon={actions}
                title="분석 및 첨삭"
                description="생활기록부 첨삭 및 자기소개서 방향성 제안 받으러 가용"
                css={EntryStyle.card}
              />
            </li>
          </Link>
        </ul>
        <Link to="/community" asChild>
          <div>
            <Card
              icon={community}
              title="잘가용 커뮤니티"
              description="잘가용 커뮤니티에서 견학 기회와 후기를 살펴보러 가용"
              css={EntryStyle.community}
            />
          </div>
        </Link>
        <Slider css={EntryStyle.slide} {...settings2}>
          {banners.map((value, idx) => {
            return <img src={value} key={idx} css={EntryStyle.banner} />;
          })}
        </Slider>
      </main>
    </div>
  );
}

const EntryDesktopStyle = {
  page: css`
    height: 100vh;
    height: 100dvh;
    
    display: flex;
    flex-direction: column;
  `,
  header: css`
    img {
      height: 100%;
      min-width: 100%;
    }
  `,
  main: css`
    flex-grow: 1;
    
    display: grid;
    grid-template-columns: 30% 70%;
    
    overflow: hidden;
  `,
  mascot: css`
    position: relative;
    bottom: -2rem;
    align-self: end;
    
    object-position: bottom;
  `,
  section: css`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: repeat(1fr, 4);
    grid-template-areas:
      'headline headline'
      'info1 banner'
      'info2 banner'
      'info3 banner';
    gap: 1rem;
      
    padding: 6rem 0;
  `,
  headline: css`
    grid-area: headline;
    
    font-size: 3rem;
    font-weight: bold;
    
    b {
      color: ${accent};
      font-size: 4rem;
    }
  `,
  card: css`
    height: 100%;
  `,
  banner: css`
    grid-area: banner;
    align-self: stretch;
    object-fit: cover;
    
    border: 1.5px solid ${accent};
    border-radius: 20px;
  `,
}

function EntryDesktop({ className }) {
  return (
    <div css={EntryDesktopStyle.page} className={className}>
      <header css={EntryDesktopStyle.header}>
        <img src={desktopHeader} />
      </header>
      <main css={EntryDesktopStyle.main}>
        <img css={EntryDesktopStyle.mascot} src={hi} />
        <section css={ EntryDesktopStyle.section }>
          <h1 css={ EntryDesktopStyle.headline }>당신의 꿈을 향한 여정, <b>잘가용</b>이 함께합니다.</h1>
          <Link to="/counsel" asChild>
            <div css={css`grid-area: info1;`}>
              <Card
                icon={ rocket }
                title="진로 상담"
                description="잘가용에게 진로 상담 받으러 가용"
                css={ EntryDesktopStyle.card }
              />
            </div>
          </Link>
          <img src={ banner } css={ EntryDesktopStyle.banner }/>
          <Link to="/analysis" asChild>
            <div css={css`grid-area: info2;`}>
              <Card
                icon={ actions }
                title="분석 및 첨삭"
                description="생활기록부 첨삭 및 자기소개서 방향성 제안 받으러 가용"
                css={ EntryDesktopStyle.card }
              />
            </div>
          </Link>
          <Link to="/community" asChild>
            <div css={css`grid-area: info3;`}>
              <Card
                icon={ community }
                title="잘가용 커뮤니티"
                description="잘가용 커뮤니티에서 견학 기회와 후기를 살펴보러 가용"
                css={ EntryDesktopStyle.card }
              />
            </div>
          </Link>
        </section>
      </main>
    </div>
  )
}

export function Entry() {
  return (
    <>
      <EntryMobile css={css`
        display: none;
        
        @media (max-width: 1023px) {
          display: block;
        }
      `} />
      <EntryDesktop css={css`
        display: none;
            
        @media (min-width: 1024px) {
          display: block;
        }
      `} />
    </>
  )
}