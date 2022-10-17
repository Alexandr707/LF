import React from "react";

import st from "./Afisha.module.scss";

function Afisha({ url, name }) {
  return (
    <div className={st.afisha}>
      <div className={st.afishaContainer}>
        <img src={url} alt={name} />
      </div>
    </div>
  );
}

export default Afisha;
