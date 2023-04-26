export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};
export const heroesSort = (typeSort) => {
  return {
    type: "HEROES_SORT",
    payload: typeSort,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};
export const close = (heroes, id) => {
  return {
    type: "HEROES_CLOSE",
    payload: id,
  };
};
export const add = (user) => {
  return {
    type: "HEROES_ADD",
    payload: user,
  };
};
