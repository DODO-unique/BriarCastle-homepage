DESIGN NOTES

Restore footer instructions

The footer component was intentionally disabled and preserved in the repository inside src/components/footer.tsx (commented) and src/components/footer.css (commented). To restore the footer exactly as it was before stashing, follow these steps carefully:

1. Re-enable footer imports and render
   - Open src/App.tsx and undo the comment lines:
     - Uncomment the import: // import Footer from './components/footer'; → import Footer from './components/footer';
     - Uncomment the render: {/* <Footer /> */} → <Footer />

2. Restore component implementation
   - Open src/components/footer.tsx.
   - Locate the large commented block at the top that contains the original implementation (imports, JSX, styles import).
   - Remove the surrounding /* ... */ comment markers so the original implementation is active again.
   - Remove or replace the placeholder export default function Footer() { return null; } so the real Footer is exported.

3. Restore footer CSS
   - Open src/components/footer.css.
   - If the file contents are commented out, remove the comment markers (/* ... */) to re-enable the styles.
   - Alternatively, if you prefer an explicit override, ensure .footer-container { display: block; } is present and not overridden elsewhere.

4. Verify assets
   - Confirm the icon assets referenced by the footer exist in src/assets (e.g., GitHub_Invertocat_White_Clearspace.svg, InBug-White.png). If missing, restore them from backups or the design assets.

5. Run the dev server and test
   - Start the dev server: npm run dev
   - Open the site at the local dev URL and scroll to the bottom to confirm the footer appears and styles match expectations.
   - Check console for runtime errors (missing imports, asset 404s). Resolve any missing files or type errors.

6. Optional cleanup
   - If you restored the footer for testing only and want to re-disable it later, use the same steps in reverse. Keep this DESIGN.md as the canonical restore instruction.

Notes and context
- The footer was intentionally stashed to avoid interfering with the responsive work on the main content. The footer code and styles are preserved exactly inside the repo so restoration is straightforward.
- This file is intentionally short and action-oriented — follow the steps in order to restore the original behavior.

Recorded TODO
- A session TODO was created earlier with id "restore-footer" that outlines the same steps. See the session database if needed.

If you want, I can also restore the footer for you (make the changes and run the dev server) — say "Restore the footer now" and I will implement and test it.
