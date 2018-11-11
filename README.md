# GraphQL Requests Test Server

A simple test server for following along with the examples in the documentation of the [GraphQL Requests](https://github.com/saltastro/graphql_requests.git) package.

## Installing

Clone the directory.

```bash
git clone https://github.com/saltastro/graphql_requests_test_server.git;
cd graphql_requests_test_server;
```

Install all the required packages.

```bash
npm init
```

## Usage

Start the server.

```bash
npm start
```

You can then send GraphQL queries to [http://localhost:4000/](http://localhost:4000/).

The server logs the value of the `Authorization` header and, for the `createUser` mutation, the filename and MIME type of the uploaded file.
