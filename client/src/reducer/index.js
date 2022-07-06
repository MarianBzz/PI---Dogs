import {
  FILTER_BY_ALPHABET,
  FILTER_BY_TEMPERAMENTS,
  ORDER_BY_WEIGHT,
  FILTER_CREATED,
  GET_DOGS,
  GET_TEMPERAMENT_LIST,
  GET_DOG_BREED,
  POST_DOG,
  GET_DETAIL,
  SET_CLEAR_DETAIL,
} from "../actions/";

let initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  detail: [],
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

      if (createdFilter.length === 0) {
        return alert("There aren't any dog created");
      }

      return {
        ...state,
        dogs: action.payload === "all" ? state.allDogs : createdFilter,
      };

    case GET_DOG_BREED:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_TEMPERAMENT_LIST:
      return {
        ...state,
        temperaments: action.payload,
      };

    case SET_CLEAR_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ORDER_BY_WEIGHT:
      let sortedArrWeight =
        action.payload === "desc"
          ? state.dogs.sort((a, b) => {
              return b.minweight - a.minweight;
            })
          : state.dogs.sort((a, b) => {
              return a.minweight - b.minweight;
            });
      return {
        ...state,
        dogs: sortedArrWeight,
      };

    case FILTER_BY_TEMPERAMENTS:
      const allDogs = state.allDogs;
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

    case POST_DOG:
      return {
        ...state,
      };

    default:
      return state;
  }
}
