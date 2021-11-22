import React from "react";

import "./Item-tag.styles";
import { ColoredTag, TagWrapper, TagTitle } from "./Item-tag.styles";

import { tagTypeForProps } from "../utils/Func.utils";

const ItemTag = (item) => {
  const { label, percent, percent_avg } = item;
  const diff = percent - percent_avg;

  let props = { type: tagTypeForProps(diff) };

  return (
    <TagWrapper>
      <ColoredTag {...props}>{Math.round(percent)}%</ColoredTag>
      <TagTitle>{label}</TagTitle>
    </TagWrapper>
  );
};

export default ItemTag;
