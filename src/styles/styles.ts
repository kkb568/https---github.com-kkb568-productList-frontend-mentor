import styled from "@emotion/styled";
import { red } from "../data/data";

export const OrangeButton = styled.button`
  width: fit-content;
  border: none;
  background-color: ${red};
  color: white;
  font-family: "Red hat semi-bold";
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: #84270b;
  }
`;

export const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f4edeb;
`;
