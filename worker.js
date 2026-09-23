
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/gare" || url.pathname === "/gare.json") {
      // Serve il file generato dalla GitHub Action
      if (env.ASSETS) {
        try {
          // Prova a servire public/gare.json
          const req = new Request(new URL("/gare.json", request.url).toString(), request);
          const res = await env.ASSETS.fetch(req);
          if (res.ok) return new Response(await res.text(), { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Cache-Control": "no-cache" } });
        } catch {}
      }
      // Fallback
      return new Response(JSON.stringify({ gare: [], aggiornato: new Date().toISOString(), fonti: ["In attesa prima run GitHub Action"] }), { headers: { "Content-Type": "application/json" } });
    }
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response("Not found", { status: 404 });
  },
  async scheduled(event, env, ctx) {
    // Il cron vero è su GitHub Action alle 06:47, questo è solo warmup
    ctx.waitUntil(fetch("https://radar-bandi.loris-passanti.workers.dev/api/gare").catch(()=>{}));
  }
};
