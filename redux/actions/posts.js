import * as api from "../../api/posts";

export const publish = (post) => async (dispatch) => {
  try {
    const { data } = await api.publishPost(post);
    dispatch({ type: "PUBLISH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const view = (post) => async (dispatch) => {
  try {
    const { data } = await api.viewPost(post);

    dispatch({ type: "VIEW", payload: data });
  } catch (error) {
    console.log(error);
  }
};
