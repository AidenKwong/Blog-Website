const Post = (state = {}, action) => {
  switch (action.type) {
    case "PUBLISH":
      return action.payload;
    case "VIEW":
      return action.payload;
    default:
      return state;
  }
};

export default Post;
