import express from 'express'
import main from './main'

const server = express()

// log requests
server.use((requet, _response, next) => {
  console.log(`-------- REQUEST RECIVED FROM ${requet.url} ---------`)
  next()
})

server.use(main)

server.listen(3001, () => console.log('server stared on port 3001'))
