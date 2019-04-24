const Modbus = require("../src/modbus");

describe('modbus 모듈 확인 ', function () {
    let modbus
    beforeEach(() => {
        modbus = new Modbus(1, 1000, "127.0.0.1", "502")
    })
    it('should read from "modbusSlave"', function () {
        expect(modbus.readHoldingRegister(0, 0)).toEqual(20000)
    })
})
