import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "learnung react" },
  { id: "q2", author: "andrea", text: "test 01" },
  { id: "q3", author: "danela", text: "I love her air" },
  { id: "q4", author: "manuel", text: "Create a new Quote" },
  { id: "q5", author: "lusiana", text: "Your big ass here" },
  { id: "q6", author: "max", text: "learnung react" },
];

function QuoteDetail(props) {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={"/quotes/:id"} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={"/quotes/:id/comments"}>
        <Comments />
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}`}>
            Close Comments
          </Link>
        </div>
      </Route>
    </>
  );
}

export default QuoteDetail;
