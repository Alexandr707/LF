import React from "react";

import st from "./IconButton.module.scss";

function IconButton({ icon, ...props }) {
  return (
    <button className={st.iconButton} {...props}>
      {icon}
    </button>
  );
}

export default IconButton;
