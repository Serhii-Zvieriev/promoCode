import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { notePromocode, calcBonus, bgColorResult } from "./promocode-action";

const promocodeReducer = createReducer("", {
  [notePromocode]: (_, action) => action.payload,
});

const bonusReducer = createReducer("", {
  [calcBonus]: (_, action) => action.payload,
});

const bgColorReducer = createReducer("", {
  [bgColorResult]: (_, action) => action.payload,
});

export const reducer = combineReducers({
  promocode: promocodeReducer,
  bonus: bonusReducer,
  bgColor: bgColorReducer,
});
