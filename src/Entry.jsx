import { MascotAvatar } from './MascotAvatar.jsx'
import { css } from '@emotion/react'

import header from './assets/header.png'
import rocket from './assets/rocket.png'
import actions from './assets/actions.png'
import banner from './assets/banner.png'
import community from './assets/community.png'
import { accent, white } from './colors.js'
import { useLocation } from 'wouter'

const CardStyle = {
  card: css`
    display: grid;
    grid-template-columns: 1.2rem 1fr;
    grid-template-rows: 1.2rem 1fr;
    grid-template-areas: 
      'icon title'
      'description description';
      
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
  `
}

function Card({ icon, title, description, className }) {
  return (
    <div css={CardStyle.card} className={className}>
      <img src={icon} css={CardStyle.icon} />
      <h3 css={CardStyle.title}>{title}</h3>
      <p css={CardStyle.description}>{description}</p>
    </div>
  )
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
  
    margin-top: 2rem;
  `,
  community: css`
    margin-top: 2rem;
  `
}

export function Entry() {
  const [, navigate] = useLocation()

  return (
    <div css={EntryStyle.page}>
      <header css={EntryStyle.header}>
        <img src={header} css={EntryStyle.headerGraphic} />
      </header>
      <main css={EntryStyle.main}>
        <div css={EntryStyle.titleBox}>
          <MascotAvatar css={EntryStyle.mascot}/>
          <h1 css={EntryStyle.title}>잘가용</h1>
        </div>
        <h2 css={EntryStyle.catchphrase}>당신의 꿈을 향한 여정, 잘가용이 함께합니다.</h2>
        <ul css={ EntryStyle.actionList}>
          <li css={ EntryStyle.action } onClick={() => navigate('/counsel')}>
            <Card
              icon={rocket}
              title='진로 상담'
              description='잘가용에게 진로 상담 받으러 가용'
              css={EntryStyle.card}
            />
          </li>
          <li css={EntryStyle.action} onClick={() => navigate('/analysis')}>
            <Card
              icon={actions}
              title='분석 및 첨삭'
              description='생활기록부 첨삭 및 자기소개서 방향성 제안 받으러 가용'
              css={EntryStyle.card}
            />
          </li>
        </ul>
        <img src={banner} css={EntryStyle.banner}/>
        <Card icon={community} title='잘가용 커뮤니티' description='잘가용 커뮤니티에서 견학 기회와 후기를 살펴보러 가용' css={EntryStyle.community} />
      </main>
    </div>
  )
}