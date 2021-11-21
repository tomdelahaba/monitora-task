import DemographicItem from "../components/Demographic-item/Demographic-item.component";

import { useEffect, useState } from "react";

import demographicsData from "../assets/demographics.json";
import ShowType from "../components/assets/Show.types";
import CustomButton from "../components/Custom-button/Custom-button.component";

import styles from "../styles/Home.module.css";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [showType, setShowType] = useState(ShowType.SHOW_ALL);

  useEffect(() => {
    setSubtitle(demographicsData.subtitle);
    setTitle(demographicsData.title);
    setData(demographicsData.data);
  }, []);

  const filterArr = (showType) => (item) => {
    return showType == ShowType.SHOW_LOWER
      ? item.percent - item.percent_avg <= -3
      : item.percent - item.percent_avg >= 3;
  };

  const handleClick = (params) => (evnt) => {
    let newData = [];
    setShowType(params);
    if (params === ShowType.SHOW_ALL) {
      setData(demographicsData.data);
    } else {
      newData = demographicsData.data
        .map((obj) => {
          const newItems = obj.items.filter(filterArr(params));
          return { label: obj.label, items: newItems };
        })
        .filter((obj) => (obj.items.length ? obj : null));
      setData(newData);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.subtitle}>{subtitle}</h1>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.filters}>
        <CustomButton
          handleClick={handleClick(ShowType.SHOW_ALL)}
          cName={`${showType === ShowType.SHOW_ALL ? "active" : ""}`}
          icon='/all.svg'
        >
          Vše
        </CustomButton>
        <CustomButton
          handleClick={handleClick(ShowType.SHOW_HIGHER)}
          cName={`${showType === ShowType.SHOW_HIGHER ? "active" : ""}`}
          icon='/above-average.svg'
        >
          Nadprůměr
        </CustomButton>
        <CustomButton
          handleClick={handleClick(ShowType.SHOW_LOWER)}
          cName={`${showType === ShowType.SHOW_LOWER ? "active" : ""}`}
          icon='/bellow-average.svg'
        >
          Podprůměr
        </CustomButton>
      </div>
      {data.map((item, i) => (
        <DemographicItem key={`${item.label}`} {...item} />
      ))}
    </main>
  );
};

export default Homepage;
