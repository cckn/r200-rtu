'use strict'

const modbus = require('jsmodbus')
const net = require('net')

const options = [{
  'host': '127.0.0.1',
  'port': '502'
}, {
  'host': '127.0.0.1',
  'port': '5020'
},]


function test(host, port = 502, start = 0, count = 1, unitId = 1) {
  return new Promise(
    (resolve, reject) => {
      const socket = new net.Socket()

      const client = new modbus.client.TCP(socket, unitId, 1000)

      socket.on('connect', function () {
        // console.log(option)
        client.readHoldingRegisters(start, count)
          .then(function (resp) {
            console.log(resp.response._body.valuesAsArray)
            socket.end()
            resolve(resp.response._body.valuesAsArray)
          }).catch(function () {
          console.error(require('util').inspect(arguments, {
            depth: null
          }))
          socket.end()
        })
      })

      // socket.on('error', reject(error))

      socket.connect({
        'host': host,
        'port': port
      })
    }
  )


}


// module.exports = myModbus


function f() {
  test("127.0.0.1", 502, 0, 10)
  test("127.0.0.1", 5020, 0, 4)
}

if (require.main === module) {
  // const modbus = new myModbus(1, 1000, "127.0.0.1", 502)
  // modbus.readHoldingRegister(1, 2)
  // console.log("test")
  f()

}
