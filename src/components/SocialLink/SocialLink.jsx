import React from "react";

import st from "./SocialLink.module.scss";

function SocialLink({ children, bgcolor = "transparent", ...props }) {
  return (
    <a className={st.socialLink} style={{ backgroundColor: bgcolor }} {...props}>
      {children}
    </a>
  );
}

export default SocialLink;
