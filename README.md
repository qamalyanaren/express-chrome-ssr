# express-chrome-ssr
# Server side rendering with puppeteer / headless chrome

This repo is meant to be an example of implementing nodejs, expressjs, and puppeteer for server side rendering using headless chrome.

To boost performance, the same chrome instance is reused on sequential loads.

### Packages used

Open source projects:

* [Express] - Serving the requests
* [Puppeteer] - Headless Chrome Node.js API

### Installation

[Node.js 8+](https://nodejs.org/) is required to run.

Install from github (not published on npm yet):
```sh
$ npm install https://github.com/qamalyanaren/express-chrom-ssr
or
$ yarn add https://github.com/qamalyanaren/express-chrom-ssr
```

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/qamalyanaren/express-chrom-ssr
$ cd express-chrom-ssr
$ npm install (or yarn install)
$ npm run dev (or yarn dev)
```

For build and production environments...

```sh
$ git clone https://github.com/qamalyanaren/express-chrom-ssr
$ cd express-chrom-ssr
$ npm install (or yarn install)
$ npm run build && npm run start (or yarn build && yarn start)
```

### Usage

Specifying a port is optional, the default one is 3000

The script has two url's (you can replace localhost with your domain if running it on server or virtual box)

* `http://localhost:3000/ssr?url=THE_URL_TO_RENDER` - Will return server side rendered html of the url

### Development

Want to contribute? Great!
Open your favorite Terminal and run these commands.

Go to the project folder and run:

```sh
$ npm run dev (or yarn dev)
```

A server will be spawned accesible on [localhost:3000](http://localhost:3000) with live reload when changes are done.

#### Building for source
For production release:
```sh
$ npm run build (or yarn build)
```

#### TROUBLESHOOTING:
https://medium.com/@ssmak/how-to-fix-puppetteer-error-while-loading-shared-libraries-libx11-xcb-so-1-c1918b75acc3
