import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from "redux-persist";
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: 'auth',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

