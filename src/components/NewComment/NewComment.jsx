import React from "react";

import Button from "../Button/Button.jsx";
import Emoji from "../Emoji/Emoji.jsx";
import st from "./NewComment.module.scss";

function NewComment() {
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [textarea, setTextarea] = React.useState("");
  const textareaRef = React.useRef();

  function texthandler(e) {
    setText(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function textareaHandler(e) {
    setTextarea(e.target.value);
  }

  function addEmoji(emoji) {
    setTextarea(textarea + emoji);
    textareaRef.current.focus();
  }

  return (
    <div className={st.formContainer}>
      <form className={st.newComment} action="#" method="POST" name="new comment">
        <input type="text" className={st.input} placeholder="Ваше имя" value={text} onChange={texthandler} />
        <input
          type="email"
          className={st.input}
          placeholder="Ваш e-mail (необязательно)"
          value={email}
          onChange={emailHandler}
        />
        <textarea
          ref={textareaRef}
          name="commentText"
          cols="30"
          rows="5"
          className={st.textarea}
          value={textarea}
          onChange={textareaHandler}
        ></textarea>
        <Emoji onClick={addEmoji} />
        <Button>Добавить комментарий</Button>
      </form>
    </div>
  );
}

export default NewComment;
