
/*
  DISCOVER GALLE - ANALYTICS CONFIGURATION
  Google Tag Manager + GA4 Event Tracking
*/

(function () {
  const GTM_ID = 'GTM-PVW9W5ZK';

  // Load Google Tag Manager
  if (GTM_ID && GTM_ID !== 'GTM-XXXXXXX') {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://www.googletagmanager.com/gtm.js?id=' +
      encodeURIComponent(GTM_ID);

    document.head.appendChild(script);
  }

  // Tourism website custom event tracking
  window.trackTourismEvent = function (
    eventName,
    parameters = {}
  ) {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: eventName,
      ...parameters
    });

    console.info(
      '[Discover Galle Analytics]',
      eventName,
      parameters
    );
  };

})();
