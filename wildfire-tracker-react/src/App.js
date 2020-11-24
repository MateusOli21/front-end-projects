import { useState, useEffect } from "react";

import Map from "./components/Map";
import Loader from "./components/Loader";

import "./app.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventsData(events);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="title-container">
        <h1>Rastreador de incêndios</h1>
        <p>Acopanhe os diversos incêndios que acontecem pelo mundo.</p>
      </div>
      <div id="map-wrapper">
        {!loading ? <Map data={eventsData} /> : <Loader />}
      </div>
    </div>
  );
}

export default App;
