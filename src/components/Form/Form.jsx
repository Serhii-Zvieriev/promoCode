import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  notePromocode,
  calcBonus,
  bgColorResult,
} from "../../redux/promocode-action";
import { calculateBonus, getRandomColor } from "../../utils/fn";
import style from "./Form.module.css";

export function Form() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  let resBgColor = "";

  const handleChangeInput = ({ target }) => {
    setValue(target.value);
    dispatch(notePromocode(target.value));
  };

  const resetForm = () => {
    setValue("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(calcBonus(calculateBonus(value)));
    resetForm();
    // resBgColor = getRandomColor();
    dispatch(bgColorResult(getRandomColor()));
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label}>Enter promocode</label>
        <input
          onChange={handleChangeInput}
          value={value}
          type="text"
          name="promocode"
          className={style.input}
          required
        />

        <button className={style.button} type="submit">
          Add promocode
        </button>
      </form>
    </>
  );
}
