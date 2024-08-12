import { Theme } from '@radix-ui/themes'
import { Switch, Route } from 'wouter'

import '@radix-ui/themes/styles.css'

export function App() {
  return (
    <Theme>
      <Switch>
        <Route>404 Not Found {/* @TODO: Change this to real page */}</Route>
      </Switch>
    </Theme>
  )
}