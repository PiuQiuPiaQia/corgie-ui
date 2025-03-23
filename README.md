# Visualizing Graph Neural Networks with CorGIE: Corresponding a Graph to its Embedding

CorGIE is a visualization tool for graph neural networks.  This repo hosts the frontend code of CorGIE, and [the other repo](https://github.com/zipengliu/corgie-preprocess-server) hosts the backend code.

## Demo

[http://corgie.site](http://corgie.site)

You can upload your own datasets [here](http://corgie.site/#/upload).

## Installation

### Environment Requirements

- [Node.js](https://nodejs.org/en/download/) version 16.20.2 (or compatible version)
- [Yarn](https://yarnpkg.com/) version 1.22.22 (recommended)

Note: The project has been tested and verified to work with these specific versions. Other versions may work but are not guaranteed.

### Setup Instructions

To install dependencies, run `yarn install` in the project root directory.

To start the application, run `yarn start`.  You will be able to open the page with the URL `http://localhost:3000` on your browser.

Note: this would serve the data files locally from `public/data/` statically, so you would not be able to use the upload page.  To upload your own dataset, you need to install the [backend](https://github.com/zipengliu/corgie-preprocess-server) or use our [demo website](http://corgie.site).

## Paper

Zipeng Liu, Yang Wang, Jürgen Bernard, Tamara Munzner.  Visualizing Graph Neural Networks with CorGIE: Corresponding a Graph to Its Embedding.  TVCG 2022.

[arxiv link](https://arxiv.org/abs/2106.12839)



