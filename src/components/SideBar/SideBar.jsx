import React from "react";

import Button from "../Button/Button.jsx";
import AjaxSearch from "../AjaxSearch/AjaxSearch.jsx";

import st from "./SideBar.module.scss";

const categ = ["фильмы", "сериалы", "аниме", "мультфильмы"];

function SideBar({ children, isOpen, onClose }) {
  const sbref = React.useRef();

  isOpen && sbref.current?.classList.add("open");

  function closeHandler() {
    sbref.current?.classList.remove("open");
    onClose();
  }

  isOpen && sbref.current && sbref.current.classList.add(st.open);
  !isOpen && sbref.current && sbref.current.classList.remove(st.open);
  return (
    <div className={st.sidebar}>
      {isOpen && <div className={st.backplate} onClick={closeHandler} />}
      <div ref={sbref} className={st.sbContainer}>
        <button className={st.closeBtn} onClick={closeHandler}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <Button>Войти</Button>
        <AjaxSearch />
        {children && (
          <ul className={st.sblist}>
            {categ.map((el, i) => (
              <li className={st.sbitem} key={el + i}>
                <div className={st.sbitemTitle} key={el + i}>
                  {el}
                </div>
                <ul className={st.sbSublist}>
                  {children.map((subel, i) => (
                    <li className={st.sbSubitem} key={subel + i}>
                      <a href="#" className={st.sbLink}>
                        {subel}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SideBar;
