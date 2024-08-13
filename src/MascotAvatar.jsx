import { css } from '@emotion/react'

import mascot from './assets/mascot.png'
import { accent } from './colors.js'

const MascotAvatarStyle = {
  img: css`
    border: 3px solid ${accent};
    border-radius: 50%;
  
    aspect-ratio: 1/1;
    object-fit: cover;
  `
}

export function MascotAvatar({ className }) {
  return <img src={mascot} css={MascotAvatarStyle.img} className={className} />
}