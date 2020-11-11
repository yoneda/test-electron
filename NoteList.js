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
/*
const NoteBox = styled.div`
  corsor: pointer;
  &:hover {
    background: whitesmoke;
  }
  &:active {
    background: gainsboro;
  }

  ${(props) =>
    props.light &&
    css`
      bakground: red;
    `}
`;

function Note(props) {
  const { body, light, onTap } = props;
  return (
    <NoteBox light={light} onClick={onTap}>
      {body}
    </NoteBox>
  );
}
*/

const Note = styled.div`
  
`;

function NoteList() {
  const [notes, index] = useStoreState((state) => [state.notes, state.index]);
  const tapNote = useStoreActions((actions) => actions.tapNote);
  return (
    <Box>
      {notes.map((note, key) => (
        <div
          key={key}
          light={index}
          onTap={() => tapNote({ id: note.id })}
        >
          {note.body}
        </div>
      ))}
    </Box>
  );
}

export default NoteList;
