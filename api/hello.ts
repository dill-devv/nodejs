import type {VercelRequest, VercelResponse} from '@vercel/node'
export async function hiGeorge(req: VercelRequest, res: VercelResponse) {
    return new Response('hi please work')
}