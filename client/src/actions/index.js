import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_ALPHABET = "FILTER_BY_ALPHABET";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const GET_TEMPERAMENT_LIST = "GET_TEMPERAMENT_LIST";

export function getDogs() {
  return async function (dispatch) {
    let jsonDogs = await axios.get("http://localhost:3001/dogs");
    return dispatch({ type: GET_DOGS, payload: jsonDogs.data });
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

export function getTemperamentList() {
  return async function (dispatch) {
    var jsonTemp = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: GET_TEMPERAMENT_LIST,
      payload: jsonTemp.data,
    });
  };
}

export function filterByTemperament(payload) {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}
