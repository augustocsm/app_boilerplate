export const createApp = formValues => async (dispatch, getState) => {
  console.log(dispatch);
  console.log(getState);
  console.log("Ação CREATE_APP Executada");

  await dispatch({ type: "CREATE_APP", payload: "Action CREATE APP Executed" });
};
