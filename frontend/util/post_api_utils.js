export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: `/api/posts`,
    error: err => console.log(err)
  });
};

export const fetchPost = id => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${id}`,
    error: err => console.log(err)
  });
};

export const createPost = post => {
  // debugger;
  return $.ajax({
    method: "POST",
    url: `/api/posts`,
    data: post,
    contentType: false,
    processData: false,
    error: err => console.log(err)
  });
};

export const updatePost = post => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${id}`,
    error: err => console.log(err)
  });
};