/*
  ANALYTICS CONFIGURATION
  1. Replace GTM-XXXXXXX with your Google Tag Manager container ID.
  2. In GTM, configure GA4 and Meta Pixel tags, then publish the container.
  3. Set up GA4 events using the event names emitted below.
  4. For Meta Pixel, configure matching custom events in GTM.
  Keep IDs out of public reports and use your own verified account IDs.
*/
(function () {
  const GTM_ID = 'GTM-XXXXXXX'; // Replace with your GTM container ID.

  if (GTM_ID && GTM_ID !== 'GTM-PVW9W5ZK') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID);
    document.head.appendChild(script);
  }

  window.trackTourismEvent = function (eventName, parameters = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...parameters });
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters);
    }
    console.info('[Tourism analytics]', eventName, parameters);
  };

  // Useful events for the group assignment:
  // destination_filter, place_map_click, stay_category_click,
  // directions_click, contact_map_click, generate_lead.
})();
