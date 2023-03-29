import style from "./style.module.css";
import Image from "next/image";

export default function Button({ text, icon }) {
  return (
    <button className={style.btn}>
      {text} &nbsp; <Image src={`/img/${icon}.svg`} width={24} height={24} />
    </button>
  );
}
