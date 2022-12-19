import "./styles.css";
import React, { useState } from "react";
const travelDb = {
  budgetFriendly: [
    { name: "Croatia", rating: "4.5/5" },
    { name: "Czech Republic", rating: "4/5" }
  ],
  NaturalBeauty: [
    { name: "Switzerland", rating: "4.7/5" },
    { name: "Austria", rating: "4.5/5" }
  ],
  PartyLocations: [
    { name: "Amesterdam", rating: "4.9/5" },
    { name: "Berlin", rating: "4/5" },
    { name: "Barcelona", rating: "3.7/5" }
  ]
};

export default function App() {
  const [type, settype] = useState("budgetFriendly");
  function typeClickHandler(type) {
    settype(type);
  }

  return (
    <div className="App">
      <h1> 🌍 Travel Advisor </h1>
      <p>Checkout my recommendations for your next trip to Europe!</p>

      <div>
        {Object.keys(travelDb).map((type) => (
          <button
            onClick={() => typeClickHandler(type)}
            style={{
              background: "yellow",
              borderRadius: "1rem",
              padding: "1rem",
              border: "6px solid yellowgreen",
              margin: "1rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ margin: "2rem 5 rem", marginBottom: "2rem" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDb[type].map((loc, id) => (
            <li
              key={id}
              style={{
                margin: "auto",
                background: "green",
                borderRadius: "1rem",
                padding: "1rem",
                border: "6px solid yellowgreen"
              }}
            >
              <div style={{ fontSize: "larger" }}> {loc.name} </div>
              <div style={{ fontSize: "smaller" }}> {loc.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
