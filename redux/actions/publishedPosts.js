export const publish = (post) => {
  return {
    type: "PUBLISH",
    payload: post,
  };
};
