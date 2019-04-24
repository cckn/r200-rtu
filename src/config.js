const configData = require("../config.json")

class Config {
    static get(parameter) {
        return configData[parameter]
    }
}

module.exports = Config

if (require.main === module) {
    console.log(Config.get("gw1"))

}
