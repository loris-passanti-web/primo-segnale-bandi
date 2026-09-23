# Primo Segnale - Radar Gare BIP (Cloudflare + GitHub)

Tool interno BIP per intercettare bandi PA affini a Change, Processi AS-IS/TO-BE, BPR, PMO.

## Deploy in 2 minuti (gratis, no crediti)

1. Crea repo su GitHub: `primo-segnale-bip`
2. Carica questi file (index.html + questo README)
3. Vai su https://dash.cloudflare.com > Workers & Pages > Create > Pages > Connect to Git
4. Seleziona repo `primo-segnale-bip` > Build settings: Framework = None, Build command = (vuoto), Output = /
5. Deploy -> ti da link tipo https://primo-segnale-bip.pages.dev

Login:
- Email deve contenere `bip` (es. nome@bip-group.com)
- Password: BIP4Team2026

## Sicurezza extra (consigliata)
Su Cloudflare Pages > Settings > Access > Add policy: Allow only emails ending with @bip-group.com, @bip.it, @bipconsulting.com

## Aggiornamento automatico ogni mattina
Per ora il refresh è simulato. Per dati ANAC live, aggiungi Worker con cron 08:47 che chiama https://dati.anticorruzione.it/opendata

## Excel OEPV
Bottone "Scarica Excel OEPV" genera file .xls con 2 fogli: Requisiti + Criteri punteggio, senza librerie esterne.
