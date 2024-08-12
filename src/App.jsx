import { Switch, Route } from 'wouter'
import { Global, css } from '@emotion/react'

import { Entry } from './Entry.jsx'

import { gray5, white } from './colors.js'

import './reset.css'
import './font.css'

export function App() {
  return (
    <>
      <Global styles={css`
        body {
          background-color: ${gray5};
          
          color: ${white};
          font-family: Pretendard Variable;
        }
      `}/>
      <Switch>
        <Route path='/'><Entry /></Route>

        <Route>404 Not Found {/* @TODO: Change this to real page */}</Route>
      </Switch>
    </>
  )
}