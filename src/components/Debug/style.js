// @flow
import { LiveProvider, LiveEditor } from "react-live";

import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import theme from "./theme";

export const Container = styled.div`
  font-family: 'JeffreyMono-Book', monospace;
  position: relative;
  overflow: hidden;
  width: 50vmin;
  height: 50vmin;
  color: #fff;
  background-color: #1d1f27;
  box-shadow: .05555555555555555rem .05555555555555555rem 1.1111111111111112rem
    rgba(20, 20, 20, .27);
  ${space} ${width} ${fontSize} ${color};
  }
`;

export const Provider = styled(LiveProvider)`
  font-family: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  ${space} ${width} ${fontSize} ${color};
`;

export const Editor = styled(LiveEditor)`
  font-family: inherit;
  font-size: 100%;
  overflow: scroll;
  margin: 0;
  padding: 2rem;
  cursor: text;
  text-align: left;
  word-spacing: normal;
  word-wrap: normal;
  word-break: normal;
  tab-size: 2;
  hyphens: none;
  outline: none;
  background: transparent;
  text-shadow: none;
  flex: 1;
  ${space} ${width} ${fontSize} ${color} ${theme}
`;

export default {};
