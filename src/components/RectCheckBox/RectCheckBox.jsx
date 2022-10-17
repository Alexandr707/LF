import React, { Children } from "react";

import st from "./RectCheckBox.module.scss";

function RectCheckBox({ children, ...props }) {
  return (
    <label className={st.RCheck}>
      <input type="CheckBox" className={st.RCInput} {...props} />
      <span className={st.RCIcon} />
      {children}
    </label>
  );
}

export default RectCheckBox;
