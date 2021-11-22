import { useEffect, useState } from "react";

import initDemographicsData from "../assets/demographics.json";
import ShowType from "../utils/Show.types";

import Button from "../components/Button/Button.component";
import DemographicItem from "../components/Demographic-item/Demographic-item.component";

import styles from "../styles/Home.module.css";

const Homepage = () => {
  const [demographicsData, setDemographicsData] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [showType, setShowType] = useState(ShowType.SHOW_ALL);

  useEffect(() => {
    setSubtitle(initDemographicsData.subtitle);
    setTitle(initDemographicsData.title);
    setDemographicsData(initDemographicsData.data);
  }, []);

  const filterByType = (showType) => (item) => {
    return showType == ShowType.SHOW_LOWER
      ? item.percent - item.percent_avg <= -3
      : item.percent - item.percent_avg >= 3;
  };

  const handleFilterClick = (params) => (evnt) => {
    setShowType(params);
    if (params === ShowType.SHOW_ALL) {
      setDemographicsData(initDemographicsData.data);
    } else {
      const filteredData = initDemographicsData.data
        .map((obj) => {
          const filteredItems = obj.items.filter(filterByType(params));
          return { label: obj.label, items: filteredItems };
        })
        .filter((obj) => (obj.items.length ? obj : null));
      setDemographicsData(filteredData);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.subtitle}>{subtitle}</h1>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.filters}>
        <Button
          handleClick={handleFilterClick(ShowType.SHOW_ALL)}
          cName={`${showType === ShowType.SHOW_ALL ? "active" : ""}`}
          icon='/all.svg'
        >
          Vše
        </Button>
        <Button
          handleClick={handleFilterClick(ShowType.SHOW_HIGHER)}
          cName={`${showType === ShowType.SHOW_HIGHER ? "active" : ""}`}
          icon='/above-average.svg'
        >
          Nadprůměr
        </Button>
        <Button
          handleClick={handleFilterClick(ShowType.SHOW_LOWER)}
          cName={`${showType === ShowType.SHOW_LOWER ? "active" : ""}`}
          icon='/bellow-average.svg'
        >
          Podprůměr
        </Button>
      </div>
      {demographicsData.map((item, i) => (
        <DemographicItem key={`${item.label}`} {...item} />
      ))}
    </main>
  );
};

export default Homepage;
