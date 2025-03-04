import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import nameReducer from "./typeNameSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
    // LÄS I SEECHANGINGNAME.TSX, DÄR SER MAN HUR MAN ANVÄNDER
    //  USESELECTOR FÖR O ANVÄNDA SIG AV EN HOOK FÖR NÅ STATE
    //  HÄR INNE!
  },
});

// va gör den?
export type RootState = ReturnType<typeof store.getState>;
export default store;
