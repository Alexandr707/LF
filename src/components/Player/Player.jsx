import React from "react";
import ReactPlayer from "react-player";

import Tabs from "../Tabs/Tabs.jsx";
import Link from "../Link/Link.jsx";
import RectCheckBox from "../RectCheckBox/RectCheckBox.jsx";
import st from "./Player.module.scss";

import debounce from "../../modules/debounce.js";
import SocialLink from "../SocialLink/SocialLink.jsx";

function Player({ url }) {
  const [currentTab, setTab] = React.useState(0);
  const [isLightOff, setLightOff] = React.useState(false);

  const fvideo = React.useRef();
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [isPlay, setPlay] = React.useState(false);
  const [isMouseMove, setMouseMove] = React.useState(false);

  const delayFunc = React.useMemo(() => {
    return debounce(
      () => {
        setMouseMove(false);
      },
      1000,
      { trailing: true }
    );
  });

  function videoClickHandler(e) {
    setPlay((prev) => !prev);
  }

  React.useEffect(() => {
    if (fvideo.current) {
      fvideo.current.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("resize", resizeHandler);

      const rect = fvideo.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
    }

    return () => {
      fvideo.current.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function mouseMoveHandler() {
    setMouseMove(true);
    delayFunc();
  }

  function resizeHandler() {
    const rect = fvideo.current.getBoundingClientRect();
    setWidth(rect.width);
    setHeight(rect.height);
  }

  return (
    <div className={st.fPlayer}>
      {isLightOff && <div className={st.fPlayerBackplate} />}
      <div className={st.fPlayerContainer}>
        <div className={st.topBar}>
          <Tabs tabs={["Смотреть онлайн", "Плеер 2"]} current={currentTab} onChange={setTab} />
          <RectCheckBox onChange={() => setLightOff((prev) => !prev)}>Свет</RectCheckBox>
          <div className={st.fLinksBlock}>
            <Link icon={<i className="fa-regular fa-heart" />}>Добавить в закладки</Link>
            <Link icon={<i className="fa-solid fa-triangle-exclamation" />}>Есть жалоба?</Link>
          </div>
        </div>
        <div ref={fvideo} className={st.fVideo} onClick={videoClickHandler}>
          <ReactPlayer
            url={url}
            width={width}
            height={height}
            playing={isPlay}
            controls
            style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
          />
        </div>
        <div className={st.fSocial}>
          <SocialLink bgcolor="#4B6BAF" href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </SocialLink>
          <SocialLink bgcolor="#5075A5" href="#">
            <i className="fa-brands fa-vk"></i>
          </SocialLink>
          <SocialLink bgcolor="#FC6D00" href="#">
            <i className="fa-brands fa-odnoklassniki"></i>
          </SocialLink>
          <SocialLink bgcolor="#2DAAE1" href="#">
            <i className="fa-brands fa-twitter"></i>
          </SocialLink>
          <SocialLink bgcolor="#5682A3" href="#">
            <i className="fa-brands fa-telegram"></i>
          </SocialLink>
        </div>
      </div>
    </div>
  );
}

export default Player;
