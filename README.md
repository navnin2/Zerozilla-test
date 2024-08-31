# Zero TEST

## Getting Started

To get started with this project, follow these steps:

### 1. Clone the Repository

Clone the code from the master branch:

### 3. Run the Command  to install all the package.

```bash
NPM install
```

### 2. Run the command to to add user in seed

```bash
node seed.js
```

### 3. Run the Command  to run the code.

```bash
node server.js
```

### API to test.
```bash
1. http://localhost:5000/auth/login
  body: {
    "username": "user1",
    "password": "password123"
}
```
### you eill get the token and then use that token to run remaing API.
```bash
1. http://localhost:5000/agency-client

body:{
    "agency": {
        "name": "one",
        "address1": "some",
        "address2": "some3",
        "state":"kerala" ,
        "city":"cochin" ,
        "phoneNumber":"123456789"
    },
    "client":{
        "name":"client7",
        "email":"client@node.com",
        "phoneNumber": "123456789",
        "totalBill": 59
    }
}

2. http://localhost:5000/client/:id 

perams: id: id from the previous API
body: {key: value}

3. http://localhost:5000/agency/top-client




