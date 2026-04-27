import type {VercelRequest, VercelResponse} from '@vercel/node'
async function handler(req: VercelRequest, res: VercelResponse) {
    return new Response('hi please work')
}