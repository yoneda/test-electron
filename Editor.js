import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Reset } from "styled-reset";
import dayjs from "dayjs";
import {
  action,
  createStore,
  StoreProvider,
  useStoreState,
  useStoreActions,
} from "easy-peasy";

const Box = styled.div`
  width: 200px;
  height: 200px;
  border: solid 1px black;
`;

function Editor() {
  const selected = useStoreState((state) => state.selected);
  return <Box>{selected && selected.body}</Box>;
}

export default Editor;
