const Modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()
const client = new Modbus.client.TCP(socket, 1, 1000)
const options = {
    'host': "127.0.0.1",
    'port': "502"
}

socket.on('connect', function () {

// make some calls

    client.readHoldingRegisters(0, 13).then(function (resp) {

// resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
// the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>

        console.log(resp);

    }, console.error);

});

socket.connect(options)
//
// export function read() {
//     return 30000
// }
