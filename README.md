# PKC RPC Explorer

Simple, database-free PKcoin blockchain explorer, via RPC. Built with Node.js, express, bootstrap-v4.

This tool is intended to be a simple, self-hosted explorer for the PKcoin blockchain, driven by RPC calls to your own PKcoind node. This tool is easy to run but currently lacks features compared to database-backed explorers.

I built this tool because I wanted to use it myself. Whatever reasons one might have for running a full node (trustlessness, technical curiosity, supporting the network, etc) it's helpful to appreciate the "fullness" of your node. With this explorer, you can not only explore the blockchain (in the traditional sense of the term "explorer"), but also explore the functional capabilities of your own node.

# Features

- Browse blocks
- View block details
- View transaction details, with navigation "backward" via spent transaction outputs
- View JSON content used to generate most pages
- Search supports transactions, blocks, addresses
- Optional transaction history for addresses by querying configurable ElectrumX servers
- Mempool summary, with fee, size, and age breakdowns
- RPC command browser and terminal
- Currently supports PKC, LTC (support for any PKcoin-RPC-protocol-compliant coin can be added easily)

# Getting started

The below instructions are geared toward PKC, but can be adapted easily to other coins.

## Prerequisites

1. Install and run a full, archiving node - [instructions](https://PKcoin.org/en/full-node). Ensure that your PKcoin node has full transaction indexing enabled (`txindex=1`) and the RPC server enabled (`server=1`).
2. Synchronize your node with the PKcoin network.
3. "Recent" version of Node.js (8+ recommended).

## Instructions

1. Clone this repo: `git clone https://github.com/janoside/PKC-rpc-explorer`
2. `npm install`
3. `npm run build`
4. Edit the "rpc" settings in [app/credentials.js](app/credentials.js) to target your node
5. Optional: Change the "coin" value in [app/config.js](app/config.js). Currently supported values are "PKC" and "LTC".
6. Optional: Add an ipstack.com API access key to [app/credentials.js](app/credentials.js). Doing so will add a map to the /peers page.
7. `npm start` to start the local server
8. Visit http://127.0.0.1:3002/

## Run via Docker

1. `docker build -t PKC-rpc-explorer .`
2. `docker run -p 3002:3002 -it PKC-rpc-explorer`
