import React from "react";

import emoji from "./emojiStat.js";
import st from "./EmojiRating.module.scss";

function EmojiRating({ url }) {
  const [emojiStat, setStat] = React.useState([]);

  React.useEffect(() => {
    setStat(emoji);
  }, []);
  return (
    <div className={st.emojiRating}>
      <div className={st.emojiContainer}>
        {emojiStat &&
          emojiStat.map((em, i) => (
            <a href={url || "#"} className={st.emojiLink} key={em.name + i}>
              {em.emoji}
              <div className={st.emojiStat}>{em.value}</div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default EmojiRating;
