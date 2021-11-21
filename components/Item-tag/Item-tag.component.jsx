import React from "react";

import "./Item-tag.styles";
import { ColoredTag, TagWrapper, TagTitle } from "./Item-tag.styles";

import TagTypes from "../assets/Tag.types";

const ItemTag = (item) => {
  const { label, percent, percent_avg } = item;
  const diff = percent - percent_avg;

  let props = {};
  var type = TagTypes.IS_EQUAL;
  switch (true) {
    case diff <= -3:
      type = TagTypes.IS_LOWER;
      break;
    case diff >= 3:
      type = TagTypes.IS_HIGHER;
      break;
  }
  props.type = type;

  return (
    <TagWrapper>
      <ColoredTag {...props}>{Math.round(percent)}%</ColoredTag>
      <TagTitle>{label}</TagTitle>
    </TagWrapper>
  );
};

export default ItemTag;
