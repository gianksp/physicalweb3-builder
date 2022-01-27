[![PhysicalWeb3](https://i.ibb.co/6BTsQkw/Screenshot-2022-01-27-at-18-48-53.png)](https://www.youtube.com/embed/MIKv-cEfQpU)
# PW3Builder Platform
---------
## _A Moralis & Avalanche Hackathon project 2022_

## What is it?
[The Physical Web3](https://physicalweb3.com) is a permissionless platform that allows users to expose smart contract functionalities through a mobile web3 app prodiving a URL that can be embedded it into NFC tags or QR Codes. It offers a no code/low code dApp builder that is a user-friendly platform for creating blockchain based applications from templates, much like WIX or Squarespace allow you to create web ready experiences in web 2.0, PW3Builder lets you do it in web 3.0 this time leveraging the whole power of blockchain.

## Scope of project

#### "The simplest way to create dApps"

The PW3Builder is a dApp capable of launching PW3Apps from templates. It achieves it by leveraging smart contract templates that compiles and deployes while allowing users to configure look and feel and functionalities around the dApp. It offers and advanced preview mechanism that allows accessing the PWApp generated from the browser.

## How it works?

[Creating a dApp with the PW3Builder](https://www.youtube.com/watch?v=xOX2avYFNWA)
[End user experience mobile](https://www.youtube.com/watch?v=MIKv-cEfQpU)

## Features

- No code solution for creating and managing dApps capables of sending and receiving payments and data
- Guided mobile experience with built in deeplinks and responsive
- Built on top of Moralis and Smart Contracts powering the templates in Avalanche


## Tech

PhysicalWeb3 uses a number of technologies and networks:

- [Moralis](https://moralis.io) - Web3 dapps backend as a service
- [Avalanche](https://www.avax.network/) - Avalanche is an open, programmable smart contracts platform for decentralized applications.
- [Chainlink](https://chain.link/) - Chainlink's decentralized oracle network provides reliable, tamper-proof inputs and outputs for complex smart contracts on any blockchain.
- [Covalent](https://www.covalenthq.com/) - Covalent provides a unified API bringing visibility to billions of blockchain data points. We use it to display price in USD for transactions from the dApps

## Smart Contracts
- EVM contracts can be found in the public folder in `public/contracts`

## Getting Started

First, run the development server:

```bash
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Require setting up .env with
```
REACT_APP_MORALIS_APP_ID=<Your Moralis Server AppId>
REACT_APP_MORALIS_SERVER_URL=<Your Moralis Server full URL>
```