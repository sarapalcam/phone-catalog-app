import { configureStore } from '@reduxjs/toolkit';
import phoneListReducer from '../features/slice'

export default configureStore({
  reducer: {
      phoneList: phoneListReducer
  },
})