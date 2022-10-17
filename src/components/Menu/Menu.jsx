import React from "react";

import st from "./Menu.module.scss";

function Menu({ children, anchor, onClose, isVisible, ...props }) {
  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const menuRef = React.useRef();

  if (menuRef.current) {
    const rect = menuRef.current.getBoundingClientRect();
    if (left + rect.width > document.documentElement.offsetWidth && !menuRef.current.lpchange) {
      setLeft(left + rect.width - document.documentElement.offsetWidth);
      menuRef.current.lpchange = true;
      console.log(menuRef.current);
      console.log(left, rect.width);
    }
  }

  React.useEffect(() => {
    if (anchor && isVisible) {
      const rect = anchor.getBoundingClientRect();
      setLeft(rect.left);
      setTop(rect.bottom);
    }
  }, [anchor]);

  if (!anchor || !isVisible) {
    return null;
  }

  return (
    <div className={st.menu}>
      <div
        ref={menuRef}
        className={st.menuContainer}
        style={{ left: left + "px", top: top + "px" }}
        onMouseLeave={onClose}
        onScroll={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className={st.menuList}>
          {children &&
            children.map((ch, i) => (
              <li className={st.menuItem} key={ch + i}>
                <a href="#" className={st.menuItem_link}>
                  {ch}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
