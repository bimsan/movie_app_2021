import React from "react";

function Food({ fav }) {
  return <h1>I love {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!!!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="codes" />
      <Food fav="garaage" />
      <Food fav="chicken" />
    </div>
  );
}

export default App;
