import { configureStore } from '@reduxjs/toolkit';

import appData from './slices/appData';

export const store = configureStore({
    reducer: {
        appData,
    },
})