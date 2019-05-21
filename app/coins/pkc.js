var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({
	precision: 8,
	rounding: 8
});

var btcCurrencyUnits = [{
		name: "PKC",
		multiplier: 1,
		default: true,
		values: ["", "pkc", "PKC"],
		decimalPlaces: 8
	},
	{
		name: "mPKC",
		multiplier: 1000,
		values: ["mpkc"],
		decimalPlaces: 5
	},
	{
		name: "pits",
		multiplier: 1000000,
		values: ["pits"],
		decimalPlaces: 2
	},
	{
		name: "sdf",
		multiplier: 100000000,
		values: ["sdf"],
		decimalPlaces: 0
	}
];

module.exports = {
	name: "PKcoin",
	ticker: "PKC",
	logoUrl: "/img/logo/pkc.png",
	siteTitle: "PKcoin Explorer",
	siteDescriptionHtml: "<b>BTC Explorer</b> is <a href='https://https://gitee.com/zhanghoufu/pkc-rpc-explorer). If you run your own [Bitcoin Full Node](https://bitcoin.org/en/full-node), **BTC Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://https://gitee.com/zhanghoufu/pkc-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle: "Bitcoin Full Node",
	nodeUrl: "https://bitcoin.org/en/full-node",
	demoSiteUrl: "https://btc.chaintools.io",
	miningPoolsConfigUrls: [
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/btccom/Blockchain-Known-Pools/master/pools.json"
	],
	maxBlockWeight: 4000000,
	currencyUnits: btcCurrencyUnits,
	currencyUnitsByName: {
		PKC: btcCurrencyUnits[0],
		mPKC: btcCurrencyUnits[1],
		pits: btcCurrencyUnits[2],
		sat: btcCurrencyUnits[3]
	},
	baseCurrencyUnit: btcCurrencyUnits[3],
	feeSatoshiPerByteBucketMaxima: [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		15,
		20,
		25,
		50,
		75,
		100,
		150
	],
	genesisBlockHash: "884f6e34c0be9c236842cb54006a18b28d3490dfcc6ee18a0717c06fa5fd7919",
	genesisCoinbaseTransactionId: "9fe0b536754a727c4851a12b3f2d7132c60daea5cd5c13997b71b5f904e431b5",
	genesisCoinbaseTransaction: {
		hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff01007400d3c7a2b100232103f44b1101ebe92c43dfcd28b45c8c937fa8bf6ecbdde90503202e40728f7a1429ac00000000",
		txid: "9fe0b536754a727c4851a12b3f2d7132c60daea5cd5c13997b71b5f904e431b5",
		hash: "9fe0b536754a727c4851a12b3f2d7132c60daea5cd5c13997b71b5f904e431b5",
		size: 172,
		vsize: 172,
		version: 1,
		confirmations: 475000,
		vin: [{
			coinbase: "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
			sequence: 4294967295
		}],
		vout: [{
			value: 500,
			n: 0,
			scriptPubKey: {
				asm: "03f44b1101ebe92c43dfcd28b45c8c937fa8bf6ecbdde90503202e40728f7a1429 OP_CHECKSIG",
				hex: "2103f44b1101ebe92c43dfcd28b45c8c937fa8bf6ecbdde90503202e40728f7a1429ac",
				reqSigs: 1,
				type: "pubkey",
				addresses: ["PNTDeuxG3d7tfeVQwCD7Ly6akw2hKYawFZ"]
			}
		}],
		blockhash: "884f6e34c0be9c236842cb54006a18b28d3490dfcc6ee18a0717c06fa5fd7919",
		time: 1557884787,
		blocktime: 1557884787
	},
	genesisCoinbaseOutputAddressScripthash: "8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [{
		type: "blockheight",
		date: "2019-01-03",
		blockHeight: 0,
		blockHash: "884f6e34c0be9c236842cb54006a18b28d3490dfcc6ee18a0717c06fa5fd7919",
		summary: "The PkCoin Genesis Block.",
		alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. This block was mined by Bitcoin's creator Satoshi Nakamoto. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
		referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
	}],

	exchangeRateData: {
		jsonUrl: "https://www.bcones.com/api/market/tickers/ticker?symbol=usdt_cbcc",
		exchangedCurrencyName: "usd",
		responseBodySelectorFunction: function (responseBody) {
			if (responseBody && responseBody.data.High) {
				return responseBody.data.High;
			}

			return -1;
		}
	},
	blockRewardFunction: function (blockHeight) {
		var eras = [new Decimal8(500)];
		for (var i = 1; i < 37; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 525600);

		return eras[index];
	}
};