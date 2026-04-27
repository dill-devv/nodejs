import {VercelRequest, VercelResponse} from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    
    if (req.method === "OPTIONS") {return res.status(200).send('Options request received')}

    console.log(`res: ${res}`)
    console.log(`req: ${req}`)
    req.setHeader('Content-Type', 'text/plantext')
    return res.end('Request ended')
}