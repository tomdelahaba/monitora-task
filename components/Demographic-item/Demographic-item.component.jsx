import React, { useState } from "react";

import {
  DemographicsWrapper,
  ItemsWrapper,
  DemographicsTitle,
} from "./Demographic-item.styles";

import ItemTag from "../Item-tag/Item-tag.component";
import Button from "../Button/Button.component";

const DemographicItem = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { label, items } = props;

  const handleMoreClick = (evnt) => {
    setExpanded(true);
  };

  const showMoreButton = () => {
    return !expanded && items.length > 10;
  };

  return (
    <DemographicsWrapper>
      <DemographicsTitle>{label}</DemographicsTitle>
      <ItemsWrapper>
        {expanded
          ? items.map((item) => <ItemTag {...item} key={`${item.label}`} />)
          : items
              .filter((item, ind) => ind < 10)
              .map((item) => <ItemTag {...item} key={`${item.label}`} />)}
        {showMoreButton() ? (
          <Button handleClick={handleMoreClick} icon='/arrow-down.svg'>
            Zobrazit další
          </Button>
        ) : null}
      </ItemsWrapper>
    </DemographicsWrapper>
  );
};

export default DemographicItem;
