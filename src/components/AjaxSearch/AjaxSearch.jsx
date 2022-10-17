import React from "react";

import st from "./AjaxSearch.module.scss";

function AjaxSearch(props) {
  return (
    <form id="quickSearch" method="post">
      <input type="text" className={st.ajax_search} placeholder="Введите точное название (без ошибок!)" {...props} />
      <button type="submite" className={st.searchBtn}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default AjaxSearch;
