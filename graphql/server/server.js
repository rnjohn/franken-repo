var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")

var schema = buildSchema(`
    type Query {
        hello: String
    }
`)

var root = {
    hello: () => {
        return "Hello World!"
    }
}

var app = express()

app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root
    })
)

app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(4000)
console.log("Running GraphQL server at localhost:4000")