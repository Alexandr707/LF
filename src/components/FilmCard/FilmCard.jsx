import React from "react";

import st from "./FilmCard.module.scss";

function FilmCard({ imageSRC, title, like, dislike }) {
  return (
    <div className={st.fCard}>
      <img className={st.fImage} src={imageSRC} alt={title} />
      <div className={st.fSocial}>
        <div className={st.fLike}>
          <span className={[st.fIcon, st.fIcon_left].join(" ")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
            </svg>
          </span>
          <span className={st.fSocialCount}>{like}</span>
        </div>

        <div className={st.fDislike}>
          <span className={[st.fIcon, st.fIcon_right].join(" ")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z" />
            </svg>
          </span>
          <span className={st.fSocialCount}>{dislike}</span>
        </div>

        <div className={st.likesRelation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            clipPathUnits={"objectBoundingBox"}
            className={st.svg}
          >
            <circle className={st.cBack} cx={50} cy={50} r={50} />
            <circle className={st.cBackStroke} cx={50} cy={50} r={40} strokeWidth={10} />
            <circle
              className={st.cBackStrokePer}
              cx={50}
              cy={50}
              r={40}
              strokeWidth={10}
              style={{ strokeDashoffset: 252 - (like / (like + dislike)) * 252 + "px" }}
            />
          </svg>
          {((like / (like + dislike)) * 10).toFixed(1)}
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
