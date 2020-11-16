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
  padding: 10px;
  box-sizing: border-box;
`;

const EditArea = styled.textarea`
  resize: none;
  line-height: 1;
  font-size: 1.5rem;
`;

function Editor() {
  const note = useStoreState((state) => state.selected);
  const editNote = useStoreActions((actions) => actions.editNote);
  return (
    <Wrapper>
      {note ? (
        <EditArea
          cols={12}
          rows={4}
          value={note.body}
          onChange={(e) => editNote({ id: note.id, body: e.target.value })}
        />
      ) : (
        "empty"
      )}
    </Wrapper>
  );
}

export default Editor;
