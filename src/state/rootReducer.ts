import { combineReducers } from '@reduxjs/toolkit';
import { pageSlice } from '../pageBuilder/state/pageSlice';

const rootReducers = combineReducers({
    pages: pageSlice.reducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>