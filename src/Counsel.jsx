import React, { useRef, useState } from "react";
import { Link } from "wouter";
import { css } from "@emotion/react";
import { accent, gray2, gray1, white } from "./colors.js";

import menu from "./assets/menu.png";
import menu2 from "./assets/menu2.png";
import home from "./assets/home.png";
import newWrite from "./assets/newWrite.png";
import pencil from "./assets/pencil.png";
import trash from "./assets/trash.png";
import arrowUp from './assets/arrow-up.png'
import { Message } from './Message.jsx'

const HeaderStyle = {
  header: css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${gray2};

    padding: 0.8rem;
  `,
  menu: css`
    position: absolute;
    left: 2rem;
    height: 1.5rem;
  `,
  title: css`
    color: ${accent};
    font-size: 1.7rem;
  `,
  newWrite: css`
    position: absolute;
    right: 2rem;
    height: 1.7rem;
  `,
};
const SideBarStyle = {
  home: css`
    width: 1.5rem;
    position: absolute;
    top: 0.6rem;
    right: 1rem;
  `,
  left: css`
    display: flex;
    position: absolute;
    flex-direction: column;
    background-color: ${gray1};
    width: 50%;
    height: 100%;
    z-index: 1;
  `,
  title: css`
    font-size: 1.7rem;
    background-color: #353941;
    margin-top: 3rem;
    padding: 0.5rem 0rem;
    padding-left: 2rem;
    font-weight: bolder;
  `,
  contentBox: css`
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: 4fr 1fr;
    margin-top: 1.5rem;
    padding-left: 1.5rem;
    align-items: center;
    position: relative;
  `,
  contentText: css`
    cursor: pointer;
  `,
  Selected: css`
    background-color: #7c828e;
    width: fit-content;
    padding: 0 0.5rem;
    border-radius: 10px;
    margin-left: -0.5rem;
    cursor: pointer;
  `,
  menu2: css`
    cursor: pointer;
    width: 1rem;
    justify-self: end;
    margin-right: 1.2rem;
  `,
};
const menuBoxStyle = {
  box: css`
    background-color: #656972;
    border-radius: 20px;
    width: 10rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid white;
    position: absolute;
    top: 2rem;
    left: 12rem;
  `,
  content: css`
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
  `,
  icon: css`
    width: 0.8rem;
    height: 1rem;
  `,
};

function MenuBox() {
  return (
    <>
      <div css={menuBoxStyle.box}>
        <div css={menuBoxStyle.content}>
          <img src={pencil} css={menuBoxStyle.icon} />
          <div>이름 변경하기</div>
        </div>
        <div css={menuBoxStyle.content}>
          <img src={trash} css={menuBoxStyle.icon} />
          <div>삭제하기</div>
        </div>
      </div>
    </>
  );
}

function SlideBar({ MenuBox, history = [1, 2] }) {
  const [openMenus, setOpenMenus] = useState([false, false]);

  const handleClickMenu = (index) => {
    if (openMenus[index]) {
      setOpenMenus((prev) => {
        const newOpenMenus = [...prev].map(() => {
          return false;
        });
        return newOpenMenus;
      });
    } else {
      setOpenMenus((prev) => {
        const newOpenMenus = [...prev].map(() => {
          return false;
        });
        newOpenMenus[index] = !newOpenMenus[index];
        return newOpenMenus;
      });
    }
  };

  return (
    <div css={SideBarStyle.left}>
      <Link to="/">
        <img src={home} css={SideBarStyle.home} />
      </Link>
      <div css={SideBarStyle.title}>상담 기록</div>

      <div>
        {history.map((item, index) => (
          <div key={index} css={SideBarStyle.contentBox}>
            <div css={SideBarStyle.Selected}>진로 상담 {item}</div>
            <img src={menu2} css={SideBarStyle.menu2} onClick={() => handleClickMenu(index)} alt="menu" />
            {openMenus[index] ? <MenuBox /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function Header({ className, handleClickMenu }) {
  return (
    <header css={HeaderStyle.header} className={className}>
      <img css={HeaderStyle.menu} src={menu} onClick={handleClickMenu} />
      <h1 css={HeaderStyle.title}>진로 상담</h1>
      <img css={HeaderStyle.newWrite} src={newWrite} />
    </header>
  );
}

const FlexibleInputStyle = {
  box: css`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    border: 2px solid ${white};
    border-radius: 90px;
    
    padding: 0.8rem 1.2rem;
    
    opacity: 0.5;
    --form-opacity: 0.5;
    
    :valid {
      opacity: 1;
      --form-opacity: 1;
    }
  `,
  inputField: css`
    max-width: 90%;
    
    background-color: transparent;
    border: 0;
    outline: none;
    
    color: ${white};
    font-height: 1.4rem;
  
    flex-grow: 1;
  `,
  submit: css`
    height: 2rem;
    width: 2rem;
  
    background-color: ${accent};
    
    border: 0;
    border-radius: 45px;
    
    opacity: var(--form-opacity);
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    &[data-parent-is-valid="true"] {
      opacity: 1;
    }
  `
}

function FlexibleInput({ onSubmit, className }) {
  return (
    <form
      css={FlexibleInputStyle.box}
      className={className}
      onSubmit={e => {
        e.preventDefault()
        onSubmit(e)
      }}
    >
      <input required css={FlexibleInputStyle.inputField} />
      <button css={FlexibleInputStyle.submit}>
        <img src={arrowUp} />
      </button>
    </form>
  )
}

const UserMessageStyle = css`
  display: flex;
  flex-direction: row-reverse;
  
  padding-right: 1rem;
`

function UserMessage({ children, className }) {
  return (
    <section css={UserMessageStyle} className={className}>
      {children}
    </section>
  )
}

const CounselStyle = {
  main: css`
    flex-grow: 1;
    
    position: relative;
    display: flex;
    flex-direction: column;
    
    max-height: 92%;
  `,
  header: css`
    height: 8%;
  `,
  input: css`
    margin: 0 0.6rem 1.2rem 0.6rem;
  `,
  messageList: css`   
    flex-grow: 1;
  
    padding: 1.8rem 0.8rem;
    
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    
    overflow-y: scroll;
  `
}

export function Counsel() {
  const [sideBar, setSideBar] = useState(false);
  const handleClickMenu = () => {
    setSideBar(!sideBar);
  };

  return (
    <div
      css={css`
        height: 100vh;
        height: 100dvh;

        display: flex;
        flex-direction: column;
      `}
    >
      <Header handleClickMenu={handleClickMenu} css={CounselStyle.header} />
      <main css={CounselStyle.main}>
        {sideBar && <SlideBar MenuBox={MenuBox} />}
        <div css={CounselStyle.messageList}>
          <Message><p>안녕하세요!</p></Message>
          <UserMessage css={css`width: 70%; align-self: end;`}><p>안녕하세용</p></UserMessage>
          <Message><p>조금 긴 메시지입니다.</p></Message>
          <UserMessage css={css`width: 70%; align-self: end;`}><p>저도 긴 메시지입니다.</p></UserMessage>
          <Message><p>아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다.</p></Message>
          <Message><p>아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다.</p></Message>
          <Message><p>아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다. 아주 긴 메시지입니다.</p></Message>
        </div>
        <FlexibleInput css={CounselStyle.input} />
      </main>
    </div>
  );
}
