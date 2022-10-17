import React from "react";

import st from "./Player.module.scss";

function PlayerContainer(ref) {
  return function ({ children, ...props }) {
    return (
      <div ref={ref} className={st.fVideo} {...props}>
        {children}
      </div>
    );
  };
}

export default PlayerContainer;
