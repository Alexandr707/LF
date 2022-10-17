import React from "react";
import st from "./CheckBox.module.scss";

function CheckBox({ Label = "", ...props }) {
  const ref = React.useRef();

  function checkHandle() {
    if (ref.current) {
      ref.current.checked = ref.current.checked ? false : true;
    }
  }
  return (
    <label className={st.fbCheck} onClick={checkHandle}>
      <input ref={ref} type="CheckBox" className={st.fbInput} {...props} />
      <span className={st.fbIcon}></span>
      {Label}
    </label>
  );
}

export default CheckBox;
