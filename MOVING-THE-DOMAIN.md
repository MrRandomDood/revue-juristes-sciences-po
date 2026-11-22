# Moving the domain from Netlify to Cloudflare

**Status (November 2026):** the site runs on Cloudflare at
https://revue-juristes-sciences-po.revue-ajsp.workers.dev (Worker `revue-juristes-sciences-po`, account
revue.ajsp@gmail.com, built from this GitHub repo). The domain `revuedesjuristesdesciencespo.fr` is still
registered at Wix and still points to the Netlify copy of the same site (project `cosmic-trifle-9725a7`).

Why it has not moved yet: a Cloudflare Worker only accepts a domain whose nameservers are Cloudflare's, and Wix
does not let us change the nameservers of a domain bought through Wix. So the domain registration has to leave
Wix first, and that needs the email address registered as the domain's contact.

## Already done
- Cloudflare Worker builds from GitHub on every push to `main`; all pages, PDFs and old Wix links checked.
- Domain added to Cloudflare (pending), with two DNS records copied from Wix, set to "DNS only":
  `A  revuedesjuristesdesciencespo.fr -> 75.2.60.5` and `CNAME  www -> cosmic-trifle-9725a7.netlify.app`.
  If Cloudflare has removed the pending domain by the time you do this, add it again (Account home -> Add a domain,
  Free plan) and recreate those two records as "DNS only".
- The domain has no email (no MX/TXT records), so nothing else needs copying.

## 1. Transfer the domain away from Wix (a few days)
1. Make sure someone can read the domain's contact email (Wix -> Domains -> the domain -> contact details).
2. Wix -> Domains -> the domain -> "Transfer away from Wix": unlock it and copy the transfer (auth) code.
3. At a registrar that sells .fr (for example OVHcloud or Gandi), order a **transfer** (not a new registration)
   and paste the code. It costs about one year of renewal.
4. Approve the transfer emails. Keep the Wix domain subscription until the transfer is complete.

## 2. Point the domain to Cloudflare
1. At the new registrar, set the nameservers to the two Cloudflare gives for this domain
   (they were `damien.ns.cloudflare.com` and `deb.ns.cloudflare.com`; check Cloudflare -> the domain -> Overview).
2. Wait for Cloudflare to mark the domain **Active** (email from Cloudflare). The site still shows the Netlify copy.

## 3. Switch to the Worker (5 minutes, no downtime)
1. Cloudflare -> the domain -> DNS -> Records: delete the `A` and `www CNAME` records that point to Netlify.
2. Cloudflare -> Workers & Pages -> `revue-juristes-sciences-po` -> Domains -> Add Domain:
   add `www.revuedesjuristesdesciencespo.fr`, then `revuedesjuristesdesciencespo.fr`.
3. Cloudflare -> the domain -> Rules -> Redirect Rules -> "Redirect from root to WWW" template, so the address
   without www forwards to `https://www.revuedesjuristesdesciencespo.fr` (the site's main address).
4. Check https://www.revuedesjuristesdesciencespo.fr shows no "Powered by Netlify" badge.

## 4. Clean up
- Netlify: remove the domain from the project, then delete the project. Delete `netlify.toml` from this repo.
- Wix: cancel the website (Premium) plan; once the transfer is done there is nothing left at Wix.
