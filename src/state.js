import { createContext, useContext } from 'react'

const persistedState = localStorage.getItem('khtml/global')
export const stateDefault = {
  currentChat: null,
  chats: [], // list of chat ids
  preference: null, // name of the job
  likes: [], // list of post ids liked
  applied: [], // list of post ids applied
}

if (persistedState) {
  Object.assign(stateDefault, JSON.parse(persistedState))
}

export const GlobalState = createContext([
  stateDefault,
  () => {}
])

export function useGlobalState() {
  return useContext(GlobalState)
}