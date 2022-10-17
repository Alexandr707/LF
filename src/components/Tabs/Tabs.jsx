import React from "react";

import st from "./Tabs.module.scss";

function Tabs({ tabs = [], current = 0, onChange = Function.prototype }) {
  const [currentTab, setTab] = React.useState(current);
  const activeTabStyle = [st.tabItem, st.tabActive].join(" ");

  function clickHandler(index) {
    if (index !== currentTab) {
      setTab(index);
      onChange(index);
    }
  }

  return (
    <div className={st.tabsContainer}>
      {tabs.length &&
        tabs.map((item, i) => (
          <div
            className={i === currentTab ? activeTabStyle : st.tabItem}
            key={item}
            onClick={(e) => {
              clickHandler(i);
            }}
          >
            {item}
          </div>
        ))}
    </div>
  );
}

export default Tabs;
