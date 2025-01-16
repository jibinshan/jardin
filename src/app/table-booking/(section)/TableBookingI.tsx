
const TableBookingI = ({ }) => {
    const htmlContent = `
   <!DOCTYPE html>
        <html lang="en-GB">
        <head>
            <title>Online bookings | OpenTable</title>
            <meta name="description" content="Instantly reserve a table. Free online bookings anytime, anywhere.">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2">
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <link rel="stylesheet" type="text/css" href="https://cdn.otstatic.com/cfe/14/css/reservation-widget-standard-NMKQQYKQ.css">
            <link rel="preload" href=//cdn.otstatic.com/cfe/14/reservation-widget-standard.translations.en-GB-11E28D0B.js as="script" crossOrigin="anonymous" />
            <style>
                body {
                    margin: 0;
                }
            </style>
        <script>bazadebezolkohpepadr="569729255"</script><script type="text/javascript" src="https://www.opentable.co.uk/akam/13/21f5624d"  defer></script></head>
        <body>
            <script async charset="utf-8" crossorigin="anonymous" src="//cdn.otstatic.com/cfe/14/reservation-widget-standard.translations.en-GB-11E28D0B.js" type="module"></script>
            <script>
                (function(w) {
                    window._OT_WIDGET_ENTRY_TRANSLATION_ = "//cdn.otstatic.com/cfe/14/reservation-widget-standard.translations.en-GB-11E28D0B.js";
                    window._OT_BUILD_LOCALE_="en-GB";
                    window._OT_WIDGET_TLD_ = "co.uk";
                })(window)
            </script>
            <div id="ot-reservation-widget" class="parent-widget-type-standard " data-ot-id="71d292b6-a4f3-4f64-9b43-350de69e891015" data-ot-restaurants="%5B%7B%22restaurantId%22%3A354462%2C%22name%22%3A%22Jard%C3%ADn%22%2C%22offsetInMinutes%22%3A0%2C%22inventoryType%22%3A%22reservationsOnly%22%2C%22reservationMaxPartySize%22%3A20%7D%5D" data-ot-type="standard" data-ot-theme="wide" data-ot-colorThemeId="2" data-ot-domain="co.uk" data-ot-isIframe="true" data-ot-isNewTab="false" data-ot-lang="en-GB" data-ot-otSource="Restaurant website" data-ot-otCampaign="undefined" data-ot-isDarkMode="true" data-ot-referrerId="undefined" data-ot-reservationWidgetHost="https://www.opentable.co.uk" data-ot-font="BrandonText" data-ot-otLogo="standard" data-ot-primaryColor="ffffff" data-ot-primaryFontColor="333333" data-ot-buttonColor="da3743" data-ot-buttonFontColor="ffffff" data-ot-logoPid="0" data-ot-backgroundPid="0" data-ot-colorCustomization="true" data-ot-hideOtLogo="true" data-ot-demo="false" data-ot-forceCfeSpa="false"></div>
            <script src="https://cdn.otstatic.com/cfe/14/js/reservation-widget-standard-Z2SN5LX7.js?uuid=71d292b6-a4f3-4f64-9b43-350de69e891015" type="module"></script>
        <noscript><img src="https://www.opentable.co.uk/akam/13/pixel_21f5624d?a=dD0yOTc2NDczZTYxNDVjNWIxMTY4NGJkNGQ2OWI4ZmY2OTUzOWUwZTI5JmpzPW9mZg==" style="visibility: hidden; position: absolute; left: -999px; top: -999px;" /></noscript></body>
        </html>
`;

    return (
        <section className="w-full h-[50vh] flex items-center justify-center bg-black" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default TableBookingI