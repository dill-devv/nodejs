import {VercelRequest, VercelResponse} from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Allow-Content-Allow-Methods', 'GET, OPTIONS')
    
    if (req.method === "OPTIONS") {res.status(200)}
    res.write('Request received')
    res.end()
}