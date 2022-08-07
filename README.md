<h1 align="center">Model-View-Controller (MVC) Challenge: Tech Blog 👋</h1>

## Table of Contents 🔎
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Description 📝
This is a basic CMS-style Tech blog. You are presented with a homepage that shows all the current posts. A nav bar at the top gives you the option of going to the homepage, dashboard or login. 

On the login page you are given the ability to login with your username and password if you already have one or signup a new user. 

Once logged in you will be taken to your dashboard where you can view all of your own posts as well as create a new one. Clicking on an existing post allows you to edit it.

On the homepage clicking on a post title will open it and allow you to comment on it.

The Login option switches to a Logout after sign in.

## User Story 👨‍💻
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria ✅
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
## Technologies 🦾
This application was made using

![Javascript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

![MySQL](https://img.shields.io/badge/-MySql-4479a1?style=for-the-badge&logo=mysql&logoColor=white)

![Insomnia](https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)

![Heroku](https://img.shields.io/badge/-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) 
with the following npm packages
* `express.js` 
* `dotenv`
* `Sequelize`
* `bcrypt`
* `express-handlebars` 
* `express-session`
* `connect-session-sequelize`

## Installation 💾
No installation is needed as the app is deployed on Heroku

## Usage 💻
App can be viewed at - [Heroku]()

## Contributing
:octocat: [Daniel A](https://github.com/dannyyyspam)