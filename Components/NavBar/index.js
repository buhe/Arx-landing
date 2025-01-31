import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <a href="">GPT</a>
        <Image src="/img/logo.svg" width={32} height={32} />
        <Image
          src="/img/menu.svg"
          width={32}
          height={32}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setOffCanvas(true);
          }}
        />
        <div
          className={`${style.canvas_menu} ${offCanvas ? style.active : ""}`}
        >
          <div className={style.close_icon}>
            <Image
              src="/img/close.svg"
              width={20}
              height={20}
              onClick={() => {
                setOffCanvas(false);
              }}
            ></Image>
          </div>
          <div className={style.canvas_content}>
            <div className={style.social}>
              <h4>Social</h4>
              <div>
                <p>
                  <img src="/img/Instagram.svg" width={20} height={20} />
                  <span>&nbsp; Instagram</span>
                </p>
                <p>
                  <img src="/img/Twitter.svg" width={20} height={20} />
                  <span>&nbsp; Twitter</span>
                </p>

                <p>
                  <img src="/img/Facebook.svg" width={20} height={20} />
                  <span>&nbsp; Facebook</span>
                </p>
              </div>
            </div>
            <div className={style.menu}>
              <h4>Menu</h4>
              <p>
                <a
                  href="#home"
                  onClick={() => {
                    setOffCanvas(false);
                  }}
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="#featured"
                  onClick={() => {
                    setOffCanvas(false);
                  }}
                >
                  Featured
                </a>
              </p>
              <p>
                <a
                  href="#projects"
                  onClick={() => {
                    setOffCanvas(false);
                  }}
                >
                  User Case
                </a>
              </p>
              <p>
                <a
                  href="#testimoni"
                  onClick={() => {
                    setOffCanvas(false);
                  }}
                >
                  Feedback
                </a>
              </p>
            </div>
          </div>
          <div className={style.email}>
            <p>Get in touch</p>
            <h2>
              <u>bugu1986@gmail.com</u>
            </h2>
          </div>
        </div>
      </nav>
    </>
  );
}
