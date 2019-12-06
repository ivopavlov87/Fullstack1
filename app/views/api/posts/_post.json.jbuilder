json.extract! post, :id, :user_id, :caption, :created_at
json.author post.user.username
json.photoURL url_for(post.photo)

json.commentIds post.comment_ids
json.comments post.comments do |comment|
    if comment.user.profile_picture.attached? 
        json.authorPic url_for(comment.user.profile_picture)
    else
        json.authorPic image_url('default_user.png')
    end
    json.author comment.user.username
    json.user_id comment.user_id
    json.body comment.body
    json.post_id comment.post_id
    json.id comment.id
end