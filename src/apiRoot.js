const APIServer = 'https://3dc0-14-47-82-190.ngrok-free.app'

export function apiCallMaker(path) {
  return APIServer + path
}