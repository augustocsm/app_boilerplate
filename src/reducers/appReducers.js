import _ from "lodash";
import {
  CREATE_APP,
  FETCH_APPS,
  FETCH_APP,
  EDIT_APP,
  DELETE_APP
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_APPS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_APP:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_APP:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_APP:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_APP:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
