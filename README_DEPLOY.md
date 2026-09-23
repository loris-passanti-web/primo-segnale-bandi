FIX TRIGGER:

1. Vai su GitHub repo loris-passanti-web/primo-segnale-bandi
2. Cancella tutto e carica questi 3 file:
   - worker.js
   - wrangler.toml
   - index.html

3. Fai Commit -> Cloudflare redeploya in 20 sec e ora in Settings vedrai Trigger events sbloccato.

4. Poi vai in Settings -> Trigger events -> vedrai già cron 47 6 * * * (08:47 CET) attivo.

Se non si sblocca: vai in Settings -> Builds -> disconnetti Git e riconnetti, oppure fai Delete Worker e ricrea con 'Create Worker -> Import from GitHub'
