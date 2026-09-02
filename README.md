# Perch

Local-first self-development tracker with an owl that grows as you do.

## Deploy
1. Create a GitHub repo (e.g. `perch`), push these four files plus README.
2. Settings → Pages → deploy from `main`, root.
3. Open the URL on your phone, Share → Add to Home Screen.

## Data
Everything lives in the browser's localStorage on that device. Use "Export data" regularly; "Import data" restores on a new device.

## Season 1
Sept 1 – Nov 23, 2026. Focus: Tennis and Chess (2× XP). Bosses: WTN 26.5 and Rapid 1300.

## Editing rules
XP rates, bosses, season dates, and the chess.com username are all in the `configuration` block at the top of the script in `index.html`.
To start season 2: change `SEASON`, replace the two entries in `BOSSES`, and reset `bosses` in the exported JSON (or leave slain ones — they just stay marked done).

## Testing without a server
Opening `index.html` directly from disk works for everything except the service worker and (in some browsers) chess.com sync. Use `python3 -m http.server` in the folder for a full local test.
