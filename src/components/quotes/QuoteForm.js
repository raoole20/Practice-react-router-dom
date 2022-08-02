import { useRef, useState } from "react";
import { useHistory, Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {

  const [isEntering, setEntering] = useState(false)
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const history = useHistory();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    history.push("/quotes");
  }

  const isFocus = ()=>{
    setEntering(true)
  }
  const isSubmit = ()=>{
    setEntering(false)
  }

  return (
    <>
      <Prompt when={isEntering} message={(location) => "are you sure want to leave this page? The information will be lose"}/>
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler} onFocus={isFocus}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={isSubmit}>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
