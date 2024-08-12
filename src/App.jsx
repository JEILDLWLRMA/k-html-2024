import { Switch, Route } from 'wouter'
import { Global, css } from '@emotion/react'

import { gray5 } from './colors.js'

import './reset.css'
import './font.css'

export function App() {
  return (
    <>
      <Global styles={css`
        body {
          background-color: ${gray5};
        }
      `}/>
      <Switch>
        <Route>404 Not Found {/* @TODO: Change this to real page */}</Route>
      </Switch>
    </>
  )
}