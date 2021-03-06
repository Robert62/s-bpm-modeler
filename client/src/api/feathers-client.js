import 'babel-polyfill'
import feathers from 'feathers'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'
import rx from 'feathers-reactive'
import RxJS from 'rxjs'

const socket = io('http://localhost:3030', {transports: ['websocket']})

const feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))
  .configure(rx(RxJS, {idField: '_id'}))

feathersClient.service('/users')
feathersClient.service('/process-groups')
feathersClient.service('/process-models')
feathersClient.service('/process-layers')
feathersClient.service('/subjects')
feathersClient.service('/interface-subjects')
feathersClient.service('/messages-exchanges')
feathersClient.service('/message-specifications')
feathersClient.service('/states')
feathersClient.service('/send-transitions')
feathersClient.service('/receive-transitions')
feathersClient.service('/function-transitions')

export default feathersClient
