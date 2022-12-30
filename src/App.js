import "./styles.css";
import React, { useState } from "react";
const travelDb = {
  budgetFriendly: [
    {
      name: "Croatia 🇭🇷",
      Description:
        "Republic of Croatia is a country at the crossroads of Central and Southeast Europe. Its sole coast is on the Adriatic Sea",
      rating: "Rating:4.5/5"
    },
    {
      name: "Czech Republic 🇨🇿 ",
      Description:
        "The Czech Republic or simply Czechia is a landlocked country in Central Europe. Historically known as Bohemia,it is bordered by Austria to the south, Germany to the west, Poland to the northeast, and Slovakia to the southeast. The Czech Republic has a hilly landscape  with a mostly temperate continental and oceanic climate. The capital and largest city is Prague; other major cities and urban areas include Brno, Ostrava, Plzeň and Liberec.",
      rating: "Rating:4/5"
    }
  ],
  NaturalBeauty: [
    {
      name: "Switzerland 🇨🇭",
      Description:
        "Switzerland is known for its mountains (Alps in the south, Jura in the northwest) but it also has a central plateau of rolling hills, plains, and large lakes. The highest point is Dufourspitze at 4,634 m (15,203 ft) while Lake Maggiore is only 195 m (636 ft) above sea level, and the temperate climate varies greatly with altitude.",
      rating: "Rating:4.7/5"
    },
    {
      name: "Austria 🇦🇹",
      Description:
        "Austria is a small landlocked country right in the heart of Europe bordered by Czech Republic, Germany, Hungary, Italy, Liechtenstein, Slovakia, Slovenia and Switzerland.The landscape is mountainous with the Alps running right through the country and peaks rising up to over 3,500 metres. Almost half of Austria is forested while the other half is mainly lush green grassland.",
      rating: "Rating:4.5/5"
    }
  ],
  PartyLocations: [
    {
      name: "Amesterdam 🇳🇱 ",
      Description:
        "conic canals, centuries-old townhomes, cobblestone lanes and flower-adorned bridges. Amsterdam is as pretty as a postcard with charm in spades. It's also one of the rare places that attracts history buffs, luxury-minded travelers, couples seeking romance and backpackers alike.",
      rating: "Rating:4.9/5"
    },
    {
      name: "Berlin 🇩🇪",
      Description:
        "Berlin is a place of stark contrasts. On one hand, reminders of its turbulent past are everywhere. But it's also a modern megalopolis—that's geographically nine times bigger than Paris—with exciting new attractions and an inherent subversiveness. This juxtaposition makes it a destination unlike any other.",
      rating: "Rating:4/5"
    },
    {
      name: "Barcelona 🇪🇸",
      Description:
        "Barcelona sited between the sea and the mountains, has found a formidable balance: a foot in the traditional things and the other in the avant-garde. Barcelona has the reputation of being the most cosmopolitan, modern and avant-garde city in Spain and it has renewed for the 1992 Olympic Games.",
      rating: "Rating:3.7/5"
    }
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
              <div style={{ fontSize: "smaller" }}> {loc.Description} </div>
              <div style={{ fontSize: "smaller" }}> {loc.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
