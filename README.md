# Kanaya Lal Khatri — Portfolio

A modern, animated developer portfolio built with **Next.js 16 + Tailwind CSS v4 + Framer Motion**.

## 🚀 Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## ✏️ Edit your content

All text (profile, experience, projects, skills) lives in **one file**:

```
src/data/resume.ts
```

Update your real **LinkedIn / GitHub URLs** there (currently placeholders).

### Add your resume PDF
Drop your CV into the `public/` folder as:

```
public/Kanaya_Lal_Khatri_Senior_Mobile_Developer.pdf
```

The "Resume" button will then download it automatically.

## 🌐 Deploy FREE on Vercel

1. Push this folder to a GitHub repo.
2. Go to **https://vercel.com** → sign in with GitHub.
3. Click **Add New → Project** → import the repo → **Deploy**.
4. You'll get a free live URL like `kanayalal.vercel.app` to share on LinkedIn / with clients.

> Alternatively: deploy to **Netlify** or **Cloudflare Pages** (all free).

## 🧱 Tech / Extensions used
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll & entrance animations)
- lucide-react + react-icons (icons)
- clsx + tailwind-merge (utilities)
