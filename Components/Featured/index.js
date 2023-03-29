import style from "./style.module.css";

import itemFeatured from "./itemFuatered";

export default function Featured() {
  return (
    <div className={style.featured} id="featured">
      {itemFeatured.map((item) => (
        <div className={style.box_featured} key={item.id}>
          <img src={`/img/${item.image}`} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
