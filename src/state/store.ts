import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './rootReducer';

export function createStore() {

    const store = configureStore({
        reducer: rootReducers,
    });

    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('./RootReducer', () => store.replaceReducer(rootReducers))
    // }

    return store;
}

export const store = createStore();