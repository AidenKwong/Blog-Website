const publishedPost = (state = {}, action) => {
  switch (action.type) {
    case "PUBLISH":
      return action.payload;
    default:
      return state;
  }
};

export default publishedPost;
