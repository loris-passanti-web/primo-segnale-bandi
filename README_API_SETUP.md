
# Radar Bandi BIP - Setup API

## STEP 1: TED Europa (2 minuti, gratis, senza carta)
1. Vai su https://ted.europa.eu/api/documentation/index.html
2. Clicca "Get API Key" / "Request API key" 
3. Inserisci email @bip-group.com -> ti arriva key immediata
4. Copia la key

Alternativa: TED Search API funziona anche SENZA key anonimo, ma con key è più stabile.

## STEP 2: ANAC BDNCP (5 minuti, gratis, serve SPID/CIE)
1. Vai su https://dati.anticorruzione.it -> in alto "API e Open Data"
2. Clicca "Richiedi accesso API BDNCP" -> ti porta su PDND https://selfcare.pagopa.it
3. Login con SPID (o CIE)
4. Crea nuovo Ente/Azienda: "BIP" -> Crea client per API "ANAC - BDNCP - bandi"
5. Ti genera:
   - CLIENT_ID (es: 8c7d... )
   - CLIENT_SECRET (es: abc123... )
6. Copia entrambi

Per ora puoi anche lasciare ANAC vuoto - il tool funzionerà già con solo TED (12-20 bandi al giorno).

## STEP 3: Metti le chiavi su GitHub
1. Vai su GitHub -> tuo repo primo-segnale-bandi -> Settings -> Secrets and variables -> Actions -> New repository secret
2. Crea 3 secret:
   - ANAC_CLIENT_ID = incolla client_id
   - ANAC_CLIENT_SECRET = incolla secret
   - TED_API_KEY = incolla key TED (opzionale ma consigliato)
3. Fatto!

## STEP 4: Attiva Action
1. Su GitHub -> Actions -> abilita workflows
2. Clicca "Radar Bandi - Daily LIVE" -> Run workflow -> Run
3. Dopo 1 minuto, in public/gare.json vedrai i bandi veri set/ott 2026
4. Cloudflare radar-bandi si aggiorna automatico e mostra i bandi

Da domani ogni giorno alle 06:47 gira da solo e committa gare.json aggiornato.
