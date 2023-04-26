import { v4 as uuidv4 } from "uuid";
const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",

  filters: { type: "All", arr: [] },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_SORT": {
      let sort = state.heroes.filter((hero) => hero.element === action.payload);

      if (action.payload !== "All") {
        if (sort.length === 0) {
          return {
            ...state,

            filters: { arr: [], type: action.payload },
          };
        } else {
          return {
            ...state,

            filters: { arr: sort, type: action.payload },
          };
        }
      } else {
        console.log("попали");
        let heroe = state.heroes;
        return {
          ...state,
          filters: { arr: heroe, type: "All" },
        };
      }
    }
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HEROES_CLOSE": {
      let res = state.heroes.filter((hero) => hero.id !== action.payload);
      return {
        ...state,
        heroes: res,
      };
    }
    case "HEROES_ADD": {
      action.payload.id = uuidv4();
      state.heroes.push(action.payload);
      return {
        ...state,
        // heroes: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
