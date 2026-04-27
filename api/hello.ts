import type {VercelRequest, VercelResponse} from '@vercel/node'

function page(title: string, content: string) {
    return `
        <html>
            <body>
                <title>${title}</title>
                ${content}
            </body>
        </html>
    `
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).send(page('hi guys', '<button>youtube</button>'));
}