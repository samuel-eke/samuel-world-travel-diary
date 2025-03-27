import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "../styles/Map.module.css";

function Map() {
  const [searchParams, setSearch] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();

  return (
    <section
      className={styles.mapContainer}
      onClick={() => navigate("form")}>
      <h1>the map</h1>{" "}
      {/**this shows the position dataa from the json files and the state */}
      <ul>
        <li>Longitude: {lng}</li>
        <li>Latitude: {lat}</li>
      </ul>
      <button
        onClick={() => {
          setSearch({ lat: 43, lng: 9880 });
        }}>
        set param value
        {/**to set the value of the search params */}
      </button>
    </section>
  );
}

export default Map;
