import React from "react";

import st from "./FilmInfo.module.scss";

function FilmInfo({ title, description, subtitle, characters = [], acters = [], imdb }) {
  return (
    <div className={st.fInfo}>
      <div className={st.fTitle}>{title}</div>
      <div className={st.fDescription}>{description}</div>
      <hr className={st.hrSeparator} />
      <div className={st.fTitle}>{subtitle}</div>
      <ul className={st.fCharacters}>
        {characters.length &&
          characters.map((ch) => (
            <li className={st.fCItem} key={ch.name}>
              <span className={st.fCItem_name}>{ch.name}:&nbsp;</span>
              <span className={st.fCItem_value}>{ch.value}</span>
            </li>
          ))}
        {acters.length && (
          <li className={st.fCItem_acters}>
            {"Актеры: "}
            {acters.map((acter, i, arr) => (
              <span key={acter + i}>{acter + (i === arr.length - 1 ? "." : ", ")}</span>
            ))}
          </li>
        )}
      </ul>
      {imdb && <span className={st.imdb}>IMDB&nbsp;{imdb}</span>}
    </div>
  );
}

export default FilmInfo;
