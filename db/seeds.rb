# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all

User.create([
  {username: "admin", email: "admin@email.com", password: "1234567", bio: "This is an autogenerated admin user for demo purposes."},
  {username: "DemoUser", email: "demouser@email.com", password: "password", bio: "This is an autogenerated demo user for demo purposes."},
  {username: "jbroden", email: "sega@atari.com", password: "123456", bio: "Living just to find emotion."},
])

user = User.create!(username: "maxwolfwood", email: "iam@dog.com", password: "woofwoof8", bio: "Woof-woof, woofity-woof.")
file1 = open('https://picto-gram-seeds.s3-us-west-2.amazonaws.com/profile_max.jpg')
user.profile_picture.attach(io: file1, filename: 'profile_max.jpg')

user2 = User.create(username: "ivo22", email: "ivo22@email.com", password: "123456", bio: "Just a city boy, born and raised in South Detroit!")
file2 = open('https://picto-gram-seeds.s3-us-west-2.amazonaws.com/D5DE740A-2133-47E9-9367-CFE222BCCC4A_1_201_a.jpeg')
user2.profile_picture.attach(io: file2, filename: 'profile_ivo22.jpg')

user3 = User.create(username: "rmohr", email: "rmohr@email.com", password: "123456", bio: "Just a city girl, took the midnight train going anywhere!")
file3 = open('https://picto-gram-seeds.s3-us-west-2.amazonaws.com/A22EA09E-DAC7-45B9-8A39-963E98E9F92C_1_201_a.jpeg')
user3.profile_picture.attach(io: file3, filename: 'profile_rmohr.jpg')

## post1 = Post.create!(user_id: user.id, caption: 'woof woof (taking a nappy-nap)')
## file2 = open('https://picto-gram-seeds.s3-us-west-2.amazonaws.com/sleepy_max.jpg')
## post1.photo.attach(io: file2, filename: 'sleepy_max.jpg')
## 
## post2 = Post.create!(user_id: user.id, caption: 'OMG SNOW!')
## file3 = open('https://picto-gram-seeds.s3-us-west-2.amazonaws.com/snow_max.jpg')
## post2.photo.attach(io: file3, filename: 'snow_max.jpg')
## 
## post3 = Post.create!(user_id: user.id, caption: 'Enjoying a nice walk!')
## file4 = open('https://picto-gram-seeds.s3-us-west-2.amazonaws.com/happy_max.jpg')
## post3.photo.attach(io: file4, filename: 'happy_max.jpg')
## 
## post4 = Post.create!(user_id: user.id, caption: "Strike a pose!")
## file5 = open('https://picto-gram-seeds.s3-us-west-2.amazonaws.com/pretty_max.jpg')
## post4.photo.attach(io: file5, filename: 'pretty_max.jpg')

