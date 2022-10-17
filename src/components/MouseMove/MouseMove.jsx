import React from "react";
import st from "./MouseMove.module.scss";

function MouseMove({ getPosition, ...props }) {
  React.useEffect(() => {
    document.addEventListener("mousemove", moveHandler);
    return () => {
      document.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  function moveHandler(e) {
    const { x, y } = e;
    getPosition({ x, y });
  }

  return <div className={st.backplate} {...props}></div>;
}

export default MouseMove;
