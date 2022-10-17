import React from "react";

import st from "./Footer.module.scss";

function Footer({ children, logo, logoWidth, logoHeight }) {
  console.log(logo);
  return (
    <div className={st.footer}>
      <div className={st.footerContainer}>
        <div className={st.footerContent}>
          {logo && (
            <div
              className={st.logo}
              style={{ backgroundImage: `url(${logo})`, width: logoWidth + "px", height: logoHeight + "px" }}
            ></div>
          )}
          <p className={st.footerDesr}>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
