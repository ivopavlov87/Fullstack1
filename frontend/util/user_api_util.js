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
    data: { user }
  });
};

export const editUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user },
    processData: false,
    contentType: false
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

