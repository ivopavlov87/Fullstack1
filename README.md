# README

 [Picto-gram live](https://picto-gram.herokuapp.com/)

Picto-gram is a social media single-page web application where users can create an account, and create content with their own images.

## Architecture and Technology

The backend utilises Ruby on Rails due to its convention over configuration to allow for quick and standardized setup and deployment. The frontend is implemented using ReactJS and Redux for granular component-rendering via the VirtualDOM. The ability to reuse React components is responsible for the universal feel and look across the site. The Redux development tools were instrumental. Managing the backend user and post data was accomplished using postgreSQL and Amazon Web Services S3 to store the user-created images.

### Authentication

To keep everything secure, password hashing and salting is accomplished via BCrypt and no passwords are stored on the database. Database constraints and model level validations were implemented for added stability and security. Session tokens, or cookies, were used to persist user logins through a refresh.

### Images

Users are able to upload images and add captions to their posts. User generated images are stored on AWS S3.

## Future Features

Keep an eye out for the upcoming features of being able to follow other user accounts and stay up to date with their content. You will be able to post your thoughts and ideas via comments on the posts. You will be able to "like" a post when that is all you want to convey.
