import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import st from "./style/app.module.scss";
import Afisha from "./components/Afisha/Afisha.jsx";
import afishaUrl from "./assets/afisha-bg.jpg";

function App() {
  return (
    <div className={st.App}>
      <div className={st.appContainer}>
        <Afisha url={afishaUrl} name={"SpiderMan"} />
        <div className={st.zind_1}>
          <Header menuItems={["фильмы", "сериалы", "мультфильмы", "аниме"]} />
          <Main />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
