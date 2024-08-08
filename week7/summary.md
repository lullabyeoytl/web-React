# persist data permanently and shared with other users

create/read update/delete data via HTTP requests:

Post - create new data
Get - read existing data
Put - update existing data
Delete - delete existing data

Http status codes:

- 200 OK - request was successful
- 201 Created - new resource was created
- 204 No Content - request was successful but no content was returned
- 400 Bad Request - invalid request
- 401 Unauthorized - authentication is required
- 403 Forbidden - access denied
- 404 Not Found - resource not found
- 500 Internal Server Error - server error

https: secure version of http

More than one request when login in:(post api):

The browser will pre-flight (i.e. ask permission first) any complex request like POST ; 

that's why you may see 2 requests in your network log!

This is because of Cross-Origin Resource Sharing (CORS), which can get quite complex!

# Uncontrolled Components:

sometimes don't care about some changes(rather than using useState to track any changes)

**useRef** - a way to store a value that can be changed and read by other components

only concerned about the (current) value, not the state of the component

# Input 

each input should have an id associated with htmlFor of a label

in Bootstrap, form.control has an id associated with html of Form.Label

# Handling user credentials with cookies

 cookies hold a small amount of data that can be sent to the server with each request.

 cookies are used for authentication, session management, and personalization.

 It is managed by the browser, your JavaScript code cannot access it!

## JSON Web Tokens (JWTs)
A cryptographically-signed access token issued by a server for a set period of time (typically short). 

Used in lieu of the username and password directly.

Why? We don't want to be caught holding the user's password (especially in XSS attacks).