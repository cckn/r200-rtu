import * as modbus from "../src/modbus";


describe('modbus 모듈 확인 ', function () {
    it('should read from "modbusSlave"', function () {
        expect(modbus.read(0, 0)).toEqual(30000)
    });
});
