import React from "react";

import st from "./Button.module.scss";

function Button({ children, name = "", ...props }) {
  return (
    <button className={st.fbBtn} {...props}>
      {children || name}
    </button>
  );
}

export default Button;
