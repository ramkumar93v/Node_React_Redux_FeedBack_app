 /* require keyword is from common js modules.common js module is a system to share code between different files
  import express from 'express'; -> es 2015 syntax not supported in node js */

const express= require('express');
const app = express(); // configured app to listen to request, all route handlers will be registered here.

app.get('/',(req, res) => {
  res.send({hi:'there'});
})

const PORT= process.env.PORT || 5000; /*process.env.PORT -> when app is deployed in prod mode,
                                      it returns the port number that we configured in aws or heroku.
                                       || -> else statement use that if available else use 5000 */

app.listen(PORT); // node is waiting for traffic at this port and transfers it to express
