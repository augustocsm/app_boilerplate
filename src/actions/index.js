import apps from "./../apis/applications";
import history from "./../history";

export const createApp = formValues => async (dispatch, getState) => {
  const response = await apps.post("/applications", { ...formValues });
  console.log(response);

  await dispatch({ type: "CREATE_APP", payload: "Action CREATE APP Executed" });

  history.push("/apps/");
};
