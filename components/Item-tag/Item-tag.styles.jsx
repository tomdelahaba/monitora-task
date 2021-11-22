import styled, { css } from "styled-components";
import TagTypes from "../utils/Tag.types";

const green = "#28a745";
const red = "#dc3545";
const grey = "#6c757d";

const greenTag = css`
  background-color: ${green};
`;

const redTag = css`
  background-color: ${red};
`;

const greyTag = css`
  background-color: ${grey};
`;

const getColor = (props) => {
  switch (props.type) {
    case TagTypes.IS_HIGHER:
      return greenTag;
    case TagTypes.IS_LOWER:
      return redTag;
    default:
      return greyTag;
  }
};

export const TagWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 3px 3px 0;
  float: left;
  padding: 3px 7px 3px 0px;

  &::
`;

export const ColoredTag = styled.span`
  padding: 3px 7px;
  border-radius: 20px 0 0 20px;
  color: white;
  ${getColor}
`;

export const TagTitle = styled.span`
  background-color: #efefef;
  border-radius: 0 20px 20px 0;
  padding: 3px 10px;
`;
