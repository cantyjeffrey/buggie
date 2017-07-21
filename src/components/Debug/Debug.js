// @flow

import React from "react";
import { Container, Provider, Editor } from "./style";
import code from "./code";

const Debug = () =>
  <Container>
    <Provider code={code} noInline mountStylesheet={false}>
      <Editor autoCorrect="off" autoCapitalize="off" spellCheck="false" />
    </Provider>
  </Container>;

export default Debug;
