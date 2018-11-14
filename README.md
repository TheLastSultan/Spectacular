# Spectacular
[Instacram][heroku]

[heroku]: https://instacraam-production.herokuapp.com

Spectacular is a responsive SPA built with a Ruby on Rails backend and React/Redux frontend. Inspired by Warby Parker, it serves as a platform to buy glasses. This MVP was styled and developed in 10 days so there's still more to come, desired features are listed at the bottom.

## Features
### User Authentication

Users are automatically signed in as "guest users". This means that in the backend, Users are automatically signed in a Hex key upon visiting the site. Upon logging in or

![login image](docs/images/demo_login.gif)

### Photos/Feed/Filters

Photos uploaded by users and whom they follow are displayed on the main feed. The feed is sorted by created_at, with the most recent upload displaying first. To upload images, simply navigate to the upload page. Click and drag an image to the input field to see a preview. Then, users can toggle buttons to imitate filters. Plans to implement persistence to come. Images are hosted on an Amazon Web Services (AWS) S3 bucket.
https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/06/Image-uploaded-from-iOS-3-1.png

![Real Warby](http://mslk.com/wp-content/uploads/2012/01/WARBY-PARKER-WEBSITE-MAIN-MSLK.jpg)

### Guest User

User profiles are public yet limited to full functionlity. Even in guest-login, profile editing and CRUD options are available. Clicking an image will open a modal which displays the photo, caption & location, and comments and likes. The layout utilizes CSS3 for responsiveness.

### Likes and Comments

Photos on the main feed and modal views have actions allowing the current user to cart and favorite items

![modal image](docs/images/modal.png)

### 5 Question Quiz

User can elect to take a 3 question quiz, which queries the backend and returns the appropraite spectacles:
![responsive image 1](docs/images/mobile1.png) ![responsive image 2](docs/images/mobile2.png) ![responsive image 3](docs/images/mobile3.png)

## Technologies used
### Backend
[Ruby on Rails](http://rubyonrails.org/) was used to serve the backend. [PostgreSQL](https://postgresql.org/) database to store data.
`ActiveRecords` used for Object-relational Mapping.

```Ruby
has_many :cartitems,
    foreign_key: :user_id,
    class_name: "Cartitem"


    has_many :cart,
    through: :cartitems,
    source: :spectacle

has_many :cartitems,
    foreign_key: :spectacle_id,
    class_name: "Cartitem"

    has_many :users,
    through: :cartitems,
    source: :user

```

- Hosted on Heroku
- AWS S3 Buckets and Paperclip to host and upload content
- RESTful API endpoints
- Views created with Jbuilder
- Figaro for API key protection
- BCrypt for password hashing and privacy

### Frontend
Facebook's [React](https://facebook.github.io/react/) frontend framework was used for speedy rendering. [Redux](http://redux.js.org) architecture was used for unidirectional data flow.

- Webpack for bundling
- Guard for live reloading
- ES6 Javascript

```Javascript
componentWillMount() {
  const { requestCommentsForPost, post } = this.props;

  requestCommentsForPost(post)
    .then( () => this.setState({
      loading: false
      })
    );
}

componentWillReceiveProps(nextProps) {
  if (this.props.commentsByPost !== nextProps.commentsByPost) {
    this.setState({ commentsByPost: nextProps.commentsByPost });
  }
  if (this.props.likesCount !== nextProps.likesCount) {
    this.setState({ liked: nextProps.liked });
    }
  }
}
```
- SCSS and CSS styling based on [SMACSS](https://smacss.com/) style guide

```
$bgcolor: #fafafa;
$var: 15px;

body {
  background: $bgcolor;
  font-family: 'Open Sans', sans-serif;
}

.container {
  padding: $var;
}
```

## Future Features

- Search for Title of Spectacles
- Imporve Functionality of Cart-Items
