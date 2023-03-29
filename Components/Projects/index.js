import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";

export default function Projects() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        image: "project-1.png",
        text: "Minimalism & Modern",
      },
      {
        id: 2,
        image: "project-2.png",
        text: "Beach ",
      },
      {
        id: 3,
        image: "project-3.png",
        text: "Bungalow & Modern",
      },
      {
        id: 4,
        image: "project-4.png",
        text: "Colonial & Modern",
      },
    ],
  });

  const [firstItemActive, setFirstItemActive] = useState(true);

  const toggleActive = (key) => {
    changeState({ ...appState, activeObject: appState.objects[key] });
  };
  return (
    <div className={style.section_projects} id="projects">
      <h1>
        <u>Projects</u>
      </h1>
      <div className={style.projects}>
        {appState.objects.map((item, key) => (
          <div
            className={`${style.project} ${
              appState.objects[key] == appState.activeObject ? style.active : ""
            }${key == 0 ? `${firstItemActive ? style.active : ""}` : ""}`}
            style={{ backgroundImage: `url(/img/${item.image})` }}
            key={key}
            onClick={() => {
              toggleActive(key);
              setFirstItemActive(false);
            }}
          >
            <h2>{item.text}</h2>
            <Button icon="Send" />
          </div>
        ))}
      </div>
    </div>
  );
}
