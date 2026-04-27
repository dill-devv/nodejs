import {VercelRequest, VercelResponse} from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', "*"); // where you can access source from
    res.setHeader('Access-Control-Allow-Methods', "GET, OPTIONS"); // allowed methods
    res.setHeader('Access-Control-Allow-Headers', "Content-Type"); //type of headers allowed

    if (req.method === "OPTIONS") {
        return status(200)
    }

    res.write('get request received')
    return res.end('ending response')
}