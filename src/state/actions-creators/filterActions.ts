export const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text,
});

export const sortByName = () => ({
  type: "SORT_BY_NAME",
});

export const sortByNewest = () => ({
  type: "SORT_BY_NEW",
});
