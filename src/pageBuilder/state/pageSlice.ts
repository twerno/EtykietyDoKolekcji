import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pageData } from './PageData';
import { IPageSchema } from './PageSchema';
import ImmutableUtils from '../../helper/ImmutableUtils';

export const pageSlice = createSlice({
    name: 'pages',
    initialState: pageData,
    reducers: {

        pageUpdate(state, action: PayloadAction<{ idx: number, delta: Partial<IPageSchema> }>): IPageSchema[] {
            return ImmutableUtils.updateArray(state, action.payload.idx, action.payload.delta);
        },

    }
});
