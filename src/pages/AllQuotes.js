import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "learnung react" },
  { id: "q2", author: "andrea", text: "test 01" },
  { id: "q3", author: "danela", text: "I love her air" },
  { id: "q4", author: "manuel", text: "Create a new Quote" },
  { id: "q5", author: "lusiana", text: "Your big ass here" },
  { id: "q6", author: "nicole", text: "una vez donel trump" },
];

function AllQuotes(props) {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
