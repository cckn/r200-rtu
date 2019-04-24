const config = require('../src/config')


describe('config', function () {
    it('should get gw ip', function () {
        expect(config.get(["gw"])).toEqual("192.168.0.1")
    });
});
