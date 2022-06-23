import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_ALPHABET = "FILTER_BY_ALPHABET";

export function getDogs() {
  return async function (dispatch) {
    let jsonDogs = await axios.get("http://localhost:3001/dogs");
    return dispatch({ type: GET_DOGS, payload: jsonDogs.data });
  };
}

export function filterDogByOrigin(payload) {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
}

export function filterByAlphabet(payload) {
  return {
    type: FILTER_BY_ALPHABET,
    payload,
  };
}

export function filterCrated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}
