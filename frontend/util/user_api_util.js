export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    // data: user
  });
};

export const editUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user },
    // processData: false,
    // contentType: false
  });
};

export const updateUserPicture = (id, data) => {
  return $.ajax({
    url: `api/users/${id}`,
    method: `PATCH`,
    data: data,
    contentType: false,
    processData: false
  });
};

export const createUser = (formData) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users`,
    processData: false,
    contentType: false,
    data: formData
  });
};

