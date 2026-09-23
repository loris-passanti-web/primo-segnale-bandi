export default {
  async fetch() {
    const RAW = "https://raw.githubusercontent.com/loris-passanti-web/primo-segnale-bandi/main/public/gare.json";
    let d = { gare: [], aggiornato: "", totale_affini: 0 };
    try { d = await (await fetch(RAW, {cf:{cacheTtl:30}})).json(); } catch {}
    const html = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Radar Bandi</title>
    <style>body{font-family:system-ui;max-width:900px;margin:auto;padding:24px;background:#f8fafc} .card{border:1px solid #ddd;background:#fff;border-radius:16px;padding:16px;margin:12px 0}</style>
    <h1>🎯 Radar Bandi BIP LIVE</h1>
    <p>Aggiornato: ${d.aggiornato} - <b>${d.totale_affini} bandi affini</b> - filtro: PMO, change, processi TO BE, formazione, agile</p>
    ${d.gare.map(g=>`<div class=card><b>${g.ente}</b><h3>${g.oggetto}</h3>${g.importo} - Scad ${g.scadenza} - Score ${g.score}<br><a href="${g.url}" target="_blank">Apri bando</a></div>`).join('')}
    <p style="font-size:12px">Auto giornaliero 06:47 - no istituzione, solo TED pubblico</p>`;
    return new Response(html, {headers:{"content-type":"text/html; charset=utf-8"}});
  }
}
