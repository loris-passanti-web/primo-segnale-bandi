# Primo Segnale BIP - LIVE ANAC/TED

## Cosa fa ora (LIVE)
- Worker Cloudflare che gira ogni giorno alle 08:47 CET (06:47 UTC cron)
- Endpoint /api/gare che chiama:
  1. ANAC BDNCP OpenData (https://dati.anticorruzione.it/opendata)
  2. TED Europa Search API (https://ted.europa.eu/api)
  3. Fallback mock BIP se API non rispondono

## Deploy LIVE (sostituisce versione mock)

1. Crea cartella:
   bip-radar-live/
   - worker.js (questo file)
   - wrangler.toml
   - public/
     - index.html (il file partner-ready che hai già)

2. Struttura:
   public/index.html = frontend che chiama /api/gare
   worker.js = backend con cron 08:47

3. Deploy:
   npx wrangler login
   npx wrangler deploy

Oppure da dashboard:
- Workers & Pages > Create > Upload assets con struttura public/
- Poi Edit code > incolla worker.js

4. Frontend deve chiamare fetch("/api/gare") invece di mock.

## Fonti aggiuntive da aggiungere dopo:
- MEPA (Acquistinrete): scraping via API Consip
- Piattaforme certificate: TuttoGare, Maggioli, Traspare
- Gazzetta Ufficiale V Serie
- Regione Lazio / Comune Roma (per BIP Roma)
