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
    dispatch(requestImages())
    fetchImages(searchTerm)
      .then((apiResponse) => {
        dispatch(receiveImages(apiResponse))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
