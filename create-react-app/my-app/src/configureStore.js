import { createStore } from 'redux'
import photos from './reducers/photos'

const configureStore = () => {
  return createStore(photos)
}

export default configureStore
