import { css } from '@emotion/react'

import { MascotAvatar } from './MascotAvatar.jsx'

const MessageStyle = {
  message: css`
    display: grid;
    grid-template-columns: 2.8rem 60%;
    align-items: center;
    gap: 1.5rem;
  `,
  sender: css`    
    align-self: start;
  `
}

export function Message({ children, className }) {
  return (
    <section css={MessageStyle.message} className={className}>
      <MascotAvatar css={MessageStyle.sender} />
      {children}
    </section>
  )
}