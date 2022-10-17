import React from "react";

import IconButton from "../IconButton/IconButton.jsx";

import * as icons from "./icons.jsx";
import PlayerContext from "../Player/PlayerContext.jsx";
import TrackBar from "../TrackBar/TrackBar.jsx";
import st from "./PlaeyerPanel.module.scss";

function PlayerPanel() {
  const { context } = React.useContext(PlayerContext);
  const { isPlay, isMouseMove } = context;

  const panelStyle = [st.pContainer];

  (!isPlay || isMouseMove) && panelStyle.push(st.pContainer_visible);

  return (
    <div className={st.playerPanel}>
      <div className={panelStyle.join(" ")}>
        <IconButton icon={icons.iplay} />
        <IconButton icon={icons.ivolume} />
        <div className={st.ptrackbar}>
          <TrackBar />
        </div>
        <IconButton icon={icons.ihd} />
        <IconButton icon={icons.igear} />
        <IconButton icon={icons.ifullScreen} />
      </div>
    </div>
  );
}

export default PlayerPanel;
