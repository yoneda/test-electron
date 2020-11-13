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

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  border: solid 1px black;
  padding: 20px;
  box-sizing: border-box;
`;

const EditArea = styled.textarea`
  resize: none;
  line-height: 1;
  font-size: 2rem;
`;

function Editor() {
  // const selected = useStoreState((state) => state.selected);
  // return <Box>{selected && selected.body}</Box>;
  return <Wrapper><EditArea cols={16} rows={4} /></Wrapper>
}

export default Editor;
