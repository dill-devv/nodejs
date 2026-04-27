export default async function handler(req: Request) {
    return new Response('<p>dynamic para</p>', {
        headers: {"Content-Type": "text/html"}
    });
}