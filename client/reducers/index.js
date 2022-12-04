import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import images from './image'

export default combineReducers({
  errorMessage,
  images,
})
