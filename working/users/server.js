const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();

app.use(
  "/graphiql",
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
