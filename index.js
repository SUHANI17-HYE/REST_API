const fastify = require('fastify')
const app = fastify()// Set a GET route "/"
app.get('/g', function (request, reply) {
    reply.redirect("https://www.google.com/")})// Start the server
app.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})