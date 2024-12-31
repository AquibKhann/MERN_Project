import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import secondSliceReducer from './secondSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        //import secondSliceReducer from './secondSlice';: import secondSliceReducer from './secondSlice'; Reducer
    },
});

export default store;