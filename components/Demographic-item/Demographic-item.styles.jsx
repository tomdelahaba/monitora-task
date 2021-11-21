import styled from "styled-components";

export const DemographicsTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 50px;
`;

export const DemographicsWrapper = styled.div`
  text-align: left;
  margin: 10px;
`;
export const ItemsWrapper = styled.div`
  display: inline-block;

  & > div:first-of-type {
    margin-left: 0px;
    padding-left: 0px;
  }
`;
