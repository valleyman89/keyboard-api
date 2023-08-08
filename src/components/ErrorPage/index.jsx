import React from "react";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <aside>
      <div className="emoji">😕</div>
      <h1>No Definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at a later time or head to the web
        instead.
      </p>
    </aside>
  );
};

export default ErrorPage;
