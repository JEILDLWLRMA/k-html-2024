import { Switch, Route } from 'wouter'
import { Global, css } from '@emotion/react'
import { useState } from 'react'

import { Entry } from './Entry.jsx'
import { Analysis } from './Analysis.jsx'
import { Counsel } from './Counsel.jsx'

import { GlobalState, stateDefault } from './state.js'

import { gray5, white } from './colors.js'

import './reset.css'
import './font.css'

export function App() {
  const [globalState, setGlobalState] = useState(stateDefault)

  return (
    <GlobalState.Provider
      value={[
        globalState,
        nextState => {
          localStorage.setItem('khtml/global', JSON.stringify(nextState))
          setGlobalState(nextState)
        }
      ]}
    >
      <Global styles={css`
        body {
          background-color: ${gray5};
          
          color: ${white};
          font-family: Pretendard Variable;
        }
      `}/>
      <Switch>
        <Route path='/'><Entry /></Route>
        <Route path='/counsel'><Counsel /></Route>
        <Route path='/analysis'><Analysis /></Route>

        <Route>404 Not Found {/* @TODO: Change this to real page */}</Route>
      </Switch>
    </GlobalState.Provider>
  )
}