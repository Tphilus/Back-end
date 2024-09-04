const express = require('express');
const path = require('path')
const app = express();
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// === MIDDLEWARE ===
app.use((req, res, next) => {
    const start = Date.now();
    next();
    // action go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static('public'))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.render('index.hbs', {
//         title: "My First backend template",
//         caption: "Let\'s go and see"
//     });
// });

app.use('/friends' , friendsRouter);
app.use('/messages' , messagesRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})


// ==============  CRUD APPLICATION ======     
// 201 (created)
// 202 (OK)
// 405 (Method Not Allowed)
// 404 (Not Found)
// 204 (No content)
// 409 (Conflict)