var credentials = require("./credentials.js");
var coins = require("./coins.js");

var currentCoin = "BTC";

module.exports = {
  cookiePassword: "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
  demoSite: false,
  coin: currentCoin,

  rpcBlacklist: [
    "addnode",
    "backupwallet",
    "bumpfee",
    "clearbanned",
    "createmultisig",
    "disconnectnode",
    "dumpprivkey",
    "dumpwallet",
    "encryptwallet",
    "generate",
    "generatetoaddress",
    "getaccountaddrss",
    "getaddressesbyaccount",
    "getbalance",
    "getnewaddress",
    "getrawchangeaddress",
    "getreceivedbyaccount",
    "getreceivedbyaddress",
    "gettransaction",
    "getunconfirmedbalance",
    "getwalletinfo",
    "importaddress",
    "importmulti",
    "importprivkey",
    "importprunedfunds",
    "importpubkey",
    "importwallet",
    "keypoolrefill",
    "listaccounts",
    "listaddressgroupings",
    "listlockunspent",
    "listreceivedbyaccount",
    "listreceivedbyaddress",
    "listsinceblock",
    "listtransactions",
    "listunspent",
    "listwallets",
    "lockunspent",
    "logging",
    "move",
    "preciousblock",
    "pruneblockchain",
    "removeprunedfunds",
    "rescanblockchain",
    "savemempool",
    "sendfrom",
    "sendmany",
    "sendtoaddress",
    "sendrawtransaction",
    "setaccount",
    "setban",
    "setnetworkactive",
    "signmessage",
    "signmessagewithprivatekey",
    "signrawtransaction",
    "stop",
    "submitblock",
    "verifychain",
    "walletlock",
    "walletpassphrase",
    "walletpassphrasechange"
  ],

  // https://uasf.saltylemon.org/electrum
  electrumXServers: [{
      host: "192.168.0.211",
      port: 50001,
      protocol: "tcp"
    }
    // set host & port of electrum servers to connect to
    // protocol can be "tls" or "tcp", it defaults to "tcp" if port is 50001 and "tls" otherwise
    // {host: "electrum.example.com", port:50002, protocol: "tls"}, ...
  ],

  site: {
    blockTxPageSize: 20,
    addressTxPageSize: 20,
    txMaxInput: 15,
    browseBlocksPageSize: 20
  },

  credentials: credentials,

  // Edit "ipWhitelistForRpcCommands" regex to limit access to RPC Browser / Terminal to matching IPs
  ipWhitelistForRpcCommands: /^(127\.0\.0\.1)?(\:\:1)?$/,

  siteTools: [{
      name: "Node Status",
      zhname: "节点状态",
      zhdesc: "当前节点概览：版本，网络，启动时间等",
      url: "/node-status",
      desc: "Summary of this node: version, network, uptime, etc.",
      fontawesome: "fas fa-broadcast-tower"
    },
    {
      name: "Peers",
      url: "/peers",
      desc: "Detailed info about the peers connected to this node.",
      fontawesome: "fas fa-sitemap",
      zhname: "连接节点",
      zhdesc: "连接当前节点的其他节点详细信息"
    },

    {
      name: "Browse Blocks",
      url: "/blocks",
      desc: "Browse all blocks in the blockchain.",
      fontawesome: "fas fa-cubes",
      zhname: "浏览区块",
      zhdesc: "浏览区块链上的所有区块"
    },
    {
      name: "Transaction Stats",
      url: "/tx-stats",
      desc: "See graphs of total transaction volume and transaction rates.",
      fontawesome: "fas fa-chart-bar",
      zhname: "交易统计",
      zhdesc: "查看所有交易的总量和交易费率"
    },

    {
      name: "Mempool Summary",
      url: "/mempool-summary",
      desc: "Detailed summary of the current mempool for this node.",
      fontawesome: "fas fa-clipboard-list",
      zhname: "内存池概览",
      zhdesc: "查看当前节点内存池的概览详情"
    },
    {
      name: "Unconfirmed Transactions",
      url: "/unconfirmed-tx",
      desc: "Browse unconfirmed/pending transactions.",
      fontawesome: "fas fa-unlock-alt",
      zhname: "未确认交易",
      zhdesc: "浏览未确认或确认中的交易"
    }
    //,

    // {
    //   name: "RPC Browser",
    //   url: "/rpc-browser",
    //   desc: "Browse the RPC functionality of this node. See docs and execute commands.",
    //   fontawesome: "fas fa-book",
    //   zhname: "RPC接口浏览",
    //   zhdesc: "浏览当前节点的RPC方法，查看文档或执行命令"
    // },
    // {
    //   name: "RPC Terminal",
    //   url: "/rpc-terminal",
    //   desc: "Directly execute RPCs against this node.",
    //   fontawesome: "fas fa-terminal",
    //   zhname: "RPC命令行",
    //   zhdesc: "直接执行当前节点的RPC命令"
    // }
    // ,

    // {
    //   name: "PKCoin Fun",
    //   url: "/fun",
    //   desc: "See fun/interesting historical blockchain data.",
    //   fontawesome: "fas fa-certificate"
    // }
  ],

  donationAddresses: {
    coins: ["PKC", "LTC"],
    sites: {
      PKC: "https://pkc.chaintools.io",
      LTC: "https://ltc.chaintools.io"
    },

    PKC: {
      address: "3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe"
    },
    LTC: {
      address: "ME4pXiXuWfEi1ANBDo9irUJVcZBhsTx14i"
    }
  },
  headerDropdownLinks: {
    title: "TOKENS",
    links: []
  }
  // headerDropdownLinks: {
  //   title: "Related Sites",
  //   links: [{
  //       name: "PKcoin Explorer",
  //       url: "https://btc.chaintools.io",
  //       imgUrl: "/img/logo/btc.svg"
  //     },
  //     {
  //       name: "Litecoin Explorer",
  //       url: "https://ltc.chaintools.io",
  //       imgUrl: "/img/logo/ltc.svg"
  //     },
  //     {
  //       name: "Lightning Explorer",
  //       url: "https://lightning.chaintools.io",
  //       imgUrl: "/img/logo/lightning.svg"
  //     }
  //   ]
  // }
};