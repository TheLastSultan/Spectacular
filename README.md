# Spectacular
[Instacram][heroku]

[heroku]: https://instacraam-production.herokuapp.com

Spectacular is a responsive SPA built with a Ruby on Rails backend and React/Redux frontend. Inspired by Warby Parker, it serves as a platform to buy glasses. This MVP was styled and developed in 10 days so there's still more to come, desired features are listed at the bottom.

## Features
### User Authentication

Users are automatically signed in as "guest users". This means taht in the backend, Users are automatically signed in a Hex key upon visiting the site. Upon logging in or

![login image](docs/images/demo_login.gif)

### Photos/Feed/Filters

Photos uploaded by users and whom they follow are displayed on the main feed. The feed is sorted by created_at, with the most recent upload displaying first. To upload images, simply navigate to the upload page. Click and drag an image to the input field to see a preview. Then, users can toggle buttons to imitate filters. Plans to implement persistence to come. Images are hosted on an Amazon Web Services (AWS) S3 bucket.
https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/06/Image-uploaded-from-iOS-3-1.png

![Real Instagram](http://digitalspyuk.cdnds.net/16/48/320x568/gallery-1480338651-instagram-screenshot.png)

### User Profiles

User profiles are public yet limited to functionality. Once logged in, profile editing and CRUD options are available. Clicking an image will open a modal which displays the photo, caption & location, and comments and likes. The layout utilizes CSS3 for responsiveness.

### Likes and Comments

Photos on the main feed and modal views have actions allowing the current user to like/dislike content and add/remove their own comments.

![modal image](docs/images/modal.png)

### Mobile Responsive

Media queries and SVGs were used to create a smooth transition between desktop and mobile devices.

![responsive image 1](docs/images/mobile1.png) ![responsive image 2](docs/images/mobile2.png) ![responsive image 3](docs/images/mobile3.png)

## Technologies used
### Backend
[Ruby on Rails](http://rubyonrails.org/) was used to serve the backend. [PostgreSQL](https://postgresql.org/) database to store data.
`ActiveRecords` used for Object-relational Mapping.

```Ruby
belongs_to :poster,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

has_many :comments,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Comment

has_many :likes, as: :likable

has_many :likers,
  through: :likes,
  source: :liker
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

- Persist photo filters
- Video integration
- AJAX searches
- Explore pages with geolocation
- Infinite scroll
- Hashtags
- Pagination and loading
- Direct messaging
- Live Streaming
