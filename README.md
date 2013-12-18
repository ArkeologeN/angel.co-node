Angel List
=============

AngelList wrapper purely written in Node.js

## Getting Started

Wrapper can be downloaded from npm:

`npm install angel.co --save`

Once installed, its easy to use it:

```javascript
var angel = require('angel.co')('APP_ID', 'APP_SECRET');
```

Please follow the documentation from [https://angel.co/api/](AngelList documentation)

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
```

### Get User
To get the user, first argument must be the userId while another would be the set for query parameters.

```javascript
angel.users.user('467664', {'include_details': 'investor'}, function(err, body) {
    if ( err )
        return console.log(err);

    console.log(body);
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
```

### Batch Request
Helps to query multiple users at a time. First argument must be an array with the list of user ids.

```javascript
angel.users.batch(['155', 671], function(err, body) {
     if ( err )
        return console.log(err);

    console.log(body);
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
```

## Contribution

This wrapper is solely written at `Kuew Inc` by [Hamza Waqas](http://github.com/ArkeologeN)