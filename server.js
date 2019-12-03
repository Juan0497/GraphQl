var express = require(`express`);
var graphqlHTTP = require(`express-graphql`);
var { buildSchema } = require(`graphql`); //se saca solamente el build de la libreria de graph

var schema = buildSchema(`
type Query{
  hello: String,
  bye: String
}
`);

var root = {
  hello: () => {
    return `Hello world`;
  },
  bye: () => {
    return `GoodBye`;
  }
};

var app = express();
app.use(
  `/graphql`,
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(3000);
console.log(`Running a graphql api server at localhost:3000/graphql`);
