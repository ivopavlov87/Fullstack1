json.extract! @post, :id, :user_id, :caption

if post.photo.attached?
  json.photoURL url_for(post.photo)
end