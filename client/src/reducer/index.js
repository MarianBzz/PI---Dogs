import {
  FILTER_BY_ALPHABET,
  FILTER_BY_TEMPERAMENTS,
  FILTER_CREATED,
  GET_DOGS,
  GET_TEMPERAMENT_LIST,
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
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case FILTER_CREATED:
      const createdFilter =
        action.payload === "created"
          ? state.allDogs.filter((e) => e.createInDb)
          : state.allDogs.filter((e) => !e.createInDb);
      return {
        ...state,
        dogs: action.payload === "all" ? state.allDogs : createdFilter,
      };

    case GET_TEMPERAMENT_LIST:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTER_BY_TEMPERAMENTS:
      const allDogs = state.filterDogs;
      const temperamentFilter =
        action.payload === "All"
          ? allDogs
          : allDogs.filter((e) => e.temperament?.includes(action.payload));

      return {
        ...state,
        dogs: temperamentFilter,
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
