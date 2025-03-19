import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import buttonConfigSlice from "./reducer/buttonReducer";
import fontConfigSlice from "./reducer/fontReducer";
import tableSlice from "./reducer/tableReducer";
import themeColorSlice from "./reducer/themeColorReducer";

const appReducer = combineReducers({
  themeColorData: themeColorSlice,
  fontData: fontConfigSlice,
  buttonData: buttonConfigSlice,
  tableConfigData: tableSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
