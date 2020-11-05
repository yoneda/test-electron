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

let count = 0;

const store = createStore({
  notes: [],
  addNote: action((state, payload) => {
    const { body } = payload;
    const today = dayjs().format("YYYY-M-D H:mm:ss");
    const note = { id: count, body, createdAt: today };
    state.notes.push(note);
    count = count + 1;
  }),
  editNote: action((state, payload) => {
    const { id, body } = payload;
    state.notes = state.notes.map((note) =>
      note.id === id ? { ...note, body } : note
    );
  }),
  deleteNote: action((state, payload) => {
    const { id } = payload;
    state.notes = state.notes.filter((note) => note.id !== id);
  }),
});

function Main() {
  const notes = useStoreState((state) => state.notes);
  const [addNote, editNote] = useStoreActions((actions) => [
    actions.addNote,
    actions.editNote,
  ]);
  const [addText, setAddText] = useState("");
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const onAddClick = () => {
    addNote({ body: addText });
    setAddText("");
  };
  const onEditClick = () => {
    editNote({ id: editIndex, body: editText });
    setEditText("");
  };
  return (
    <Fragment>
      <div>add:</div>
      <input
        type="text"
        value={addText}
        onChange={(e) => setAddText(e.target.value)}
      />
      <button onClick={onAddClick}>post</button>
      <div>edit:</div>
      <input
        type="number"
        value={editIndex}
        onChange={(e) => setEditIndex(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={onEditClick}>post</button>
      <div>notes:</div>
      {notes.map((note, index) => (
        <p key={index}>{note.body}</p>
      ))}
    </Fragment>
  );
}

function App() {
  return (
    <Fragment>
      <StoreProvider store={store}>
        <Reset />
        <Main />
      </StoreProvider>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
