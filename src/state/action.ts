export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listid: string } };

export const addTask = (text: string, listid: string): Action => ({
  type: "ADD_TASK",
  payload: { text, listid },
});

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});
