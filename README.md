# README

 [Picto-gram live](https://picto-gram.herokuapp.com/)

Picto-gram is a social media single-page web application where users can create an account, and create content with their own images.

## Architecture and Technology

The backend utilises Ruby on Rails due to its convention over configuration to allow for quick and standardized setup and deployment. The frontend is implemented using React and Redux for granular component-rendering via the VirtualDOM. The ability to reuse React components is responsible for the universal feel and look across the site. The Redux development tools were instrumental. Managing the backend user and post data was accomplished using postgreSQL and Amazon Web Services S3 to store the user-uploaded images.

```ruby
  create_table "posts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "caption", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "bio", limit: 240
    t.integer "follower_count"
    t.integer "followed_accts"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
```

### Authentication

<div style="item-align:center"><img src="https://github.com/ivopavlov87/Fullstack1/blob/master/login-gif.gif" alt="Demo login" /></div>

To keep everything secure, password hashing and salting is accomplished via BCrypt and no passwords are stored on the database. Database constraints and model level validations were implemented for added stability and security. Session tokens, or cookies, were used to persist user logins through a refresh.


```ruby
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
```

### Images

```javascript
export const createPost = post => {
  return $.ajax({
    method: "POST",
    url: `/api/posts`,
    data: post,
    contentType: false,
    processData: false,
    error: err => console.log(err)
  });
};
```

Users are able to upload images and add captions to their posts. User generated images are stored on AWS S3 with AJAX request.

## Future Features

Keep an eye out for the upcoming features of being able to follow other user accounts and stay up to date with their content. You will be able to post your thoughts and ideas via comments on the posts. You will be able to "like" a post when that is all you want to convey.
