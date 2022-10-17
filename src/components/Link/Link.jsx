import React from "react";

import st from "./Link.module.scss";

function Link({ icon, children, ...props }) {
  return (
    <a className={st.fLink} {...props}>
      {icon && <span className={st.fLinkIcon}>{icon}</span>}
      {children}
    </a>
  );
}

export default Link;
