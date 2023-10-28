import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  //
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie has {movieRating} rating</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={"ffff"}
      messages={["Terrible", "Bad", "Good", "Okay", "Amazing"]}
      className="test"
    />
    <StarRating maxRating={5} size={24} color="red" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
