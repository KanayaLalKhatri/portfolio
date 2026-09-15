# How to add your real app screenshots

Right now each project shows a styled **mock app screen** inside a phone frame.
To show your **real screenshots**, do this:

1. Take a screenshot from your app/emulator (portrait, ideally ~1080×2340 px).
2. Save the image into this folder: `public/projects/`
   e.g. `public/projects/angle.png`
3. Open `src/data/resume.ts`, find that project, and add an `image` field:

   ```ts
   {
     name: "Angle",
     image: "/projects/angle.png",   // 👈 add this line
     ...
   }
   ```

4. Save — the phone mockup will now display your screenshot instead of the mock screen.

Tip: PNG or JPG both work. Keep a 9:19.5 (portrait phone) ratio for the best fit.
