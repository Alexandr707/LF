import React from "react";

import st from "./Comment.module.scss";

function Comment({ comment, isReply }) {
  const [comRating, setRating] = React.useState(comment.rating);
  const ratingStr = comRating > 0 ? "+" + comRating : comRating < 0 ? comRating : "0";

  function statsIconClick(e) {
    const target = e.target;
    const statsBlock = target.closest("." + st.commentStat);

    if (statsBlock && !statsBlock.classList.contains("select")) {
      if (target.classList.contains("fa-thumbs-up")) {
        setRating((prev) => prev + 1);
        target.classList.add(st.apple);
        statsBlock.classList.add("select");
      }
      if (target.classList.contains("fa-thumbs-down")) {
        setRating((prev) => prev - 1);
        target.classList.add(st.red);
        statsBlock.classList.add("select");
      }
    }
  }

  return (
    <li className={[st.commentItem, isReply ? st.replyItem : ""].join(" ")}>
      <div className={st.commentAvatar}>
        <img src={comment.imageURL} alt={comment.nickname} />
      </div>
      <div className={st.commentContainer}>
        <div className={st.commentHeader}>
          <span className={st.commentNickname}>{comment.nickname}</span>
          <span className={st.commetnDate}>{comment.date}</span>
        </div>
        <div className={st.commentData}>{comment.content}</div>
        <div className={st.commentFooter}>
          <div
            className={[st.commentStat, comRating && comRating > 0 ? st.apple : st.red].join(" ")}
            onClick={statsIconClick}
          >
            <span className={st.commentIcon}>
              <i className="fa-solid fa-thumbs-up"></i>
            </span>
            {ratingStr}
            <span className={st.commentIcon}>
              <i className="fa-solid fa-thumbs-down"></i>
            </span>
          </div>
          <button className={st.commentReply}>Ответить</button>
        </div>
      </div>
      <ul className={st.replyContainer}>
        {comment.replyes &&
          comment.replyes.length &&
          comment.replyes.map((el, i) => <Comment comment={el} key={el.nickname + i} isReply />)}
      </ul>
    </li>
  );
}

export default Comment;
