# Node.js Basic API Server
Building a RESTful API Using Node and Express 4

### Instructions

Make sure you have Node latest version installed and `make` installed

Run `npm install`

If everything goes right, you should see a log like this:

`Database Connection stablished this`

`Server is Running this [your given port]`

That means the api is running

Here are the routes (you can find them in /api/routes/)

1. `GET     localhost:8000/user/`
2. `POST     localhost:8000/user/register/`
3. `POST     localhost:8000/user/login`
4. `GET     localhost:8000/contacts/`
5. `GET    localhost:8000/contacts/{id}`
6. `POST    localhost:8000/contacts/`
7. `PUT     localhost:8000/contacts/{id}`
8. `DELETE  localhost:8000/contacts/{id}`


Now open Postman and send request to any of the routes with the following body as an example:

`POST` -> ` localhost:8000/contacts/`

```json
{
     "name": "abcd",
     "phone": "+8801234567891",
     "email": "john.doe@gmail.com"
 }
```
Here also use `jwt token` for user authentication

That's it

