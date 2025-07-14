import { json } from "@remix-run/node";
// CORRECT way: absolute URL to Fiber backend

export async function loader() {
    const api = "http://localhost:3000";
    const res = await fetch(`${api}/api/hello`);
    const data = await res.json();
    return json(data);
}
