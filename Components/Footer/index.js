import style from "./style.module.css";
import itemLinkFooter from "./itemLinkFooter";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_item}>
        <div>
          <div>
            <img src="/img/logo.svg" />
            <h2>Arx</h2>
          </div>
          <p>
            Reiciendis et at rerum alias qui. Dolores sit quisquam qui debitis
            eum sint sapiente corporis labore. Error itaque fugit laudantium
            molestias voluptas debitis consequatur ad.
          </p>
        </div>
        <div>
          {itemLinkFooter.map((item) => (
            <div key={item.id}>
              <h4>
                <u>{item.title}</u>
              </h4>
              <ul>
                <li>
                  <a className={style.footer_link} href="">
                    {item.link1}
                  </a>
                </li>
                <li>
                  <a className={style.footer_link} href="">
                    {item.link2}
                  </a>
                </li>
                <li>
                  <a className={style.footer_link} href="">
                    {item.link3}
                  </a>
                </li>
                <li>
                  <a className={style.footer_link} href="">
                    {item.link4}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={style.footer_terms}>
        <p>Copyright © 2022 Arx</p>
        <p>Terms and Conditions - Privacy Policy</p>
      </div>
    </div>
  );
}
