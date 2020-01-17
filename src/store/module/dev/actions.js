export function addNewDevRequest(data) {
  return {
    type: '@dev/ADD_NEW_DEV_REQUEST',
    payload: { data },
  }
}

export function addNewDevSuccess(dev) {
  return {
    type: '@dev/ADD_NEW_DEV_SUCCESS',
    payload: { dev },
  }
}