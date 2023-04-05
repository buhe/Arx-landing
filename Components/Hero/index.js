import Button from "../Button";
import style from "./style.module.css";
import Image from "next/image";
import image1 from "../../public/img/img-1.png";
import image2 from "../../public/img/img-2.png";
import image3 from "../../public/img/img-3.png";

export default function Hero() {
  return (
    <div>
      <div className={style.hero} id="home">
        <div className={style.col_1}>
          <div>
            <h1>
              GPT
              <br />
              Apple 🖥️ & 📱
              <br />
              <u>Client</u>
            </h1>
            <Button text="Start Now" icon="Send" />
          </div>
        </div>
        <div className={style.col_2}>
          <div>
            <Image className={style.hero_image} src={image1} />
            <Image className={style.hero_image} src={image2} />
          </div>
          <Image className={style.hero_image} src={image3} />
        </div>
      </div>
    </div>
  );
}
