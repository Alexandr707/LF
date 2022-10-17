import React from "react";

import getTimeFromSeconds from "../../modules/getTimeFromSeconds.js";
import PlayerContext from "../Player/PlayerContext.jsx";

import st from "./TrackBar.module.scss";

function TrackBar() {
  const { context, changeTime } = React.useContext(PlayerContext);
  const { currentTime, fullTime } = context;

  const scurrent = getTimeFromSeconds(currentTime);
  const sfull = getTimeFromSeconds(fullTime);
  const trackOffset = currentTime / fullTime;

  const [pto, setPTo] = React.useState(null);

  function trackClick(e) {
    const track = e.target;

    if (track.classList.contains(st.ptrack_full) && fullTime) {
      e.stopPropagation();

      const { left, width } = track.getBoundingClientRect();
      const time = ((e.pageX - left) / width) * fullTime;
      console.log(time);
      changeTime(time);
    }
  }

  function trackMove(e) {
    const track = e.target;

    if (track.classList.contains(st.ptrack_full) && fullTime) {
      const { left, width } = track.getBoundingClientRect();

      const to = (e.pageX - left) / width;
      setPTo(to);
    }
  }

  return (
    <>
      <span className={st.ptime}>{scurrent}</span>
      <div className={st.ptrack}>
        <div
          className={st.ptrack_full}
          onClick={trackClick}
          onMouseMove={trackMove}
          onMouseLeave={() => setPTo(null)}
        />
        <div className={st.ptrack_current} style={{ width: trackOffset * 100 + "%" }} />
        <div className={st.ptrack_to} style={{ width: pto ? pto * 100 + "%" : 0 }} />
      </div>
      <span className={st.ptime}>{sfull}</span>
    </>
  );
}

export default TrackBar;
