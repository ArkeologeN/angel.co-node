Angel List
=============

AngelList wrapper purely written in Node.js

[![Build Status](https://travis-ci.org/ArkeologeN/angel.co-node.png?branch=master)](https://travis-ci.org/ArkeologeN/angel.co-node)

## Getting Started

Wrapper can be downloaded from npm:

`npm install angel.co --save`

Once installed, its easy to use it:

```javascript
var angel = require('angel.co')('APP_ID', 'APP_SECRET');
```

Please follow the documentation from [https://angel.co/api/](AngelList documentation)

## Authentication

Module includes ability to let the user authenticate from AngelList. For now, its hard coded and asks for all ther permissions but you can change sa you like ;-)

Below example has been implemented with `Express.js` you may modify it.

```javascript
app.get('/auth/angel-list', function(req, res) {
    res.redirect(angel.getAuthorizeUrl());
});

app.get('/auth/angel-list/callback', function(req, res) {
    angel.auth.requestAccessToken(req.query.code, function(err, response) {
        if ( err )
            return console.error(err); //Something went wrong.
            
        // I got the Token. Ain't you?
        app.set('my_key_to_token', response.access_token); // Persist it anywhere.
        res.redirect('/'); // Go back to the homepage.
    });
});
```

You can store the access token returned from api and all your next request will use it.

```javascript
angel.setAccessToken('your_access_token');
```

`PS:` Your callback url must be similar to what you have configured while creating an app on AngelList.

## Available Services.

You can serve this wrapper for following services:

* [Users](https://github.com/ArkeologeN/angel.co-node#users)
* [Startups](https://github.com/ArkeologeN/angel.co-node#startups)
* [Feeds](https://github.com/ArkeologeN/angel.co-node#feeds)
* [Search](https://github.com/ArkeologeN/angel.co-node#search)
* [Comments](https://github.com/ArkeologeN/angel.co-node#comments)
* [Follows](https://github.com/ArkeologeN/angel.co-node#follows)
* [Intros](https://github.com/ArkeologeN/angel.co-node#intros)
* [Messages](https://github.com/ArkeologeN/angel.co-node#messages)
* [Paths](https://github.com/ArkeologeN/angel.co-node#paths)
* [Press](https://github.com/ArkeologeN/angel.co-node#press)
* [Reviews](https://github.com/ArkeologeN/angel.co-node#reviews)
* [Startup Updates](https://github.com/ArkeologeN/angel.co-node#startup-updates)
* [Startup Roles](https://github.com/ArkeologeN/angel.co-node#startup-roles)
* [Tags](https://github.com/ArkeologeN/angel.co-node#startup-roles)
* [Likes](https://github.com/ArkeologeN/angel.co-node#likes)
* [Jobs](https://github.com/ArkeologeN/angel.co-node#jobs)

## Users

Specification for the user is available at: https://angel.co/api/spec/users

### me
It returns the data of logged in user.

```javascript
angel.users.me('access_token_here', function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.users.me().then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Get User
To get the user, first argument must be the userId while another would be the set for query parameters.

```javascript
angel.users.user('467664', {'include_details': 'investor'}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.users.user('467664').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Get User Roles
Returns all the roles of user in organizations in which user is tagged in.

```javascript
angel.users.roles('USER_ID', function(err, body) {
     if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.users.roles('USER_ID').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Batch Request
Helps to query multiple users at a time. First argument must be an array with the list of user ids.

```javascript
angel.users.batch(['155', 671], function(err, body) {
     if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.users.batch(['155', 671]).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Users Search
Search the users by `slug` and/or `md5` of the user's `email`

```javascript
angel.users.search({'slug': "hamza-waqas"}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.users.search({'slug': "hamza-waqas"}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Users by Tag
Returns all the users related to the tag. Tag must be either `LocationTag` or `MarketTag`. First argument is the tagId, while another is the `object` with k/v of query parameters.

```javascript
angel.users.tags('1654', {
    include_children: true,
    investors: 'by_residence'
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.users.tags('1654',  {
    include_children: true,
    investors: 'by_residence'
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Followers
Returns the followers of the user. 

```javascript
angel.users.followers(671, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body);
});

//OR with promise
angel.users.followers('1654').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```
OR

```javascript
// Second argument as true will only return Ids of followers
angel.users.followers(671, true, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body);
});

//OR with promise
angel.users.followers('1654', true,  {
    include_children: true,
    investors: 'by_residence'
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Following
Returns the entities that are followed by User.

```javascript
angel.users.following(671, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body);
});

//OR with promise
angel.users.following('1654').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```
OR
```javascript
// Second argument as true will only return Ids of followers
angel.users.following(671, true, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body);
});


//OR with promise
angel.users.following('1654', true).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

## Startups

Specification of startup is available at https://angel.co/api/spec/startups

### Get Startup
Returns the information of the given startup Id.

```javascript
angel.startups.startup(6702, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});
//OR with promise
angel.startups.startup('6702').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Get Startup Comments
Retrieves all the comments of startup.

```javascript
angel.startups.comments(6702, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.startups.comments('6702').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Startup Roles
Returns the company's startup roles. Direction must be either `Incoming` or `Outgoing`.

```javascript
angel.startups.roles(6702, {direction: "outgoing"}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.startups.roles('6702', {direction: "outgoing"}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Filter Startups
Filters the startups by criteria.

```javascript
angel.startups.filter({filter: "raising"}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.startups.filter({filter: "raising"}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Get Startups by Tag
Returns companies that are tagged with the given tag or a child of the given tag. Results are paginated and ordered according to the order parameter.

```javascript
angel.startups.tags(1654, {order: "asc"}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.startups.tags(1654, {order: "asc"}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Followers
Returns the followers of the startup.

```javascript
angel.startups.followers(6702, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Followers here.
})

//OR with promise
angel.startups.followers(6702).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```
OR
```javascript
// Second argument as true will only return Ids of followers.
angel.startups.followers(6702, true, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Followers here.
})


//OR with promise
angel.startups.followers(6702, true).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Feeds

Specification for feeds entity is available at: https://angel.co/api/spec/activity_feeds

### Consume
Returns site activity. If authenticated and the personalized parameter is passed in, only activity from the authenticated user's social graph is returned. No more than 25 items will be returned. Results are paginated and ordered by most recent story first, unless a since parameter is given.

```javascript
angel.feeds.consume({
    since: 'PRESAVED_UNIX_TIMESTAMP',
    personalized: 1
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.feeds.consume({
    since: 'PRESAVED_UNIX_TIMESTAMP',
    personalized: 1
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Search
Specification regardings calls and parameters for search is available at: https://angel.co/api/spec/search

### Search Entity.
Search by name for Startups, Users, MarketTags and LocationTags, optionally narrowing the results by type. Results are sorted by a mix of match and popularity.

```javascript
angel.search.search({
    query: "hamza-waqas",
    type: "User"
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.search.search({
    query: "hamza-waqas",
    type: "User"
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Search by Slugs
Search for entity by slug directly.

```javascript
angel.search.slugs({
    query: "hamza-waqas"
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.search.slugs({
    query: "hamza-waqas"
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Comments

Specification for the comments is available at:  https://angel.co/api/spec/comments

### Get Comments
Returns all the comments of entity.

```javascript
angel.comments.comments({
    commentable_type: "Startup",
    commentable_id: 6702
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.comments.comments({
    commentable_type: "Startup",
    commentable_id: 6702
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Create Comment
Creates a new comment against commentable item.

```javascript
angel.comments.create('I b reviewing it now!', {
    commentable_type: "Startup",
    commentable_id: 6702
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.comments.create('I b reviewing it now!', {
    commentable_type: "Startup",
    commentable_id: 6702
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Delete a comment
Deletes a comment.

```javascript
angel.comments.trash('comment_id', function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.comments.trash('comment_id').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Follows

Specification of follows entity can be viewed at: tps://angel.co/api/spec/follows

### Start Following
Makes the authenticated user follow the specified item. Returns the new follow on success, or an error on failure.

```javascript
angel.follows.follow({
    type: "Startup",
    id: "id_to_follow_here"
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.follows.follow({
    type: "Startup",
    id: "id_to_follow_here"
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Stop Following
Makes the authenticated user stop following the specified item. Returns the deleted follow on success, or an error on failure.

```javascript
angel.follows.unfollow({
    type: "Startup",
    id: "id_to_follow_here"
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.follows.unfollow({
    type: "Startup",
    id: "id_to_follow_here"
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Relationship
Returns the relationship between source and target.

```javascript
angel.follows.relationship({
    source_id: "source_id_here",
    target_type: "User_or_Startup",
    target_id: "relational_id"
}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

//OR with promise
angel.follows.relationship({
    source_id: "source_id_here",
    target_type: "User_or_Startup",
    target_id: "relational_id"
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Batch
Returns the follower and followed information based on comma-separated follow ids, such as those from the activity feed.

```javascript
angel.follows.batch([1,2,3,4,5], function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body);
});

//OR with promise
angel.follows.batch([1,2,3,4,5]).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Intros
API doc is available at: https://angel.co/api/spec/intros

### Create Intro
Creates an introduction between User & Startup.

```javascript
angel.intros.create({
    access_token: "of_authenticated_user",
    startup_id: 6702,
    note: "Lets make some chit chat sometime and Zuck's place?"
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Got it here!
});
//OR with promise
angel.intros.create({
    startup_id: 6702,
    note: "Lets make some chit chat sometime and Zuck's place?"
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Messages
The specification for the API is available at: https://angel.co/api/spec/messages
`PS:` You require the `message` permissions applied within the authentication scope first.

### Get Messages - List
Returns all the messages of the given thread id.

```javascript
angel.messages.list({
    view: "inbox",
    access_token: "access_token_here"
},function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

//OR with promise
angel.messages.list({
    view: "inbox"
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Get Messages - Thread
Returns all the messages of the given thread id.

```javascript
angel.messages.message(
    'thread_id', 
    {access_token: "access_token_here"}, 
    function(err, body) {
        if ( err )
            return console.log(err);
            
        console.log(body); // Something with messages here.
    }
);

//OR with promise
angel.messages.message('thread_id').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Create Message
Creates a new message within thread.

```javascript
angel.messages.create({
    thread_id: '',
    recipient_id: '',
    body: 'So, did you got my message? Errh!'
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

//OR with promise
angel.messages.create({
    thread_id: '',
    recipient_id: '',
    body: 'So, did you got my message? Errh!'
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Mark the Message.
Marks the messages as viewed by the user.

```javascript
angel.messages.mark([1,2,3,4], {
    access_token: ""
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

//OR with promise
angel.messages.mark([1,2,3,4]).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

## Paths
Grab the verbose and documentation for paths from: https://angel.co/api/spec/paths

### Get Path
Returns the path between You and the provided User / Starup Ids.

```javascript
angel.paths.path({
    access_token: "",
    user_ids: [],
    startup_ids: [],
    direction: 'following/followed'
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

//OR with promise
angel.paths.path({
    access_token: "",
    user_ids: [],
    startup_ids: [],
    direction: 'following/followed'
}).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

## Press
Please find the specification at: https://angel.co/api/spec/press

### Get Startup Press
Returns all the presses related to the startup id.

```javascript
angel.press.startup(6702,  function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body); // Something with messages here.
});

//OR with promise
angel.press.startup(6702).then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Get Press By Id
Returns the press of the given press id.

```javascript
angel.press.press('press_id',  function(err, body) {
    if ( err )
        return console.log(err);     
    console.log(body); // Something with messages here.
});

//OR with promise
angel.press.press('press_id').then(function(body){
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```


## Reviews
API specification is available at: https://angel.co/api/spec/reviews

### Get Reviews for User.
Returns all the reviews of the user.

```javascript
angel.reviews.get('user_id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise
angel.reviews.get('review_id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Get Review
Returns a single review by id.

```javascript
angel.reviews.review('review_id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise
angel.reviews.review('review_id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Startup Roles
Specification can be found at: https://angel.co/api/spec/startup_roles

### Get Roles
Given a user_id, returns the companies that User is tagged in. Given a startup_id, returns either the users and companies tagged in the given Startup (if direction is incoming) or the companies which the given Startup is tagged in (if direction is outgoing). If neither parameter is given, the authenticated user is used. Possible roles include founder, employee, past_investor, current_investor, advisor, incubator and referrer. Roles are paginated and ordered by most recently declared first.

```javascript
angel.startup_roles.get({
    user_id: '',
    startup_id: '',
    role: '',
    direction: ''
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise
angel.startup_roles.get({
    user_id: '',
    startup_id: '',
    role: '',
    direction: ''
}).then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Startup Updates
Please find the specification of the api at: https://angel.co/api/spec/status_updates

### Get Updates
Return status updates from the given user or startup. If neither is specified, the authenticated user is used. Status updates are paginated and ordered by most recent first.

```javascript
angel.startup_updates.get({
    user_id: '',
    startup_id: ''
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});


// OR with promise
angel.startup_updates.get({
    user_id: '',
    startup_id: ''
}).then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```
### Post Updates.
Creates a new startup update.

```javascript
angel.startup_updates.create({
    startup_id: '',
    message: '',
    access_token: ''
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise
angel.startup_updates.create({
        startup_id: '',
        message: ''
}).then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Delete Update.
Trashes the startup update.

```javascript
angel.startup_updates.trash(':id', {
    access_token: ''
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});
// OR with promise

angel.startup_updates.trash(':id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## Tags
Please find the specification of the api at: https://angel.co/api/spec/tags

### Get Tag
Returns tag with related information by Id.

```javascript
angel.tags.tag(':id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});
// OR with promise

angel.tags.tag(':id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Get Children
Returns the children of the given tag.

```javascript
angel.tags.children(':id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});
// OR with promise

angel.tags.children(':id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Get Parents
Returns the parents of the given tag id.

```javascript
angel.tags.parents(':id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise

angel.tags.parents(':id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

### Get Startups
Retrieves the startups related to the tag.

```javascript
angel.tags.startups(':id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise

angel.tags.startups(':id').then(function(body) {
        console.log(body);
    }).catch(function(error){
        console.log(error);
    });
```

### Get Users
Retrieves the users related to the tag.

```javascript
angel.tags.users(':id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise

angel.tags.users(':id').then(function(body) {
        console.log(body);
    }).catch(function(error){
        console.log(error);
    });
```

## Likes
Please find the specification of the api at: https://angel.co/api/spec/likes

### Get Likes
Returns the likes over the likable entity.

```javascript
angel.likes.likes({
    likable_type: '',
    likable_id: ''
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise

angel.likes.likes({
    likable_type: '',
    likable_id: ''
    }).then(function(body) {
        console.log(body);
    }).catch(function(error){
        console.log(error);
    });
```

### Create Likes
Creates a new Like action over Likable story.

```javascript
angel.likes.like({
    likable_type: '',
    likable_id: ''
}, function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});

// OR with promise

angel.likes.like({
    likable_type: '',
    likable_id: ''
    }).then(function(body) {
        console.log(body);
    }).catch(function(error){
        console.log(error);
    });
```

### Delete Like / Unlike
Creates a new delete / unlike action over Likable story.

```javascript
angel.likes.unlike('like_id', function(err, body) {
    if ( err )
        return console.log(err);
        
    console.log(body); // Something with messages here.
});


// OR with promise

angel.likes.unlike('like_id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});
```

## JObs

Specification for the jobs is available at: https://angel.co/api/spec/jobs

### List Jobs
To list the jobs.

```javascript
angel.jobs.list(function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

// OR with promise

angel.jobs.list().then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Get a specific job
To get a job, first argument must be the id of that job.

```javascript
angel.jobs.job('job_id', function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});
// OR with promise

angel.jobs.job('job_id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Get jobs from a startup
To get the list of jobs from a startup, first argument must be the **startup id**.

```javascript
angel.jobs.startup('startup_id', function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});

// OR with promise

angel.jobs.startup('startup_id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

### Get jobs from a tag
To get the list of jobs from a tag, first argument must be the **tag id**.

```javascript
angel.jobs.tag('tag_id', function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
});
// OR with promise
angel.jobs.tag('tag_id').then(function(body) {
    console.log(body);
}).catch(function(error){
    console.log(error);
});

```

## Issues / Bugs
Please feel free to open a new issue ticket if any occures. I love pull requests so they are also welcome. Before making it out the issue, please verify the required arguments / parameters from `AngelList` api source.

## HotCake TODOs
These are the most important TODOs that are supposed to be done. If you can make pull request, I'd love to accept it (if it really has to).
* Create Jasmine / Mocha test cases to validate each of the service.
* Few workable examples might be there to even make it more verbose.
* Code Cleanup. I hate dirt but sometimes has to do!
* You call it!

## Contribution
This wrapper is solely written at `Kuew Inc` by [Hamza Waqas](http://github.com/ArkeologeN)
