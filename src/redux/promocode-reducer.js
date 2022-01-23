import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { notePromocode, calcBonus } from "./promocode-action";

const promocodeReducer = createReducer("", {
  [notePromocode]: (_, action) => action.payload,
});

const bonusReducer = createReducer("", {
  [calcBonus]: (_, action) => action.payload,
});

export const reducer = combineReducers({
  promocode: promocodeReducer,
  bonus: bonusReducer,
});
