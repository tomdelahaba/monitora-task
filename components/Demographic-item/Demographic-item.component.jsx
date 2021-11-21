import React, { useState } from "react";

import ItemTag from "../Item-tag/Item-tag.component";
import {
  DemographicsWrapper,
  ItemsWrapper,
  DemographicsTitle,
} from "./Demographic-item.styles";
import CustomButton from "../Custom-button/Custom-button.component";

const DemographicItem = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { label, items } = props;

  const handleClick = (evnt) => {
    setExpanded(true);
  };

  /*
   ** @TODO: use memoizaton on item.percent - item.percent_avg
   ** @TODO: decide if it makes sense to use redux in here
   */
  return (
    <DemographicsWrapper>
      <DemographicsTitle>{label}</DemographicsTitle>
      <ItemsWrapper>
        {
          /* This condition is in here just because of next when rendering has no items,
           ** the file is not loaded, it cases crashing of the app.
           */ expanded
            ? items.map((item) => <ItemTag {...item} key={`${item.label}`} />)
            : items
                .filter((item, ind) => ind < 10)
                .map((item) => <ItemTag {...item} key={`${item.label}`} />)
        }
        {!expanded && items.length > 10 ? (
          <CustomButton handleClick={handleClick} icon='/arrow-down.svg'>
            Zobrazit další
          </CustomButton>
        ) : null}
      </ItemsWrapper>
    </DemographicsWrapper>
  );
};

export default DemographicItem;
