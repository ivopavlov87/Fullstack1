export const fetchPostComments = post_id => {
  return $.ajax({
    method: "GET",
    url: `api/posts/${post_id}/comments`
  });
};

export const fetchComment = id => {
  return $.ajax({
    method: "GET",
    url: `api/comments/${id}`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `api/comments`,
    data: { comment }
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`,
  });
};