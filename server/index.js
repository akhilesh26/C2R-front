const express = require('express')
const next = require('next')
const url = require('url');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
        // let pathname = url.parse(req._parsedUrl).pathname;
        // console.log('path is =>>>>>>>'+pathname);
        
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })