// const express = require("express");
// const connection = require("./MongoDBConnect");
// const app = express();
// app.listen(3000, () => {
//   console.log("Listening at port 3000");
// });


const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const user_controller = require('./controllers/users');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

})



app.use('/', express.static('./client/dist'));

app.use(express.json());
app.use('/api/v1/users', user_controller);
// .use('/api/v1/WorkoutView', WorkoutViewController)
// .use('/api/v1/cart', cartController)
// .use('/api/v1/checkout', checkoutController)

app.get('*', (req, res) => {
    
    res.sendFile('index.html', {root: './client/dist'});
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status( err.httpCode ?? 500).send({
        message: err.message ?? 'Something went wrong',
        status: err.httpCode ?? 500
    });

})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});