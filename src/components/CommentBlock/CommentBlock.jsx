import React from "react";

import comments from "./comments";
import Comment from "../Comment/Comment";
import NewComment from "../NewComment/NewComment";
import st from "./CommentBlock.module.scss";

function CommentBlock() {
  return (
    <div className={st.comments}>
      <div className={st.commentsContainer}>
        <div className={st.commentsTitle}>
          Оставь свой отзыв&nbsp;
          <span>
            <i className="fa-solid fa-comments"></i>
          </span>
        </div>
        <div className={st.commentsFlex}>
          <ul className={`${st.commentsList} ${st.flexItem}`}>
            {comments.map((com, i) => (
              <Comment comment={com} key={com.nickname + i} />
            ))}
          </ul>

          <div className={st.flexItem}>
            <NewComment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBlock;
