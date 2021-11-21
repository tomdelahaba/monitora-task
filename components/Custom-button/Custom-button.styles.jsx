import styled from "styled-components";

export const IconWrapper = styled.span`
  background-color: #3a9bdc;
  border-radius: 20px;
  padding: 3px 5px;
  color: white;
`;

export const IconImg = styled.img`
  width: 16px;
  height: 16px;
  vertical-align: bottom;
`;

export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  padding: 3px 7px 3px 0px;
  float: left;
  border-radius: 20px;
  background-color: #efefef;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
  }

  &.active {
    background-color: #3a9bdc;
    color: white;
  }
`;

export const SpanWrapper = styled.span`
  padding: 3px 7px 3px 2px;
`;
