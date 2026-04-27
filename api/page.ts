import {VercelRequest} from '@vercel/node'

export default async function handler(req: VercelRequest) {
    return new Response('<p>dynamic para</p>', {
        headers: {"Content-Type": "text/html"}
    });
}