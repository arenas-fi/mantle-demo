# arenas Credit Delegation Contracts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

arenas credit delegation is a collection of smart contracts designed to bring peer to pool for arenas's credit delegation. This repository contains the source code for the smart contracts, as well as unit tests and deployment scripts.

## Table of Contents

- [arenas Credit Delegation Contracts](#arenas-credit-delegation-contracts)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 12.x or higher)
- [npm](https://www.npmjs.com/get-npm) (included with Node.js)
- [Hardhat](https://hardhat.org/) (version 2.x or higher)
- [Slither](https://github.com/crytic/slither)

### Installation

Change to the project directory:

```bash
cd contracts
```

Install the dependencies:

```bash
npm install
```

Usage
To compile the smart contracts, run:

```bash
npm run compile
```

Testing
To run the unit tests:

```bash
npm run test
```

Deployment
To deploy the smart contracts to a live network, modify the hardhat.config.ts and .env file with the appropriate settings, then run:

```bash
npm run deploy
```

Mantle network v1 (prod-d)
Implementation deployed to 0x73f2aeD9bd41829257b73CfCc7BaEC4CAB01AD0e 
CDVFactory deployed to 0xC5bB946750bd9E410343E8aA7BE648771ff477e0
