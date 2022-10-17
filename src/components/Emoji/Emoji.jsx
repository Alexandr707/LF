import React from "react";

import st from "./Emoji.module.scss";

const smiles = [
  "🙂",
  "😁",
  "🤣",
  "🙃",
  "😊",
  "😍",
  "😐",
  "😡",
  "😎",
  "🙁",
  "😩",
  "😱",
  "😢",
  "💩",
  "💣",
  "💯",
  "👍",
  "👎",
];

function Emoji({ onClick }) {
  function clickHandler(e) {
    if (e.target.localName === "span") {
      console.log(e.target.textContent);
      onClick(e.target.textContent);
    }
  }

  return (
    <div className={st.emojiContainer} onClick={clickHandler}>
      {smiles.map((em, i) => (
        <span className={st.emoji} key={em + i}>
          {em}
        </span>
      ))}
    </div>
  );
}

export default Emoji;
