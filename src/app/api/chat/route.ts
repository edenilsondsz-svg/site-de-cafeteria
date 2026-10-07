// Proxy entre o widget do chat (navegador) e o webhook do n8n.
// Como o navegador só fala com o próprio site, o CORS do n8n deixa de importar.
const N8N_CHAT_URL =
  process.env.N8N_CHAT_WEBHOOK_URL ??
  "https://n8n.srv2040451.hstgr.cloud/webhook/d67ce001-1a65-4633-9086-dcf75b8cb10a/chat";

const MAX_BODY_BYTES = 20_000;

export async function POST(request: Request) {
  const body = await request.text();

  if (body.length > MAX_BODY_BYTES) {
    return Response.json({ error: "Mensagem muito grande." }, { status: 413 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(N8N_CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": request.headers.get("content-type") ?? "application/json",
      },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(60_000),
    });
  } catch {
    return Response.json(
      { error: "O assistente está indisponível no momento." },
      { status: 502 },
    );
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "application/json",
      "Cache-Control": "no-store",
    },
  });
}
