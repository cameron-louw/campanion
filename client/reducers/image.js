import { RECEIVE_IMAGES } from '../actions'

function getImage(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_IMAGES:
      return payload
    default:
      return state
  }
}

export default getImage
