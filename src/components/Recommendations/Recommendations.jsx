import React from "react";

import bb from "../../assets/BlackBoy.jpg";

import st from "./Recommendations.module.scss";

function Recommendations() {
  return (
    <div className={st.recommendations}>
      <div className={st.recomContainer}>
        <div className={st.recomTilte}>Смотрите также</div>
        <ul className={st.recomLinks}>
          <li className={st.recomLinkItem}>
            <div className={st.recitem}>
              <a href="#" className={st.link}>
                <div className={st.linkImage}>
                  <img src={bb} alt="" />
                </div>
                <div className={st.linkHoverPlate}>
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className={st.info}>
                  <div className={st.infoTitle}>Чудный мальчик (2010)</div>
                  <div className={st.infoStats}>
                    <span className={st.statsEL}>
                      <span className={st.orange}>kp</span>&nbsp;6.7
                    </span>
                    <span className={st.statsEL}>
                      <span className={st.yellow}>imdb</span>&nbsp;6.8
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className={st.recomLinkItem}>
            <div className={st.recitem}>
              <a href="#" className={st.link}>
                <div className={st.linkImage}>
                  <img src={bb} alt="" />
                </div>
                <div className={st.linkHoverPlate}>
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className={st.info}>
                  <div className={st.infoTitle}>Чудный мальчик (2010)</div>
                  <div className={st.infoStats}>
                    <span className={st.statsEL}>
                      <span className={st.orange}>kp</span>&nbsp;6.7
                    </span>
                    <span className={st.statsEL}>
                      <span className={st.yellow}>imdb</span>&nbsp;6.8
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className={st.recomLinkItem}>
            <div className={st.recitem}>
              <a href="#" className={st.link}>
                <div className={st.linkImage}>
                  <img src={bb} alt="" />
                </div>
                <div className={st.linkHoverPlate}>
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className={st.info}>
                  <div className={st.infoTitle}>Чудный мальчик (2010)</div>
                  <div className={st.infoStats}>
                    <span className={st.statsEL}>
                      <span className={st.orange}>kp</span>&nbsp;6.7
                    </span>
                    <span className={st.statsEL}>
                      <span className={st.yellow}>imdb</span>&nbsp;6.8
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className={st.recomLinkItem}>
            <div className={st.recitem}>
              <a href="#" className={st.link}>
                <div className={st.linkImage}>
                  <img src={bb} alt="" />
                </div>
                <div className={st.linkHoverPlate}>
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className={st.info}>
                  <div className={st.infoTitle}>Чудный мальчик (2010)</div>
                  <div className={st.infoStats}>
                    <span className={st.statsEL}>
                      <span className={st.orange}>kp</span>&nbsp;6.7
                    </span>
                    <span className={st.statsEL}>
                      <span className={st.yellow}>imdb</span>&nbsp;6.8
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className={st.recomLinkItem}>
            <div className={st.recitem}>
              <a href="#" className={st.link}>
                <div className={st.linkImage}>
                  <img src={bb} alt="" />
                </div>
                <div className={st.linkHoverPlate}>
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className={st.info}>
                  <div className={st.infoTitle}>Чудный мальчик (2010)</div>
                  <div className={st.infoStats}>
                    <span className={st.statsEL}>
                      <span className={st.orange}>kp</span>&nbsp;6.7
                    </span>
                    <span className={st.statsEL}>
                      <span className={st.yellow}>imdb</span>&nbsp;6.8
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className={st.recomLinkItem}>
            <div className={st.recitem}>
              <a href="#" className={st.link}>
                <div className={st.linkImage}>
                  <img src={bb} alt="" />
                </div>
                <div className={st.linkHoverPlate}>
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className={st.info}>
                  <div className={st.infoTitle}>Чудный мальчик (2010)</div>
                  <div className={st.infoStats}>
                    <span className={st.statsEL}>
                      <span className={st.orange}>kp</span>&nbsp;6.7
                    </span>
                    <span className={st.statsEL}>
                      <span className={st.yellow}>imdb</span>&nbsp;6.8
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Recommendations;
