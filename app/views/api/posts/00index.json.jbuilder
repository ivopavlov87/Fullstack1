@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id, :created_at

    json.photoURL url_for(post.photo)
  end
end