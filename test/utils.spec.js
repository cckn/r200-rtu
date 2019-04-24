const utils = require("../src/utils");

test("sum test", () => {
    expect(utils.sum([3, 4])).toEqual(7)
    expect(utils.sum([])).toEqual(0)
})

