import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice";
import privacySlice from "./privacySlice";

const store = configureStore({
  reducer:{
    counter : counterSlice.reducer,
    privacy : privacySlice.reducer
  }
});

export default store;