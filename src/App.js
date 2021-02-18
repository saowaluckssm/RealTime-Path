import React, { useEffect, useState } from "react";
import axios from "axios";
// import stations from "./stations";
import Form from "./componants/Form";
import Header from "./componants/Header";
import Train from "./componants/Train";
import "./styles.css";

// const url = "https://path.api.razza.dev/v1/stations/journal_square/realtime";
// const goturl = "https://thronesapi.com/api/v2/Characters";

const App = () => {
  const defaultStation = "world_trade_center";
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(defaultStation);
  const [stationName, setStationName] = useState("World Trade Center");

  function addStation(trainName) {
    // console.log(trainName);
    if (query === defaultStation) {
      console.log("default-station");
      setQuery("");
      setStationName(trainName.label);
      setQuery(trainName.value);
    } else {
      console.log("selected-station");
      setQuery("");
      setQuery(trainName.value);
    }
  }

  useEffect(() => {
    const fetchItems = async () => {
      // console.log(query);
      const result = await axios(
        "https://path.api.razza.dev/v1/stations/" + query + "/realtime"
      );
      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    // setInterval(fetchItems, 5000);
    fetchItems();
    // return <Train isLoading={isLoading} items={items.upcomingTrains} />;
  });

  return (
    <div className="main">
      <Header />
      {/* <Form onAdd={(stationName) => setQuery(stationName)} /> */}
      <Form onAdd={addStation} />
      <div className="selected-station">
        <b>Station: </b> {stationName}
      </div>

      <Train isLoading={isLoading} items={items.upcomingTrains} />
    </div>
  );
};
export default App;
