const Modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()


class myModbus {
    constructor(unitId, timeout, host, port) {
        this.client = new Modbus.client.TCP(socket, unitId, timeout)
        const options = {
            'host': host,
            'port': port,
        }

        socket.on('connect', function () {

            // make some calls

            console.log("connect")


        })
        socket.connect(options)
    }

    async readHoldingRegister(_, __) {
        this.data = await this.client.readHoldingRegisters(0, 2)
        console.log(await this.data)
        return await this.data.response._body.valuesAsArray
        // this.client.readHoldingRegisters(0, 2).then(function (resp) {
        //     // resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
        //     // the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>
        //     console.log(resp)
        //     return resp
        // }, console.error)

        // return 30000

    }
}


module.exports = myModbus


if (require.main === module) {
    const modbus = new myModbus(1, 1000, "127.0.0.1", 502)
    modbus.readHoldingRegister(1, 2)
    console.log("test")
}
