import express from 'express';
import puppeteer from 'puppeteer';
import isbot from 'isbot'

// Routes
import { ssr } from './ssr.js'

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`I listen on http://localhost:${port}`))

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});


let browserWSEndpoint = null;
app.get('/ssr', async(req, res, next) => {

	const { url } = req.query;
	console.log('url', url);
	if (!url) {
		return res.status(400).send('Invalid url param: Example: ?url=https://binge.app');
	}
	console.log('isbot', isbot(req.get('user-agent')))
	if (!isbot(req.get('user-agent'))) {
		res.writeHead(301, { Location: url });
		res.end();
		return ;
	}
	// console.time(`URL_START:${url}`)
	// console.log(`browserWSEndpoint is::${(browserWSEndpoint)}`)
	// Spin new instance if we dont have an active one
	if (!browserWSEndpoint) {
		// const browser = await puppeteer.launch();
		const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
		browserWSEndpoint = await browser.wsEndpoint();
	}

	const { html, status } = await ssr(url, browserWSEndpoint);
	// console.timeEnd(`URL_START:${url}`)
	return res.status(status).send(html);
})
