import {
  FILTER_BY_ALPHABET,
  FILTER_BY_ORIGIN,
  FILTER_CREATED,
  GET_DOGS,
} from "../actions/";
let initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  filterDogs: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      console.log(action.payload);
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case FILTER_BY_ORIGIN:
      return {};

    case FILTER_CREATED:
      const createdFilter =
        action.payload === "created"
          ? state.allDogs.filter((e) => e.createInDb)
          : state.allDogs.filter((e) => !e.createInDb);
      return {
        ...state,
        dogs: action.payload === "all" ? state.allDogs : createdFilter,
      };

    case FILTER_BY_ALPHABET:
      const sortDogs =
        action.payload === "alf-az"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortDogs,
      };

    default:
      return state;
  }
}
