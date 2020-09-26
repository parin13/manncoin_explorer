var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var mann = require("./coins/mann.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"MANN": mann,

	"coins":["BTC", "LTC", "MANN"]
};