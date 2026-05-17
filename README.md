# allisontaub.com — personal site

Static, single-page site. Nothing to build — just HTML, CSS, inline JSX (transpiled in-browser by Babel), and assets.

## Deploy to GitHub Pages

1. **Create a new repo** on GitHub. For a "user site" (URL = `https://<username>.github.io`), name the repo `<username>.github.io`. For a "project site" (URL = `https://<username>.github.io/<repo-name>/`), name it anything (e.g. `personal-site`).

2. **Push these files to `main`** (everything in this folder, including `.nojekyll`):
   ```
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

   Or use the GitHub web UI: "Add file → Upload files" and drag this whole folder in.

3. **Enable Pages**: Repo → **Settings → Pages** → "Build and deployment" → Source: **Deploy from a branch** → Branch: **main**, Folder: **/ (root)** → Save.

4. **Wait ~30 seconds**, then visit the URL Pages gives you. Done.

## Custom domain (optional)

1. Buy `allisontaub.com` (Namecheap, Cloudflare Registrar, Porkbun — ~$12/yr).
2. In your domain registrar's DNS, add:
   - `A` records pointing `@` to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record pointing `www` to `<username>.github.io`
3. In the repo's **Settings → Pages**, enter your domain in "Custom domain" and save (this creates a `CNAME` file in the repo).
4. Check "Enforce HTTPS" once the cert provisions (a few minutes).

## File layout

```
index.html         entry point
site/              styles + JSX components
  styles.css
  data.jsx         all content (resume, archive, etc) — edit here
  components.jsx
  sections-a.jsx
  sections-b.jsx
  app.jsx
  image-slot.js
images/            photos, gifs, video
.nojekyll          tells GitHub Pages not to run Jekyll
```

## Editing content

Almost everything lives in `site/data.jsx` — the archive entries, timeline, skills, contact info. The site reloads with any edit; no build step.
