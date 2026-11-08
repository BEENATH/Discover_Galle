# Discover Galle — Premium Tourism Website

A responsive, static tourism website concept for Galle Fort, built with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — website structure and content
- `style.css` — responsive premium visual design
- `script.js` — mobile navigation, destination filters and event tracking
- `analytics.js` — Google Tag Manager dataLayer integration and analytics event helper

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Before publishing
1. In `analytics.js`, replace `GTM-XXXXXXX` with your own Google Tag Manager container ID.
2. In GTM, configure a GA4 Configuration/Google tag and Meta Pixel tag.
3. Create GA4 event tags/triggers for:
   - `destination_filter`
   - `place_map_click`
   - `stay_category_click`
   - `directions_click`
   - `contact_map_click`
   - `generate_lead`
4. Configure the matching Meta Pixel events in GTM if required by your assignment.
5. The Web3Forms access key in `index.html` is the key supplied in the example source. Confirm it belongs to your Web3Forms account and test a submission before publishing. Replace it if necessary.
6. Replace the remote stock photos with licensed destination photographs before public/commercial use.

## Important analytics note
The site pushes events to `window.dataLayer`. GA4 and Meta Pixel data collection will only begin after you configure and publish your own tags in Google Tag Manager. No visitor counts or analytics data are fabricated by this template.

## Deploy
Upload the folder to Netlify, or push it to GitHub and connect the repository to Netlify. No build command is required; publish directory is the project root.
