import { fetchImages } from '../apis/unsplash'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
export const REQUEST_IMAGES = 'REQUEST_IMAGES'

export function requestImages() {
  return {
    type: REQUEST_IMAGES,
  }
}

export function receiveImages(apiResponse) {
  return {
    type: RECEIVE_IMAGES,
    payload: apiResponse,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchImage(searchTerm) {
  return (dispatch) => {
    // Our request has started, dispatch an action
    // so we know it's pending:
    dispatch(requestImages())
    // Begin the actual API request
    fetchImages(searchTerm)
      .then((apiResponse) => {
        // API request was successful, dispatch
        // another action to indicate that with
        // the additional payload since we have some
        // data for our reducer to leverage (update the redux state object):
        dispatch(receiveImages(apiResponse))
      })
      .catch((err) => {
        // Unsuccessful, something went wrong,
        // dispatch an error action with payload
        // for our reducer to handle (and any component listening via useSelector)
        dispatch(showError(err.message))
      })
  }
}
