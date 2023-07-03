import http2 from 'node:http2';
import fs from 'node:fs';
import polka from 'polka';
import { handler } from './build/handler.js';

const app = polka().use(handler);

const httpsServer = http2.createSecureServer(
	{
		allowHTTP1: true,
		cert: fs.readFileSync('./ssl/cert.pem'),
		key: fs.readFileSync('./ssl/key.pem'),
	},
	app.handler
);

httpsServer.listen(3000, () => {
	console.log(`Listening on port 3000 (HTTPS)`);
});
