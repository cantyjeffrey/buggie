// @flow

import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${space} ${width} ${fontSize} ${color};
`;

export default {};
