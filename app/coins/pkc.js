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
	logoUrl: "/img/logo/btc.png",
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
	genesisBlockHash: "286aa914aab3ad788587cffd7c8a39ec1e2a8bc7b0e078b16e120d6040616215",
	genesisCoinbaseTransactionId: "406d256a92b7202d95783cdfcccbb3df8065cda17648f3a6daeabea7c19917c6",
	genesisCoinbaseTransaction: {
		hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
		txid: "406d256a92b7202d95783cdfcccbb3df8065cda17648f3a6daeabea7c19917c6",
		hash: "406d256a92b7202d95783cdfcccbb3df8065cda17648f3a6daeabea7c19917c6",
		size: 454,
		vsize: 454,
		version: 1,
		confirmations: 475000,
		vin: [{
			coinbase: "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
			sequence: 4294967295
		}],
		vout: [{
			value: 50,
			n: 0,
			scriptPubKey: {
				asm: "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
				hex: "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
				reqSigs: 1,
				type: "pubkey",
				addresses: ["1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"]
			}
		}],
		blockhash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
		time: 1230988505,
		blocktime: 1230988505
	},
	genesisCoinbaseOutputAddressScripthash: "8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [{
			type: "blockheight",
			date: "2009-01-03",
			blockHeight: 0,
			blockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
			summary: "The Bitcoin Genesis Block.",
			alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. This block was mined by Bitcoin's creator Satoshi Nakamoto. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		}
	],

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
		var eras = [new Decimal8(50)];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 210000);

		return eras[index];
	}
};