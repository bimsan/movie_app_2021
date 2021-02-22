import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Chicken",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.farmersalmanac.com%2Fwp-content%2Fuploads%2F2013%2F07%2FFried-Chicken-Recipe-A215724545.jpg&f=1&nofb=1",
  },
  {
    name: "Ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1935139%2Fimages%2Fo-RAMEN-NUTRITION-INFORMATION-facebook.jpg&f=1&nofb=1",
  },
  {
    name: "Pizza",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F103437036%2Fimage.jpg&f=1&nofb=1",
  },
  {
    name: "Coke",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1162003%2Fthumbs%2Fo-GLASS-OF-COKE-facebook.jpg&f=1&nofb=1",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
