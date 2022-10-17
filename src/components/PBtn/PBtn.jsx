import React from "react";
import PlayerContext from "../Player/PlayerContext.jsx";

import { playIcon, pauseIcon } from "./icons.jsx";
import st from "./PBtn.module.scss";

function PBtn({ children, ...props }) {
  const { context } = React.useContext(PlayerContext);
  const { isPlay, isMouseMove } = context;

  const btnStyle = [st.PBtn];

  isPlay && btnStyle.push(st.PBtn_play);
  (!isPlay || isMouseMove) && btnStyle.push(st.PBtn_visible);

  return (
    <button className={btnStyle.join(" ")} {...props}>
      {isPlay ? pauseIcon : playIcon}
    </button>
  );
}

export default PBtn;
