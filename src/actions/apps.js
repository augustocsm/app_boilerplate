import apps from "./../apis/applications";
import history from "./../history";
import {
  CREATE_APP,
  FETCH_APPS,
  FETCH_APP,
  EDIT_APP,
  DELETE_APP
} from "./types";

export const createApp = formValues => async (dispatch, getState) => {
  const response = await apps.post("/applications", { ...formValues });

  await dispatch({ type: CREATE_APP, payload: response.data });

  history.push("/apps/");
};

export const fetchApps = () => async dispatch => {
  //console.log("Fetch Apps @ API");
  const response = await apps.get("/applications");

  await dispatch({ type: FETCH_APPS, payload: response.data });
};

export const fetchApp = id => async dispatch => {
  //console.log("Fetch App @ API");
  const response = await apps.get(`/applications/${id}`);

  await dispatch({ type: FETCH_APP, payload: response.data });
};

export const editApp = (id, formValues) => async dispatch => {
  const response = await apps.patch(`/applications/${id}`, { ...formValues });

  await dispatch({ type: EDIT_APP, payload: response.data });

  history.push("/apps/");
};

export const deleteApp = id => async dispatch => {
  await apps.delete(`/applications/${id}`);

  dispatch({ type: DELETE_APP, payload: id });

  history.push("/apps/");
};
