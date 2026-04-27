import {VercelRequest, VercelResponse} from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', "*"); // where you can access source from
    res.setHeader('Access-Control-Allow-Methods', "GET, OPTIONS"); // allowed methods
    res.setHeader('Access-Control-Allow-Headers', "Content-Type"); //type of headers allowed

    if (req.method === "OPTIONS") {
        res.status(200).end('Status 200 from OPTIONS request') // do NOT put return on this line vercel tweaks out
        console.log('200 OK')
        return;
    }

    res.write('get request received')
    console.log('Get request received')
    return res.end('ending response')
}