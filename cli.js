#!/usr/bin/env node

const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get('/slides_data', function (req, res) {
  return res.send('not implemented yet')
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
