import { AppsRounded } from '@material-ui/icons';
import { configureStore } from '@reduxjs/toolkit';
import { app } from 'firebase';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
