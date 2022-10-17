import React from "react";

import logo from "../../assets/logo.webp";
import list from "./menulist.js";

import Menu from "../Menu/Menu.jsx";
import IconButton from "../IconButton/IconButton.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import AjaxSearch from "../AjaxSearch/AjaxSearch.jsx";
import styles from "./header.module.scss";

function Header({ menuItems, ...props }) {
  const [anchor, setAnchor] = React.useState(null);
  const [menuList, setList] = React.useState([]);
  const [isMenuVisible, setMenuVisible] = React.useState(false);
  const [isSideOpen, setSideOpen] = React.useState(false);

  React.useEffect(() => {
    setList(list);
  }, []);

  function hoverHandler(e) {
    setAnchor(e.target);
    setMenuVisible(true);
  }

  function closeHandler() {
    setAnchor(null);
    setMenuVisible(false);
  }

  function closeSidebar() {
    setSideOpen(false);
  }

  return (
    <>
      <div className={styles.header}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </a>
        <ul className={styles.menuNav}>
          {menuItems &&
            Array.isArray(menuItems) &&
            menuItems.map((item) => (
              <li key={item}>
                <a href="#" className={styles.menuItem} onMouseEnter={hoverHandler}>
                  {item}
                </a>
              </li>
            ))}
        </ul>
        <div className={styles.search}>
          <AjaxSearch />
        </div>
        <button className={styles.loginBtn}>Войти</button>
        <Menu anchor={anchor} onClose={closeHandler} isVisible={isMenuVisible}>
          {menuList}
        </Menu>
        <div className={styles.menubtn}>
          <IconButton
            icon={<i className="fa-solid fa-bars" />}
            onClick={() => setSideOpen((prev) => !prev)}
            style={{ color: "black", fontSize: "24px", lineHate: "40px" }}
          />
        </div>
      </div>
      <SideBar isOpen={isSideOpen} onClose={closeSidebar}>
        {list}
      </SideBar>
    </>
  );
}

export default Header;
