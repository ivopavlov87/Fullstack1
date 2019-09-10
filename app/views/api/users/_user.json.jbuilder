json.extract! user, :id, :username, :email, :bio

if user.profile_picture.attached?
  json.photoURL url_for(user.profile_picture)
end

