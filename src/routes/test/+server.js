export function GET({ url }) {
	console.log("url:", url);
	return new Response('Ok');
}
