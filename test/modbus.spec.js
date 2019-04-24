// import * as modbus from "../src/modbus";

const modbus = require("../src/modbus")


describe('modbus 모듈 확인 ', function () {
    it('should read from "modbusSlave"', function () {
        expect(modbus(0, 0)).toEqual(30000)
    });
});
