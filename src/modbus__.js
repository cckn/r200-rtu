'use strict'

const modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()
const options = {
    'host': '127.0.0.1',
    'port': '502'
}
const client = new modbus.client.TCP(socket)

socket.on('connect', async function () {
    const data = await client.readHoldingRegisters(0, 10)
    console.log(data.response._body.valuesAsArray)
    //
    // .then(function (resp) {
    //     console.log(resp.response._body.valuesAsArray)
    //     socket.end()
    // }).catch(function () {
    // console.error(require('util').inspect(arguments, {
    //     depth: null
    // }))
    // socket.end()
    // })
})

socket.on('error', console.error)
socket.connect(options)
