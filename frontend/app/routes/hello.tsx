import { json } from "@remix-run/node";
// CORRECT way: absolute URL to Fiber backend

export async function loader() {
    const api = process.env.BACKEND_SERVER_URL;
    if (!api) throw new Error("BACKEND_SERVER_URL is not defined");
    const res = await fetch(`${api}/api/hello`);
    const data = await res.json();
    return json(data);
}
