import style from "./Result.module.css";

export function Result({ bonus }) {
  return <div className={style.div}>{bonus}</div>;
}
