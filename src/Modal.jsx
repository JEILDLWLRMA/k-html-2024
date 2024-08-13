import { createPortal } from 'react-dom'
import { css } from '@emotion/react'

import oops from './assets/oops.png'
import { accent, gray5 } from './colors.js'

const ModalStyle = {
  background: css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: opacity(50%) brightness(30%);
  `
}

const modalRoot = document.getElementById('modal')

export function Modal({ children, close, className }) {
  return createPortal(
    <div
      // We can't use Event#eventPhase since React incorrectly implemented it in SyntheticEvents: https://github.com/facebook/react/issues/9783
      onClick={({ target, currentTarget }) => target === currentTarget && close()}
      css={ModalStyle.background}
      className={className}
    >
      {children}
    </div>,
    modalRoot
  )
}

const ErrorModalStyle = {
  section: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 1.5rem;
    
    border: 3px solid ${accent};
    border-radius: 25px;
  `,
  confirm: css`
    margin-top: 1rem;
  
    color: white;
    font-weight: 500;
    
    background-color: transparent;
    
    width: 5rem;
      
    border: 1.5px solid ${accent};
    border-radius: 10px;
  `
}

export function ErrorModal({ close, title, message, className }) {
  return (
    <Modal close={close}>
      <section css={ErrorModalStyle.section} className={className}>
        <h2>{title}</h2>
        <img src={oops} />
        <p>{message}</p>
        <button onClick={close} css={ErrorModalStyle.confirm}>확인</button>
      </section>
    </Modal>
  )
}