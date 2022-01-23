import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./promocode-reducer";

const store = configureStore({
  reducer,
});

export default store;
