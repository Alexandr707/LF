import React from "react";

import RangeSearchBar from "../RangeSearchBar/RangeSearchBar.jsx";
import CheckBox from "../CheckBox/CheckBox.jsx";
import Button from "../Button/Button.jsx";

import info from "./info.js";
import FilmInfo from "../FilmInfo/FilmInfo.jsx";
import FilmCard from "../FilmCard/FilmCard.jsx";
import Player from "../Player/Player.jsx";

// import mp4 from "../../assets/video/слайд_шоу.mp4";
import EmojiRating from "../EmojiRating/EmojiRating.jsx";
import CommentBlock from "../CommentBlock/CommentBlock.jsx";
import Recommendations from "../Recommendations/Recommendations.jsx";
import Footer from "../Footer/Footer.jsx";
import logo from "../../assets/lfblack.png";
import mcss from "./main.module.scss";

function Main() {
  const [year, setYear] = React.useState({});
  const [rate, setRate] = React.useState({});
  const [films, setFilms] = React.useState(false);
  const [serials, setSerials] = React.useState(false);
  const [cartoons, setCartoons] = React.useState(false);
  const [anime, setAnime] = React.useState(false);
  const [openBtn, setOpen] = React.useState(false);

  return (
    <div className={mcss.mainContainer}>
      <div className={mcss.speedbar}>
        <span className={mcss.speedItem}>LORDFILMS</span>
        &nbsp;»&nbsp;
        <span className={mcss.speedItem}>Фильмы</span>
        &gt;&gt; Двойное удовольствие (2022)
      </div>
      <div className={mcss.fmain}>
        <div className={mcss.fmainGrid}>
          {/* left */}
          <div className={mcss.fLeft}>
            <div className={mcss.fLeftContainer}>
              <FilmInfo {...info} />
              <FilmCard {...info} />
            </div>
            <hr className={mcss.hrMain} />
            <div className={mcss.fSubtitle}>{"Смотреть Двойное удовольствие в HD 720-1080 хорошем качестве"}</div>
          </div>
          {/* right */}
          <div className={[mcss.fRight, openBtn ? mcss.expand : ""].join(" ")}>
            <div className={mcss.openSearch}>
              <Button onClick={() => setOpen((prev) => !prev)}> Поиск по параметрам</Button>
            </div>
            <div className={mcss.expandBlock}>
              <div className={mcss.fRightTitle}>Поиск по параметрам</div>
              <form action="#" method="post" className={mcss.filterBox}>
                <div className={mcss.fbSearch}>
                  <input
                    type="text"
                    placeholder="Выберите жанр"
                    className={mcss.fbInput}
                    name="category"
                    autoComplete="off"
                  />
                </div>
                <div className={mcss.fbSearch}>
                  <input
                    type="text"
                    placeholder="Выберите страну"
                    className={mcss.fbInput}
                    name="country"
                    autoComplete="off"
                  />
                </div>
                <div className={mcss.fbSearchInputs}>
                  <RangeSearchBar min={2000} max={2020} step={1} getRange={setYear} info="Год" isVisible={openBtn} />
                  <RangeSearchBar min={0} max={10} step={1} getRange={setRate} info="КП" isVisible={openBtn} />
                </div>

                <div className={mcss.fbSearchCheckboxs}>
                  <CheckBox Label="Фильмы" onChange={() => setFilms((prev) => !prev)} />
                  <CheckBox Label="Сериалы" onChange={() => setSerials((prev) => !prev)} />
                  <CheckBox Label="Мультфильмы" onChange={() => setCartoons((prev) => !prev)} />
                  <CheckBox Label="Аниме" onChange={() => setAnime((prev) => !prev)} />
                </div>

                <Button name="поиск" />
                <Button name="очистить" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Player url={""} />
      <EmojiRating />
      <CommentBlock />
      <Recommendations />
      <Footer logo={logo} logoWidth={180} logoHeight={70}>
        Все видео взяты из открытых источников. Если обнаружите материал, который нарушает авторское право - пишите на
        почту, сразу удалим! Контакты для жалоб: <b>abuse@lordfilm.lu</b>
      </Footer>
    </div>
  );
}

export default Main;
