import { RECEIVE_IMAGES } from '../actions'

// Initial state is empty array,
// Each time the reducer receives a new payload (search response, array of objects)
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
