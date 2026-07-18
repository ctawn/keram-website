export async function POST(request: Request) {
  const body = await request.json() as Record<string, string>;
  if (body.website) return Response.json({ ok: true });
  if (!body.name || body.name.length < 2 || !body.phone || !body.destination) return Response.json({ error: "Invalid enquiry" }, { status: 400 });
  const url = process.env.SUPABASE_URL; const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return Response.json({ error: "Enquiry service is not configured" }, { status: 503 });
  const response = await fetch(`${url}/rest/v1/enquiries`, { method: "POST", headers: { apikey: key, authorization: `Bearer ${key}`, "content-type": "application/json", prefer: "return=minimal" }, body: JSON.stringify({ name: body.name.trim(), phone: body.phone.trim(), destination: body.destination.trim(), locale: body.locale === "ar" ? "ar" : "en", source: "website" }) });
  return response.ok ? Response.json({ ok: true }) : Response.json({ error: "Unable to save enquiry" }, { status: 502 });
}
