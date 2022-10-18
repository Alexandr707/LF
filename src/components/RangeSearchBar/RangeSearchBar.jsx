import React from "react";
import debounce from "../../modules/debounce.js";
import MouseMove from "../MouseMove/MouseMove.jsx";

import st from "./RangeSearchBar.module.scss";
import rangeSlice from "./rangeSlice.js";
const vars = {
  from: "from",
  to: "to",
};

function RangeSearchBar({ getRange, min = 0, max = 1, info = "", ...props }) {
  const [from, setFrom] = React.useState(0);
  const [to, setTo] = React.useState(1);
  const step = props.step || (max - min) * 0.1;
  const range = max - min;

  const [mPos, setPos] = React.useState({});
  const [isMoveable, setMoveable] = React.useState(false);

  const [type, setType] = React.useState("");

  const root = React.useRef();
  const [coord, setCoord] = React.useState({});

  root.current && console.log(root.current.style);

  const reszieHandler = debounce(
    () => {
      const rect = root.current?.getBoundingClientRect();
      console.log("resize", rect);
      setCoord(rect);
    },
    1000,
    { trailing: true }
  );

  React.useEffect(() => {
    window.addEventListener("resize", reszieHandler);
    reszieHandler();

    return () => {
      window.removeEventListener("resize", reszieHandler);
    };
  }, []);

  if (root.current && !root.current.hidden && coord.width === 0 && props.isVisible) {
    reszieHandler();
  }

  React.useEffect(() => {
    if (isMoveable) {
      const xstart = coord.left,
        xend = coord.right,
        xfrom = coord.left + coord.width * from,
        xto = coord.left + coord.width * to,
        x = mPos.x;

      if (type === vars.from) {
        const left = rangeSlice({ x, xstart, xend, range, xfrom, xto, step, type });
        setFrom(left);
      }

      if (type === vars.to) {
        const right = rangeSlice({ x, xstart, xend, range, xfrom, xto, step, type });
        setTo(right);
      }
    }
  }, [mPos]);

  function clickDown(t) {
    if (t === vars.from) {
      setType(vars.from);
    }

    if (t === vars.to) {
      setType(vars.to);
    }
    setMoveable(true);
  }

  function stopMove() {
    setMoveable(false);
    if (getRange) {
      getRange({
        start: min + min * from,
        end: min + min * to,
      });
    }
  }

  return (
    <div ref={root} className={st.rsb}>
      {isMoveable && <MouseMove getPosition={setPos} onMouseUp={stopMove} />}
      {root.current && (
        <span className={`${st.rsb_bar} ${st.rsb_backBar}`}>
          <span
            className={`${st.rsb_bar} ${st.rsb_frontBar}`}
            style={{
              left: 100 * from + "%",
              width: 100 * (to - from) + "%",
            }}
          ></span>
          <span
            className={`${st.rsb_dot} ${st.rsb_from}`}
            onMouseDown={() => {
              clickDown(vars.from);
            }}
            style={{ left: 100 * from + "%" }}
          >
            <span className={st.rsb_about}>{info + " " + (min + range * from)}</span>
          </span>
          <span
            className={`${st.rsb_dot} ${st.rsb_to}`}
            onMouseDown={() => {
              clickDown(vars.to);
            }}
            style={{ left: to ? (coord.width || 0) * to - 16 : 0 }}
          >
            <span className={st.rsb_about}>{info + " " + (min + range * to)}</span>
          </span>
        </span>
      )}
    </div>
  );
}

export default RangeSearchBar;
