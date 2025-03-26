import React from "react";
import styles from "../styles/Citylist.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function Citylist({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          key={city.id}
        />
      ))}
    </ul>
  );
}

export default Citylist;
