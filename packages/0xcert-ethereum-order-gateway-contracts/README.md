<img src="https://github.com/0xcert/framework/raw/master/assets/cover-sub.png" />

> Smart contracts used by the order gateway on the Ethereum blockchain.

The [0xcert Framework](https://docs.0xcert.org) is a free and open-source JavaScript library that provides tools for building powerful decentralized applications. Please refer to the [official documentation](https://docs.0xcert.org) for more details.

This module is one of the bricks of the [0xcert Framework](https://docs.0xcert.org). It's written with [TypeScript](https://www.typescriptlang.org) and it's actively maintained. The source code is available on [GitHub](https://github.com/0xcert/framework) where you can also find our [issue tracker](https://github.com/0xcert/framework/issues).

**Warning about deploying OrderGateway smart contract**

To prevent from replay attacks (signed order created on testnet can be executed on mainnet), the order signing mechanism includes the contract address in the order you sign. This way, only a specific smart contract address can execute the signed order.

Ethereum [`CREATE2`](http://eips.ethereum.org/EIPS/eip-1014) and other methods provide ways of deploying the same contract on different networks that end up with the same contract address. This is the reason this warning exists. If you are deploying the OrderGateway yourself or if you are using a third-party deployment that you do not trust, this could become a possible vulnerability. 

All 0xcert-deployed addresses are available in [Documentation](https://docs.0xcert.org/api/ethereum.html#public-addresses). We will never deploy smart contract on different networks in a way that would assign it the same contract addresses.