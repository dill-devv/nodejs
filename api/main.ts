import {VercelRequest, VercelResponse} from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    
    if (req.method === "OPTIONS") {res.status(200).send('Options request received')} else{
        res.write('Request received') // this shows up as response in postman
        res.end('\nended response') // also shows up as final part of response in postman
    }
}