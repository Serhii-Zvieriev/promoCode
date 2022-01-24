import { useSelector } from "react-redux";

import { getBgColor } from "../../redux/promocode-selectors";
import style from "./Result.module.css";

export function Result({ bonus }) {
  const bgColor = useSelector(getBgColor);
  return (
    <div style={{ backgroundColor: bgColor }} className={style.div}>
      {bonus}
    </div>
  );
}
